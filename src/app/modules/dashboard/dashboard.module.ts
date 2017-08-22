import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { MenuModule } from './menu/menu.module';

export const ROUTES: Routes = [
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
    DynamicFormModule,
    MenuModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule {}
