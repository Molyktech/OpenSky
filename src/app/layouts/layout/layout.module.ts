import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from '../Dash/dashboard/dashboard.component';
import { SharedModule } from '../shared/components/shared.module';

@NgModule({
  declarations: [LayoutComponent, DashboardComponent],
  imports: [CommonModule, RouterModule, SharedModule]
})
export class LayoutModule {}
