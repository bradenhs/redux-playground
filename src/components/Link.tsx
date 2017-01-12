import * as React from 'react';

interface IProps {
  children: React.ReactChildren;
  onClick: () => void;
  active: boolean;
}

export const Link = ({ active, children, onClick }: IProps) => {
  if (active) {
    return <span>{ children }</span>;
  }

  return <a
    href='#'
    onClick={ e => {
      e.preventDefault();
      onClick();
    } }
  >
    { children }
  </a>;
};
