import { Component, OnInit } from '@angular/core';

export interface Menu {
  path: string;
  viewValue: string;
  description: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
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
