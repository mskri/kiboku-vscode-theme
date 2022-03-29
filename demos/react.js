import React, { useContext } from 'react';
import Todo from './todo';
import { TodoAppContext } from './index';

// Something and something else
export default function Todos(props) {
	const { todoList, handleRemoveItem } = props;
	const theme = useContext(TodoAppContext);
	const numberOfTodos = 3;
	const isVisible = false;
	const back = null;

	const defaultValues = {
		theme,
		back,
		value: 1234,
	};

	console.log('Hello!', numberOfTodos, back);

	if (back) {
		return defaultValues;
	}

	return (
		<ul className={theme.mode}>
			{todoList.map((todo) => (
				<Todo
					{...todo}
					handleRemoveItem={() => {
						handleRemoveItem(todo.id);
					}}
					key={todo.id}
				/>
			))}
		</ul>
	);
}
