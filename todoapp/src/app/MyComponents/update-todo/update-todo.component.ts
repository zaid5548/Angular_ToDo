import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class UpdateTodoComponent implements OnInit {

  content:any;
  title:string|undefined;
  desc:string|undefined;
  @Input() todo!:Todo;
  @Output() todoUpdate: EventEmitter<Todo> = new EventEmitter();

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
  }

  open(content:any) {
    this.modalService.open(content);
  }

  updateTodo(todo:Todo){
    console.log("At the Time of Calling Update Function : "+this.title+" "+this.desc+" "+todo)
    // const todo={
    //   sno:8,
    //   title:this.title,
    //   desc:this.desc,
    //   active:true 
    // }
    todo.title=this.title;
    todo.desc=this.desc;
    console.log("Before Update todo : "+todo.desc+"....... "+this.title);
    this.todoUpdate.emit(todo);
    console.log("After Update todo : "+todo.desc+"....... "+this.title);
  }

}
