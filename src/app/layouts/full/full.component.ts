import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService, User } from "src/app/services/auth.service";

@Component({
  selector: "app-full",
  templateUrl: "./full.component.html",
})
export class FullComponent {
  isCollapsed = false;

  user: User | null = null;

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) {
    this.authService.user$.subscribe((data) => {
      this.user = data;
    });
  }

  async logout() {
    this.authService.logout();
    await this.router.navigate(["login"]);
  }
}
