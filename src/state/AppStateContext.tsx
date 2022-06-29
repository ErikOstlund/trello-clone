import { createContext, useContext } from 'react';

// ---------- type the data structure
type Task = {
	id: string;
	text: string;
};

type List = {
	id: string;
	text: string;
	tasks: Task[];
};

export type AppState = {
	lists: List[];
};

// ---------- hardcode the initial data
const appData: AppState = {
	lists: [
		{
			id: '0',
			text: 'To Do',
			tasks: [{ id: 'c0', text: 'App Architecture' }]
		},
		{
			id: '1',
			text: 'In Progress',
			tasks: [{ id: 'c2', text: 'Learn Typescript' }]
		},
		{
			id: '2',
			text: 'Done',
			tasks: [{ id: 'c3', text: 'Static Typing' }]
		}
	]
};

// ---------- Define the app state context

type AppStateContextProps = {
	lists: List[];
	getTasksByListId(id: string): Task[];
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
	const { lists } = appData;

	const getTasksByListId = (id: string) => {
		return lists.find((list) => list.id === id)?.tasks || [];
	};

	return (
		<AppStateContext.Provider value={{ lists, getTasksByListId }}>
			{children}
		</AppStateContext.Provider>
	);
};

// ---------- Custom hook to access data in context

export const useAppState = () => {
	return useContext(AppStateContext);
};