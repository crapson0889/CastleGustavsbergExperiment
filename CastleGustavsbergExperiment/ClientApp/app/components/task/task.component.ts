import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
// import { } from '';

import { Task } from '../../models/generated';
import { TaskService } from './task.service';

@Component({
    selector: 'task',
    templateUrl: './task.component.html',
    providers: [TaskService]
})
export class TaskComponent {
    public tasks: Task[];

    constructor (private taskService: TaskService) {}

    public getTasks(): void { 
        this.taskService.getTasks().then(tasks => this.tasks = tasks);
    }

    // Runs on initialization
    ngOnInit(): void {
        this.getTasks();
    }

    private openDetail(event: Task){
        console.log(event);

        
    }
}