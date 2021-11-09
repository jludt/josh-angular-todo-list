import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterReducerState, RouterState } from '@ngrx/router-store/public_api';
import { Todo } from '../shared/models/todo';
import { APP_FEATURE_KEY } from './todo.reducers';
import { getSelectors } from '@ngrx/router-store';

export const featureState = createFeatureSelector(APP_FEATURE_KEY);
export const routeState = createFeatureSelector<RouterReducerState>('router');
export const getSelectedTodoId = getSelectors(routeState).selectRouteParam(
  'todoId'
);

export const getAllTodos = createSelector(
  featureState,
  (todos: Todo[]) => todos
);

export const getSelectTodo = createSelector(
  getAllTodos,
  getSelectedTodoId,
  (todos: Todo[], id: string) => todos.find(todo => todo.id === +id)
);
