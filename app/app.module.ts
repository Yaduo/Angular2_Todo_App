import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { TodoInput } from './todo-input.component'
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, TodoInput ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }