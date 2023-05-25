import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "src/app/pages/dashboard/dashboard.component";
import { TasksComponent } from "src/app/pages/tasks/tasks.component";
import { TimesheetComponent } from "src/app/pages/timesheet/timesheet.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
  },
  {
    path: "timesheet",
    component: TimesheetComponent,
  },
  {
    path: "tasks",
    component: TasksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
