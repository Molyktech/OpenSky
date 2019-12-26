import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { LayoutComponent } from "./layouts/layout/layout.component";
import { DashboardComponent } from "./layouts/Dash/dashboard/dashboard.component";
import { AuthGuard } from "./utils/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
    data: { title: "Login Component" }
  },
  {
    path: "layout",
    component: LayoutComponent,
    canActivate: [AuthGuard],
    data: { title: "Layout Component" },
    children: [
      {
        path: "",
        component: DashboardComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
