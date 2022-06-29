import { AppContainer } from './styles';
import { Column } from './components/Column';
import { AddNewItem } from './components/AddNewItem';
import { useAppState } from './state/AppStateContext';

export const App = () => {
	const { lists } = useAppState();

	return (
		<AppContainer>
			{lists.map((list) => (
				<Column key={list.id} id={list.id} text={list.text} />
			))}

			<AddNewItem toggleButtonText='+ Add New List' onAdd={console.log} />
		</AppContainer>
	);
};
