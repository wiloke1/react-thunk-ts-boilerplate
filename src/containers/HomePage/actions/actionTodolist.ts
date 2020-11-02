import { TodolistItem } from 'types/api/Todolist';
import { createAsyncAction } from 'utils/functions/reduxActions';

export const getTodolist = createAsyncAction(['@getTodolistRequest', '@getTodolistSuccess', '@getTodolistFailure'])<null, TodolistItem[], string>();
