import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

    constructor (private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

    // Runs on initialization
    ngOnInit(): void {
        console.log("Here! Task View");

        this.typeMetadata = ModelMetadata.getMetadataForType("Task");

        // Is this the best way to get parameters from URL?
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id']; 

            this.taskService.getTask(this.id).then(task => this.task = task);
        })
    }

    ngOnDestory(): void {
        this.sub.unsubscribe();
    }

    edit(): void {
        this.router.navigateByUrl('task/' + this.id + '/edit')
    }
}