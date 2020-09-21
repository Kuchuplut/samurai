import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-trade-card',
  templateUrl: './trade-card.component.html',
  styleUrls: ['./trade-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TradeCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
