import {Pipe} from '@angular/core';
import { TodoModel } from './todo.model';

@Pipe({
    name: "started"
})
export class StartedPipe {
    transform(value) {
        return value.filter((i:TodoModel) => i.Status=="started")
    }

}