import { Component, VERSION } from '@angular/core';
import {Todo} from './todo';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 
  list:Todo[];
  todoname:String;
  
  ngOnInit(){
    this.list=[];
    this.todoname="";
  }
  
  addToDo(){
    //console.log(this.todoname);
    if(this.todoname !== ""){
      const newItem: Todo={
        id:Date.now(),
        value: this.todoname,
        isDone: false
        
      };
      //console.log("Clicked");
      this.list.push(newItem);
    }
    this.todoname="";
    // console.log("Clicked");
    // console.log(this.list);
    
  }
  removetodo(id:Number){
    this.list=this.list.filter(item=>item.id !== id);
  }
}
