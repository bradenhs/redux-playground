const todo = (state: any = {}, action: any) => { // tslint:disable-line
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return (window as any).Object.assign({}, state, { // tslint:disable-line
        completed: !state.completed,
      });

    default: return state;
  }
};

export const todos = (state: any = [], action: any) => { // tslint:disable-line
  switch (action.type) {
    case 'ADD_TODO': return [ ...state, todo(undefined, action) ];
    case 'TOGGLE_TODO': return state.map((t: any) => todo(t, action)); // tslint:disable-line
    default: return state;
  }
};
