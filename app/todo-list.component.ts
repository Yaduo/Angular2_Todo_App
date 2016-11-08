import { Component } from '@angular/core';
import {TodoService} from './todo.service' ;
import { TodoModel } from './todo.model'

@Component({
    selector: 'todo-list',
    template: `
                <div>
                    <ul>
                        <li *ngFor="let todo of todoService.todos">
                            <span [hidden]="todo.Status=='completed'">{{todo.Title}}</span>
                            <span [contentEditable]="todo.Status=='completed'">{{todo.Title}}</span>
                            <button (click)="todo.toggle()">toggle</button>
                        </li>
                    </ul>
                </div> 
            `
})

export class TodoList { 

    constructor(private todoService:TodoService) {
        console.log("TodoInput constructor")
    }
}