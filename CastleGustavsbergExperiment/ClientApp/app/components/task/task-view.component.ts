import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModelMetadata, ModelTypeMetadata } from '../../models/model-metadata';

import { Task } from '../../models/generated';
import { TaskService } from './task.service';

@Component({
    selector: 'task-view',
    templateUrl: './task-view.component.html',
    providers: [TaskService]
})
export class TaskViewComponent {
    id: number;
    public task: Task;
    private sub: any;
    typeMetadata: ModelTypeMetadata;

    constructor (private taskService: TaskService, private route: ActivatedRoute) { }

    // Runs on initialization
    ngOnInit(): void {
        console.log("Here! Task View");

        this.typeMetadata = ModelMetadata.getMetadataForType("Task");

        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];

            this.taskService.getTask(this.id).then(task => this.task = task);
        })
    }

    ngOnDestory(): void {
        this.sub.unsubscribe();
    }
}