import * as React from 'react';

interface IProps {
  onClick: () => void;
  completed: boolean;
  text: string;
}

export const Todo = ({ onClick, completed, text }: IProps) =>
  <li
    onClick={ onClick }
    style={ {
      textDecoration: completed ? 'line-through' : 'none',
    } }
  >
    { text }
  </li>;
