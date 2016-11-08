import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import { TodoInput } from './todo-input.component';
import { TodoList } from './todo-list.component';
import { TodoItemRender } from './todo-item-render.component';
import {SearchPipe} from './search.pipe'

import { FormsModule }   from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent, TodoInput, TodoList, TodoItemRender, SearchPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }