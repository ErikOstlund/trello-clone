import { useRef } from "react";
import { useDrop } from "react-dnd";
import { throttle } from "throttle-debounce-ts";
import { ColumnContainer, ColumnTitle } from "../styles";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { useAppState } from "../state/AppStateContext";
import { addTask, moveList } from "../state/actions";
import { useItemDrag } from "../utils/useItemDrag";
import { isHidden } from "../utils/isHidden";

type ColumnProps = {
	text: string;
	id: string;
	isPreview?: boolean;
};

export const Column = ({ text, id, isPreview }: ColumnProps) => {
	const { getTasksByListId, dispatch, draggedItem } = useAppState();
	const tasks = getTasksByListId(id);
	const { drag } = useItemDrag({ type: "COLUMN", id, text });
	const ref = useRef<HTMLDivElement>(null);

	const [, drop] = useDrop({
		accept: "COLUMN",
		hover: throttle(200, () => {
			if (!draggedItem) {
				return;
			}
			if (draggedItem.type === "COLUMN") {
				if (draggedItem.id === id) {
					return;
				}
				dispatch(moveList(draggedItem.id, id));
			}
		})
	});

	drag(drop(ref));

	return (
		<ColumnContainer
			ref={ref}
			isHidden={isHidden(draggedItem, "COLUMN", id, isPreview)}
			isPreview={isPreview}
		>
			<ColumnTitle>{text}</ColumnTitle>

			{tasks.map((task) => (
				<Card key={task.id} id={task.id} text={task.text} />
			))}

			<AddNewItem
				toggleButtonText="+ Add New Card"
				onAdd={(text) => dispatch(addTask(text, id))}
				dark
			/>
		</ColumnContainer>
	);
};
