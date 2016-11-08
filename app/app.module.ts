import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { TodoInput } from './todo-input.component';
import { TodoList } from './todo-list.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, TodoInput, TodoList ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }