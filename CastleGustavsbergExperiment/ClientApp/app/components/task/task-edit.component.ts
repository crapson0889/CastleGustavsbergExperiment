import { Component, Input } from '@angular/core';

import { Task } from '../../models/generated';

@Component({
    selector: 'task-edit',
    templateUrl: './task-edit.component.html'
})
export class TaskEditComponent {
    submitted = false;

    @Input() task: Task;

    onSubmit() { this.submitted = true; }
}