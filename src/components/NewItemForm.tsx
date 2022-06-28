import { useState } from 'react';
import {
	NewItemFormContainer,
	NewItemButton,
	NewItemInput,
	CancelButton,
	ButtonContainer
} from '../styles';

type NewItemFormProps = {
	onAdd(text: string): void;
	onCancel(): void;
};

export const NewItemForm = ({ onAdd, onCancel }: NewItemFormProps) => {
	const [text, setText] = useState('');

	return (
		<NewItemFormContainer>
			<NewItemInput value={text} onChange={(e) => setText(e.target.value)} />
			<ButtonContainer>
				<NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
				<CancelButton onClick={() => onCancel()}>Cancel</CancelButton>
			</ButtonContainer>
		</NewItemFormContainer>
	);
};
