import { Component } from "@angular/core";
import { tasks2 } from "src/assets/data";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
})
export class TasksComponent {
  data = tasks2;
}
