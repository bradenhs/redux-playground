import * as React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '~/actions';

interface IProps {
  dispatch?: Function;
}

export const AddTodo = connect()(({ dispatch }: IProps) => {
  let inputEl: HTMLInputElement;

  return <div>
    <form
      onSubmit={ e => {
        e.preventDefault();
        if (!inputEl.value.trim()) {
          return;
        }
        dispatch(addTodo(inputEl.value));
        inputEl.value = '';
      } }
    >
      <input ref={ c => inputEl = c } />
      <button type='submit'>
        Add Todo
      </button>
    </form>
  </div>;
});
