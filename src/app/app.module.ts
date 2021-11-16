import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { appRoutes } from "./app.routes";
import { TodoFormModule } from "./shared/todo-form/todo-form.module";
import { TodoListPresentationComponent } from "./todo-list/todo-list-presentation/todo-list-presentation.component";
import { TodoListComponent } from "./todo-list/todo-list.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    TodoFormModule,
  ],
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListPresentationComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
