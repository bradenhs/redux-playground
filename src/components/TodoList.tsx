// Libraries
import * as React from 'react';

// My Code
import { Todo } from '~/components/Todo';

interface IProps {
  todos: {
    id: number;
    completed: boolean;
    text: string;
  }[];
  onTodoClick: Function;
}

export const TodoList = ({ todos, onTodoClick }: IProps) => (
  <ul>
    { todos.map(todo =>
      <Todo
        key={ todo.id }
        { ...todo }
        onClick={ () => onTodoClick(todo.id) }
      />,
    ) }
  </ul>
);
