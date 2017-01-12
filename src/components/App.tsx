// Libraries
import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// My Code
import { AddTodo } from '../containers/AddTodo';
import { VisibleTodoList } from '../containers/VisibleTodoList';
import { Footer } from './Footer';

export class App extends React.Component<{}, {}> {
  public render() {
    return <MuiThemeProvider>
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    </MuiThemeProvider>;
  }
}
