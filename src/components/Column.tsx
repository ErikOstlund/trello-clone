import { ColumnContainer, ColumnTitle } from '../styles';
import { AddNewItem } from './AddNewItem';
import { Card } from './Card';
import { useAppState } from '../state/AppStateContext';

type ColumnProp = {
	id: string;
	text: string;
};

export const Column = ({ text, id }: ColumnProp) => {
	const { getTasksByListId } = useAppState();

	const tasks = getTasksByListId(id);

	return (
		<ColumnContainer>
			<ColumnTitle>{text}</ColumnTitle>

			{tasks.map((task) => (
				<Card key={task.id} id={task.id} text={task.text} />
			))}

			<AddNewItem toggleButtonText='+ Add New Card' onAdd={console.log} dark />
		</ColumnContainer>
	);
};
