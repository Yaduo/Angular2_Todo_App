import { Component } from '@angular/core';
import {TodoService} from './todo.service' ;

@Component({
  selector: 'my-app',
  template: `<h1>My First Angular App</h1>
            <div><status-selector (select)="status=$event"></status-selector></div>
            <div><todo-input></todo-input></div>
            <div><todo-list [status]="status"></todo-list></div>
            `,
  providers: [TodoService]
})
export class AppComponent {  
  
}