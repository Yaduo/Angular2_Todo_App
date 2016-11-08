import { Injectable } from '@angular/core';
import { TodoModel } from './todo.model'

@Injectable()
export class TodoService { 

    todos = [
        new TodoModel("eat"),
        new TodoModel("run"),
        new TodoModel("look")
    ];

    addTodo(todo: TodoModel) {
        this.todos = [...this.todos, todo];
    }
}