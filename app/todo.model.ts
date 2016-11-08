
export class TodoModel {

    Title: string;
    Status: string;

    constructor(title: string){
        this.Title = title;
        this.Status = "started"
    }

    toggle() {
        this.Status = this.Status=="started" ? "completed" : "started";
    }
}