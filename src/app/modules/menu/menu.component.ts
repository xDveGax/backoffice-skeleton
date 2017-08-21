import { Component, OnInit } from '@angular/core';
import { Menu } from './model/menu.model';
import { MenuService } from './service/menu.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItems: Menu[];

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit() {
    this.menuItems = this.menuService.getMenuItems();
  }
}
