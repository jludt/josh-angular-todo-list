import { createAction, props } from '@ngrx/store';
import { Todo } from '../shared/models/todo';

export const addTodo = createAction(
  '[Todo Items] Add Todo',
  props<{ todo: Todo }>()
);

export const deleteTodo = createAction(
  '[Todo Items] Delete Todo',
  props<{ id: number }>()
);
