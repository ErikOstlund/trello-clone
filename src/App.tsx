import { AppContainer } from "./styles";
import { useAppState } from "./state/AppStateContext";
import { addList } from "./state/actions";
import { Column } from "./components/Column";
import { AddNewItem } from "./components/AddNewItem";
import { CustomDragLayer } from "./components/CustomDragLayer";

export const App = () => {
	const { lists, dispatch } = useAppState();

	return (
		<AppContainer>
			<CustomDragLayer />
			{lists.map((list) => (
				<Column key={list.id} id={list.id} text={list.text} />
			))}

			<AddNewItem
				toggleButtonText="+ Add New List"
				onAdd={(text) => dispatch(addList(text))}
			/>
		</AppContainer>
	);
};
