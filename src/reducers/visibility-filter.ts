export const visibilityFilter = (state = 'SHOW_ALL', action: any) => { // tslint:disable-line
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER': return action.filter;
    default: return state;
  }
};
