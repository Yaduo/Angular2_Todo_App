import { Component } from '@angular/core';
import {TodoService} from './todo.service' ;
import { TodoModel } from './todo.model'

@Component({
    selector: 'todo-input',
    template: `<div>TodoInput here<div>
                <input type="text" [(ngModel)]="todoModel.Title">
                <button (click)="onClick()">button</button>
            `
})

export class TodoInput { 
    
    todoModel = new TodoModel("");
    
    constructor(private todoService:TodoService) {
        console.log("TodoInput constructor")
    }

    onClick() {
        let deepCopy = new TodoModel("");
        Object.assign(deepCopy, this.todoModel);
        //this.todoService.todos.push(deepCopy);
        this.todoService.addTodo(deepCopy);
    }


}