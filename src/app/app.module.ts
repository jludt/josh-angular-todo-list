import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { appRoutes } from './app.routes';
import { TodoListService } from './todo-list/todo-list.service';
import { TodoListPresentationComponent } from './todo-list/todo-list-presentation/todo-list-presentation.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoFormComponent } from './shared/todo-form/todo-form.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';
import { TodoFormModule } from './shared/todo-form/todo-form.module';
import { StoreModule } from '@ngrx/store';
import { todosReducer } from './state/todo.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    TodoFormModule,
    StoreModule.forRoot({ todo: todosReducer, router: routerReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 35,
      logOnly: false
    }),
    StoreRouterConnectingModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    TodoListComponent,
    TodoListPresentationComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
