import { connect } from 'react-redux';
import { toggleTodo } from '~/actions';
import { TodoList } from '~/components/TodoList';

const getVisibleTodos = (todos: any, filter: any) => { // tslint:disable-line
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter((t: any) => t.completed); // tslint:disable-line
    case 'SHOW_ACTIVE':
      return todos.filter((t: any) => !t.completed); // tslint:disable-line
    default:
      return undefined;
  }
};

const mapStateToProps = (state: any) => { // tslint:disable-line
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onTodoClick: (id: number) => dispatch(toggleTodo(id)),
  };
};

export const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
