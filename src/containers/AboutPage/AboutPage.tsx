import React, { Component } from 'react';
import { thunkTodolist } from 'containers/HomePage/thunks/thunkTodolist';
import { connect, ConnectedProps } from 'react-redux';

const mapState = (state: AppState) => ({
  todolist: state.todolist,
});

const mapDispatch = {
  getTodolistRequest: thunkTodolist,
};

const connector = connect(mapState, mapDispatch);

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
