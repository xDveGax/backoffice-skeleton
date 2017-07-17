import { Injectable } from '@angular/core';
import { Menu } from './menu.model';
import { MENU_ITEMS } from './menu-mock';

@Injectable()
export class MenuService {

  constructor() { }

  getMenuItems(): Menu[] {
    return MENU_ITEMS.map((item) => {
      return new Menu(item);
    });
  }

}
