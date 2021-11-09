import { Component, OnInit } from '@angular/core';
import { TodoListService, Planet } from './todo-list.service';
import { Observable, Subject } from 'rxjs';
import { concatMap, map, startWith } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { deleteTodo } from '../state/todo.actions';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoListData$: Observable<any>;
  planetsToVisit$: Observable<Planet[]>;
  constructor(private store: Store) {}
  todoDelete$ = new Subject();

  ngOnInit() {
    //this.todoListData$ = this.todolistService.get();

    this.todoListData$ = this.store.select(state => state['todo']);
  }
  delete(todo) {
    // this.todolistService
    //   .delete(todo)
    //   .subscribe(() => this.todoDelete$.next(todo));
    // This did not properly update the todoListData$ obeservable
    //this.todolistService.delete(todo).subscribe();
    this.store.dispatch(deleteTodo({ id: todo.id }));
  }
}
