let nextTodoId = 0;

export const addTodo = (text: string) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
  };
};

export type Filter = 'SHOW_ALL' | 'SHOW_ACTIVE' | 'SHOW_COMPLETED';

export const setVisibilityFilter = (filter: Filter) => {
  return { type: 'SET_VISIBILITY_FILTER', filter };
};

export const toggleTodo = (id: number) => {
  return { type: 'TOGGLE_TODO', id };
};
