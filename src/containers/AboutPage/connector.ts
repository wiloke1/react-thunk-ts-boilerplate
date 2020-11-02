import { thunkTodolist } from 'containers/HomePage/thunks/thunkTodolist';
import { connect } from 'react-redux';

const mapState = (state: AppState) => ({
  todolist: state.todolist,
});

const mapDispatch = {
  getTodolistRequest: thunkTodolist,
};

const connector = connect(mapState, mapDispatch);

export default connector;
