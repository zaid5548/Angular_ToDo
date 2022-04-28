import { Component, OnInit } from '@angular/core';
import {Todo } from "../../Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem:string|null;
  todos:Todo[];
  count:number|0;

constructor(){
  this.localItem=localStorage.getItem("todos");
  if(this.localItem==null){
    this.todos=[]
    this.count=0
  }else{
    console.log("what happend")
    this.todos=JSON.parse(this.localItem);
    this.count=this.todos.length;
    console.log("Total Count: "+this.count);
  }
}
  ngOnInit(): void {
  }

  deleteTodo(todo:Todo){
    console.log(todo);
    const index=this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
    this.count=this.todos.length;
    console.log("Total Count: "+this.count);
  }

  addTodo(todo:Todo){
    console.log(todo);
    if(todo.title===null || todo.title==="" || todo.title===undefined){
      alert('Please Enter the Value in Input Areas...');
    }else{
      this.todos.push(todo);
      localStorage.setItem("todos",JSON.stringify(this.todos));
    }
    this.count=this.todos.length;
    console.log("Total Count: "+this.count);
  }

  toggleTodo(todo:Todo){
    const index=this.todos.indexOf(todo);
    this.todos[index].active=!this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

}
