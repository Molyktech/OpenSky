import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout.component";
import { DashboardComponent } from "../Dash/dashboard/dashboard.component";
import { SharedModule } from "../shared/components/shared.module";
import { MaterialModule } from "src/app/material-module";
import { FlexLayoutModule } from "@angular/flex-layout";
//import { DialogModalComponent } from "../dialog-modal/dialog-modal.component";

@NgModule({
  declarations: [LayoutComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class LayoutModule {}
