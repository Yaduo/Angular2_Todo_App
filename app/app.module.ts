import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import { TodoInput } from './todo-input.component';
import { TodoList } from './todo-list.component';
import { TodoItemRender } from './todo-item-render.component';
import {SearchPipe} from './search.pipe';
import {StartedPipe} from './started.pipe';
import {StatusSelector} from './status-selector.component'

import { FormsModule }   from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent, TodoInput, TodoList, TodoItemRender, SearchPipe,StartedPipe,StatusSelector],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }