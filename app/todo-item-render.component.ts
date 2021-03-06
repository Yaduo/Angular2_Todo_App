import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'todo-item-render',
    template: `<div>
                <span [hidden]="todo.Status=='completed'">{{todo.Title | uppercase}}</span>
                <span [contentEditable]="todo.Status=='completed'">{{todo.Title}}</span>
                <button (click)="toggle.emit(todo)">toggle</button>
             </div> `
})
export class TodoItemRender {

    @Input() todo;
    @Output() toggle = new EventEmitter();
    
    constructor(){}

}
