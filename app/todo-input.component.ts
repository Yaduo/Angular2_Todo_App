import { Component } from '@angular/core';
import {TodoService} from './todo.service' ;

@Component({
    selector: 'todo-input',
    template: `<div>TodoInput here<div>
                <input type="text" [(ngModel)]="todoModel">
                <button (click)="onClick()">button</button>
            `
})

export class TodoInput { 
    
    todoModel: any;
    
    constructor(private todoService:TodoService) {
        console.log("TodoInput constructor")
    }

    onClick() {
        this.todoService.todos.push(this.todoModel)
    }


}