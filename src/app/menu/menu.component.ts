import { Component, OnInit } from '@angular/core';

export interface Menu {
  path: string;
  viewValue: string;
  description: string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor() {}

  public menus: Menu[] = [
    {
      path: '',
      viewValue: 'Test',
      description: 'Lorem',
    },
    {
      path: '',
      viewValue: 'Test',
      description: 'Lorem',
    },
    {
      path: '',
      viewValue: 'Test',
      description: 'Lorem',
    },
    {
      path: '',
      viewValue: 'Test',
      description: 'Lorem',
    },
  ];

  ngOnInit(): void {}

  getMs(i) {
    return `${(i + 2) * 100}ms`;
  }
}
