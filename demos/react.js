import React, { useContext } from 'react';
import Todo from './todo';
import { TodoAppContext } from './index';

export default function Todos(props) {
	const { todoList, handleRemoveItem } = props;
	const theme = useContext(TodoAppContext);
	const numberOfTodos = 3;
	const isVisible = false;

	console.log(numberOfTodos);

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
