import * as React from 'react';
import { ThunkAction as _ThunkAction } from 'redux-thunk';
import { Reducers } from './configureStore';

declare global {
  declare type AppState = Reducers;
  declare type GetState = () => AppState;
  declare type ThunkAction<TReturnType, TAction> =
    | _ThunkAction<TReturnType, AppState, unknown, TAction>
    | Promise<_ThunkAction<TReturnType, AppState, unknown, TAction>>;
  declare type Connect<TTypeOfMapStateToProps, TTypeOfMapDispatchToProps> = ReturnType<TTypeOfMapStateToProps> & TTypeOfMapDispatchToProps;

  declare type ValueOf<T> = T[keyof T];

  // Others
  declare type Timeout = NodeJS.Timeout;
}
