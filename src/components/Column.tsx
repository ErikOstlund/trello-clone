import { ColumnContainer, ColumnTitle } from '../styles';
import { AddNewItem } from './AddNewItem';
import { Card } from './Card';

type ColumnProp = {
	text: string;
};

export const Column = ({ text }: ColumnProp) => {
	return (
		<ColumnContainer>
			<ColumnTitle>{text}</ColumnTitle>
			<Card text='App Architecture' />
			<Card text='Learn Typescript' />
			<Card text='Static Typing' />
			<AddNewItem toggleButtonText='+ Add New Card' onAdd={console.log} dark />
		</ColumnContainer>
	);
};
