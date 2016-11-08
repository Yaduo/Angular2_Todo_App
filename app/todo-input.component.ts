import { Component } from '@angular/core';
import {TodoService} from './todo.service' ;

@Component({
    selector: 'todo-input',
    template: `<div>TodoInput here<div>
                <input type="text" #myInput>
                <button (click) = "onClick(myInput.value)"><button>
            `
})

export class TodoInput { 

    constructor(private todoService:TodoService) {
        console.log("TodoInput constructor")
    }

    onClick(value: string) {
        console.log(value)
        this.todoService.todos.push(value)
        console.log(this.todoService.todos)
    }


}