import {Pipe} from '@angular/core';
import { TodoModel } from './todo.model';

@Pipe({
    name: "search"
})
export class SearchPipe {
    transform(value) {

        //console.log(value);
        //return value

        return value.filter((i:TodoModel) => i.Title.startsWith('e'))
    }

}