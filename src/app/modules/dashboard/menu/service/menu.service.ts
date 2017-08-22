import { Injectable } from '@angular/core';
import { MENU_ITEMS } from './menu-mock';
import { Menu } from '../model/menu.model';

@Injectable()
export class MenuService {

  constructor() { }

  getMenuItems(): Menu[] {
    return MENU_ITEMS.map((item) => {
      return new Menu(item);
    });
  }

}
