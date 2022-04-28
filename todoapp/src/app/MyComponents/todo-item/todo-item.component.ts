import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!:Todo;
  @Input() i:number |undefined;
  @Output() todoDelete: EventEmitter<Todo>=new EventEmitter();
  @Output() todoCheckbox:EventEmitter<Todo>=new EventEmitter();
  showForm:boolean|undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(todo:Todo){
    this.todoDelete.emit(todo);
    console.log("Todo is deleted");
  }

  onCheckBoxClick(todo:Todo){
    this.todoCheckbox.emit(todo);
  }

  onClickForm(showForm:boolean){
    console.log("Flag of ShowForm : "+showForm);
    if(this.showForm===true){
      console.log("Inside If Condition...");
      this.showForm=false;
    }else{
      console.log("Inside Else Condition...");
      this.showForm=true;
    }
  }

}
