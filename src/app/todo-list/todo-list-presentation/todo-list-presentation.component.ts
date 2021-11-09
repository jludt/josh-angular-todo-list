import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'todo-list-presentation',
  templateUrl: './todo-list-presentation.component.html',
  styleUrls: ['./todo-list-presentation.component.css']
})
export class TodoListPresentationComponent implements OnInit {
  @Input() todoList: any[];
  @Output() deleteTodo = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}
}
