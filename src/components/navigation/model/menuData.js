import MenuItem from './MenuItem';

let subMenu1_1 = new MenuItem(4, 'ITEM', 'Sub-menu 1-1', []);
let subMenu1_2 = new MenuItem(5, 'ITEM', 'Sub-menu 1-2', []);
let subMenu1_3 = new MenuItem(5, 'ITEM', 'Sub-menu 1-3', []);

let menuItem1 = new MenuItem(1, 'CONTAINER', 'Menu 1', [subMenu1_1, subMenu1_2, subMenu1_3]);
let menuItem2 = new MenuItem(2, 'ITEM', 'Menu 2', []);
let menuItem3 = new MenuItem(3, 'ITEM', 'Menu 3', []);

let headerMenu = [menuItem1, menuItem2, menuItem3];

export default headerMenu;
