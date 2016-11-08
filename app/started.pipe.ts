import {Pipe} from '@angular/core';
import { TodoModel } from './todo.model';

@Pipe({
    name: "started"
})
export class StartedPipe {
    transform(value, status) {
        return value.filter((i:TodoModel) => i.Status==status);
    }

}