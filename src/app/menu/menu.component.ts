import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.model';
import { MenuService } from './menu.service';

@Component({
  selector: 'kbd-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
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
