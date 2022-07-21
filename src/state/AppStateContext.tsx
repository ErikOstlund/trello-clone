import React, { createContext, useContext, Dispatch } from "react";
import { appStateReducer, AppState, List, Task } from "./appStateReducer";
import { Action } from "./actions";
import { useImmerReducer } from "use-immer";

// ---------- hardcode the initial data
const appData: AppState = {
	lists: [
		{
			id: "0",
			text: "To Do",
			tasks: [{ id: "c0", text: "App Architecture" }]
		},
		{
			id: "1",
			text: "In Progress",
			tasks: [{ id: "c2", text: "Learn Typescript" }]
		},
		{
			id: "2",
			text: "Done",
			tasks: [{ id: "c3", text: "Static Typing" }]
		}
	]
};

// ---------- Define the app state context

type AppStateContextProps = {
	lists: List[];
	getTasksByListId(id: string): Task[];
	dispatch: Dispatch<Action>;
};

const AppStateContext = createContext<AppStateContextProps>(
	{} as AppStateContextProps
);

// ---------- Define the Provider

export const AppStateProvider = ({
	children
}: {
	children: React.ReactNode;
}) => {
	const [state, dispatch] = useImmerReducer(appStateReducer, appData);

	const { lists } = state;
	const getTasksByListId = (id: string) => {
		return lists.find((list) => list.id === id)?.tasks || [];
	};

	return (
		<AppStateContext.Provider value={{ lists, getTasksByListId, dispatch }}>
			{children}
		</AppStateContext.Provider>
	);
};

// ---------- Custom hook to access data in context

export const useAppState = () => {
	return useContext(AppStateContext);
};
