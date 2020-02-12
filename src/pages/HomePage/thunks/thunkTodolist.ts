import { getTodolist } from '../actions/actionTodolist';
import Axios, { AxiosResponse } from 'axios';
import { TodolistItem } from 'api/Todolist';
import { createDispatchAction, ActionTypes } from 'utils/functions/reduxActions';

type ThunkTodolistAction = ThunkAction<Promise<void>, ActionTypes<typeof getTodolist>>;

export const thunkTodolist = (endpoint: string): ThunkTodolistAction => async dispatch => {
  dispatch(getTodolist.request(null));
  try {
    const res: AxiosResponse<TodolistItem[]> = await Axios.get(endpoint);
    dispatch(getTodolist.success(res.data));
  } catch {
    dispatch(getTodolist.failure('Error'));
  }
};

export const useGetTodolistRequest = createDispatchAction(thunkTodolist);
