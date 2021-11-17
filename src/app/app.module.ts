import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { AppComponent } from "./app.component";
import { appRoutes } from "./app.routes";
import { TodoFormModule } from "./shared/todo-form/todo-form.module";
import { todosReducer } from "./todo-list/state/todos.reducers";
import { TodoListPresentationComponent } from "./todo-list/todo-list-presentation/todo-list-presentation.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    TodoFormModule,
    StoreModule.forRoot([]),
    StoreModule.forFeature("todos", todosReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 35,
      logOnly: false,
      features: {
        pause: false,
        lock: true,
        persist: true,
      },
    }),
    EffectsModule.forRoot([]),
  ],
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListPresentationComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
