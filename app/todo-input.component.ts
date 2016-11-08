import { Component } from '@angular/core';

@Component({
    selector: 'todo-input',
    template: '<div>TodoInput here<div>'
})

export class TodoInput { 

    constructor() {
        console.log("TodoInput constructor")
    }

}