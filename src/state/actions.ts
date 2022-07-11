// action types
export type Action =
	| {
			type: "ADD_LIST";
			payload: string;
	  }
	| {
			type: "ADD_TASK";
			payload: { text: string; listId: string };
	  };

// action creators
export const addList = (text: string): Action => ({
	type: "ADD_LIST",
	payload: text
});

export const addTask = (text: string, listId: string): Action => ({
	type: "ADD_TASK",
	payload: { text, listId }
});
