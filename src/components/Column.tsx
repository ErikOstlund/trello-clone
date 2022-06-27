import { ColumnContainer, ColumnTitle } from '../styles';
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
		</ColumnContainer>
	);
};
