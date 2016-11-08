import {Component, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
    selector: 'status-selector',
    template: `<div>
      <select #sel (change)="select.emit(sel.value)">
        <option *ngFor="let status of statuses">{{status}}</option>
      </select>
    </div>`
})

export class StatusSelector implements OnInit{ 
    @Output() select = new EventEmitter();
    statuses = ["started","completed"];
    
    ngOnInit(){
        this.select.emit(this.statuses[0]);
    }
}