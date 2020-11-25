import { Component } from '@angular/core';

// Custom interfaces
import { MenuOptionInterface } from '../../interfaces/menu-option.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menu: MenuOptionInterface[] = [{
    name: "Item 1",
    link: "/item-1"
  }, {
    name: "Item 2",
    link: "/item-2"
  }, {
    name: "Item 3",
    link: "/item-3"
  }]
}
