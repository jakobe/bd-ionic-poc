import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Observable, of } from 'rxjs';

import { AccountService } from '../../account.service';

@Component({
  selector: 'app-page-transactions',
  templateUrl: 'transactions.page.html',
  styleUrls: ['transactions.page.scss'],
})
export class TransactionsPage implements OnInit {
   
  public transactions$: Observable<{ title: string; amount: number; currency: string; date: Date, type: string }[]> = null;
  constructor(public platform: Platform, private accountService: AccountService) {}
  
  ngOnInit() {
    setTimeout(() =>
      this.transactions$ = of(this.accountService.transactions),
      1250);  
  }

}
