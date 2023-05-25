import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule } from "@angular/router";
import { NgZorroModule } from "src/app/ng-zorro/ng-zorro.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./login/login.component";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
    NgZorroModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
