import { Component } from '@angular/core';

@Component({
    selector: 'todo-input',
    template: `<div>TodoInput here<div>
                <input type="text" #myInput>
                <button (click) = "onClick(myInput.value)"><button>
            `
})

export class TodoInput { 

    constructor() {
        console.log("TodoInput constructor")
    }

    onClick(str: string) {
        alert(str)
    }


}