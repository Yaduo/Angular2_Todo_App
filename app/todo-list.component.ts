import { Component } from '@angular/core';
import {TodoService} from './todo.service' ;
import { TodoModel } from './todo.model';
import {SearchPipe} from "./search.pipe";

@Component({
    selector: 'todo-list',
    template: `
                <div>
                    <ul>
                        <li *ngFor="let todo of todoService.todos | search">
                            <todo-item-render [todo]=todo></todo-item-render>
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