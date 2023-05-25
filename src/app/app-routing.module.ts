import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "src/app/guards/auth.guard";
import { NotLoggedInGuard } from "src/app/guards/not-logged-in.guard";
import { BlankComponent } from "src/app/layouts/blank/blank.component";
import { FullComponent } from "src/app/layouts/full/full.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/",
    pathMatch: "full",
  },
  {
    path: "",
    component: FullComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        loadChildren: () => import("./pages/pages.module").then((m) => m.PagesModule),
      },
    ],
  },
  {
    path: "",
    component: BlankComponent,
    canActivate: [NotLoggedInGuard],
    children: [
      {
        path: "",
        loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
      },
    ],
  },
  {
    path: "**",
    redirectTo: "/",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
