import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Task } from '../../models/generated';

@Injectable()
export class TaskService {
    constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    private baseUrl: string;

    // It'd be sweet if we could auto generate this from the available actions
    getTasks(): Promise<Task[]> {
        return this.http.get(this.baseUrl + 'api/Task/Tasks')
            .toPromise()
            .then(response => response.json() as Task[])
            .catch(this.handleError);
    }

    getTask(id: number): Promise<Task> {
        return this.http.get(this.baseUrl + 'api/Task/Task/' + id)
            .toPromise()
            .then(response => response.json() as Task)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}