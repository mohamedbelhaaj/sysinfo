import { Component } from "@angular/core";
import { AuthService, User } from "src/app/services/auth.service";
import { tasks } from "src/assets/data";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent {
  data = tasks;
  user: User | null = null;

  constructor(private authService: AuthService) {
    this.authService.user$.subscribe((data) => {
      this.user = data;
    });
  }

  protected readonly tasks = tasks;
}
