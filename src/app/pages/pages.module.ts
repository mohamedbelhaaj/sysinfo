import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgZorroModule } from "src/app/ng-zorro/ng-zorro.module";
import { DurationPipe } from "src/app/pipes/durations";

import { PagesRoutingModule } from "./pages-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TimesheetComponent } from "./timesheet/timesheet.component";
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  declarations: [DashboardComponent, TimesheetComponent, DurationPipe, TasksComponent],
  imports: [CommonModule, PagesRoutingModule, NgZorroModule],
})
export class PagesModule {}
