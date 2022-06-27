import { ColumnContainer, ColumnTitle, CardContainer } from '../styles';

type ColumnProp = {
	text: string;
};

export const Column = ({ text }: ColumnProp) => {
	return (
		<ColumnContainer>
			<ColumnTitle>{text}</ColumnTitle>
			<CardContainer>App Architecture</CardContainer>
			<CardContainer>Typescript</CardContainer>
			<CardContainer>Static Typing</CardContainer>
		</ColumnContainer>
	);
};
