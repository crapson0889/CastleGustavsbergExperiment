import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';

import { TaskComponent } from './components/task/task.component';
import { TaskTableComponent } from './components/task/task-table.component';
import { TaskViewComponent } from './components/task/task-view.component';
import { TaskEditComponent } from './components/task/task-edit.component';

import { Location } from '@angular/common';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'counter', component: CounterComponent },
    { path: 'fetch-data', component: FetchDataComponent },
    {
        path: 'task', component: TaskComponent,
        children: [
            { path: '', component: TaskTableComponent, pathMatch: 'full' },
            { path: ':id', component: TaskViewComponent },
            { path: ':id/edit', component: TaskEditComponent }
        ]
    },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { 
    constructor(private _location: Location) { }

    backClicked() {
        console.log("TEST");
        this._location.back();
    }
}