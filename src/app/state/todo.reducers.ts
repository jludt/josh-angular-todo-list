import { createReducer, on, Action } from '@ngrx/store';
import { Todo, Todos } from '../shared/models/todo';
import * as actions from './todo.actions';

export const APP_FEATURE_KEY = 'todo';
export const initialState = [
  {
    createdAt: '2021-08-03T08:44:39.033Z',
    name: 'Dive into NgRx #2',
    description: 'Or Redux?',
    completed: false,
    completedOn: 1628001078,
    id: 3
  },
  {
    createdAt: '2021-08-02T21:31:21.989Z',
    name: 'Feed Dog',
    description: 'Feed dog breakfast',
    completed: false,
    completedOn: 1628005615,
    id: 4
  },
  {
    createdAt: '2021-08-02T23:46:06.440Z',
    name: 'Mow lawn',
    description: 'Cut the grass',
    completed: false,
    completedOn: 1628005593,
    id: 5
  },
  {
    createdAt: '2021-08-03T09:27:17.722Z',
    name: 'do this',
    description: 'do it',
    completed: false,
    completedOn: 1628005576,
    id: 6
  },
  {
    createdAt: '2021-08-03T13:38:50.234Z',
    name: 'Party time!',
    description: 'Excellent!',
    completed: false,
    completedOn: 1628005623,
    id: 7
  }
];

const whatToDoWhenAddTodoAction = (state: Todo[], action) => {
  return [...state, action.todo];
};

export const todosReducer = createReducer(
  initialState,
  on(actions.addTodo, whatToDoWhenAddTodoAction),
  on(actions.deleteTodo, (state, action) =>
    state.filter(todo => +todo.id != +action.id)
  )
);

export function reducer(state = initialState, action: any) {
  switch (action.type) {
    case action.type === actions.addTodo.type:
      return whatToDoWhenAddTodoAction(state, action);
  }
}
