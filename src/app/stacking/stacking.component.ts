import { Component, OnInit } from '@angular/core';

export interface Menu {
  path: string;
  viewValue: string;
  description: string;
}
@Component({
  selector: 'app-stacking',
  templateUrl: './stacking.component.html',
  styleUrls: ['./stacking.component.scss'],
})
export class StackingComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}

  getMs(i) {
    return `${(i + 2) * 100}ms`;
  }
}
