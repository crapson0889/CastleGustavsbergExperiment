import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Task } from '../../models/generated';
import { TaskService } from './task.service';

@Component({
    selector: 'task-table',
    templateUrl: './task-table.component.html',
    providers: [TaskService]
})
export class TaskTableComponent {
    public tasks: Task[];

    constructor(private taskService: TaskService, private router: Router) { }

    public getTasks(): void {
        this.taskService.getTasks().then(tasks => this.tasks = tasks);
    }

    // Runs on initialization
    ngOnInit(): void {
        this.getTasks();
    }

    // Method that gets called on row-click 
    private openDetail(task: Task) {
        // Navigate to the detail page for the task
        this.router. navigateByUrl('task/' + task.id)
    }
}