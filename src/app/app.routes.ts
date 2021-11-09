import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';

export const appRoutes = [
  {
    path: '',
    component: TodoListComponent
  },
  {
    path: 'add',
    loadChildren: () =>
      import('./add-todo/add-todo.module').then(module => module.AddTodoModule)
  },
  {
    path: 'update',
    loadChildren: () =>
      import('./update-todo/update-todo.module').then(
        module => module.UpdateTodoModule
      )
  }
];
