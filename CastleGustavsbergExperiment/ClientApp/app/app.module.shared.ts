import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';

import { AppRoutingModule } from './app-routing.module';

// Helper imports
import { TableComponent } from './components/table/table.component';
import { ViewComponent } from './components/view/view.component';

// Task imports
import { TaskComponent } from './components/task/task.component';
import { TaskTableComponent } from './components/task/task-table.component';
import { TaskViewComponent } from './components/task/task-view.component';
import { TaskService } from './components/task/task.service';

import { BackButtonDirective } from './directives/back-button.directive'

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        TableComponent,
        ViewComponent,
        TaskComponent,
        TaskTableComponent,
        TaskViewComponent,
        BackButtonDirective
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        AppRoutingModule
    ]
})
export class AppModuleShared {
}
