import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list/todo-list.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { addTodo } from '../state/todo.actions';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  constructor(private router: Router, private store: Store) {}

  ngOnInit() {}

  addTodo(todo) {
    // DO STUFF
     const id = new Date().getTime();
    console.log('A new todo has been added!', todo);
    this.store.dispatch(
      addTodo({ todo: {...todo,id}}));
  }
}
