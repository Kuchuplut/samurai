import { Component, OnInit } from '@angular/core';
import { TransferService } from '../shared/services/transfer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public user: any = {};
  constructor(private transferService: TransferService) {}

  ngOnInit(): void {
    this.user.address = '';
    this.user.balance = null;

    this.getAccountAndBalance();
  }

  getAccountAndBalance = () => {
    const that = this;
    this.transferService
      .getUserBalance()
      .then(function (retAccount: any) {
        that.user.address = retAccount.account;
        that.user.balance = retAccount.balance;
        console.log('transfer.components :: getAccountAndBalance :: that.user');
        console.log(that.user);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  transferEther() {
    this.transferService.transferEther({
      transferAddress: '',
      account: '',
      amount: '',
    });
  }
}
