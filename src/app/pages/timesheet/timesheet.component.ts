import { Component } from "@angular/core";
import { tasks } from "src/assets/data";

@Component({
  selector: "app-timesheet",
  templateUrl: "./timesheet.component.html",
})
export class TimesheetComponent {
  data = tasks;
}
