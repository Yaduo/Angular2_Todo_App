import { Component, Input } from '@angular/core';
import {TodoService} from './todo.service' ;
import { TodoModel } from './todo.model';
import {SearchPipe} from "./search.pipe";

@Component({
    selector: 'todo-list',
    template: `
                <div>
                    <ul>
                        <li *ngFor="let todo of todoService.todos | started:status">
                            <todo-item-render [todo]=todo (toggle)=todoService.toggleTodo($event) ></todo-item-render>
                        </li>
                    </ul>
                </div> 
            `
})
export class TodoList { 
    @Input() status;

    constructor(private todoService:TodoService) {
        console.log("TodoInput constructor")
    }
}