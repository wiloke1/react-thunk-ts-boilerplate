import React, { Component } from 'react';
import { ConnectedProps } from 'react-redux';
import connector from './connector';

export interface AboutPageProps extends ConnectedProps<typeof connector> {}

class AboutPage extends Component<AboutPageProps> {
  private handleGetTodolist = async () => {
    const { getTodolistRequest } = this.props;
    await getTodolistRequest('todolist');
  };

  public render() {
    const { todolist } = this.props;

    if (todolist.isLoading) {
      return <h2>Loading...</h2>;
    }

    if (!!todolist.errorMessage) {
      return <h2>{todolist.errorMessage}</h2>;
    }

    return (
      <div>
        <h1>AboutPage</h1>
        <button onClick={this.handleGetTodolist}>Get todolist</button>
        <div>{JSON.stringify(todolist.data)}</div>
      </div>
    );
  }
}

export default connector(AboutPage);
