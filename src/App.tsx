import { AppContainer } from './styles';
import { Column } from './components/Column';
import { AddNewItem } from './components/AddNewItem';

export const App = () => {
	return (
		<AppContainer>
			<Column text='Todo' />
			<AddNewItem toggleButtonText='+ Add New List' onAdd={console.log} />
		</AppContainer>
	);
};
