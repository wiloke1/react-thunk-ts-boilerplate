import { getTodolist } from '../actions/actionTodolist';
import { AxiosResponse } from 'axios';
import { TodolistItem } from 'api/Todolist';
import { createDispatchAction } from 'utils/functions/reduxActions';
import fetchAPI from 'utils/functions/fetchAPI';

type ThunkTodolistAction = ThunkAction<typeof getTodolist>;

export const thunkTodolist = (endpoint: string): ThunkTodolistAction => async dispatch => {
  dispatch(getTodolist.request(null));
  try {
    const res: AxiosResponse<TodolistItem[]> = await fetchAPI.get(endpoint);
    dispatch(getTodolist.success(res.data));
  } catch {
    dispatch(getTodolist.failure('Error'));
  }
};

export const useGetTodolistRequest = createDispatchAction(thunkTodolist);
