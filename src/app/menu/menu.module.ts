import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MdMenuModule, MdIconModule, MdButtonModule } from '@angular/material';
import { MenuService } from './service/menu.service';

@NgModule({
  imports: [
    CommonModule,
    MdMenuModule,
    MdIconModule,
    MdButtonModule
  ],
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent
  ],
  providers: [
    MenuService
  ]
})
export class MenuModule { }
