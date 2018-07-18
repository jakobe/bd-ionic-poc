import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'accounts',
  templateUrl: './accounts.page.html',
  styleUrls: ['./accounts.page.scss'],
})
export class AccountsPage implements OnInit {

  

  private accounts = [
    {
      title: 'Lønkonto',
      balance: 6281.37,
      currency: 'DKK',
      account: '7915-0000030705'
    },
    {
      title: 'Opsparingskonto',
      balance: 21267.72,
      currency: 'DKK',
      account: '7915-0000100478'
    },
    {
      title: 'MasterCard Private',
      balance: 0.00,
      currency: 'DKK',
      account: '7915-0000180574'
    },
    {
      title: 'Madkonto',
      balance: 1227.45,
      currency: 'DKK',
      account: '7915-0000291007'
    },
    {
      title: 'Sommerferie',
      balance: 14953.00,
      currency: 'DKK',
      account: '7915-0000170112'
    }
  ];
  
  public items: Array<{ title: string; balance: number; currency: string; account: string }> = [];
  
  constructor(public platform: Platform, private router:Router) {}

  ngOnInit() {
    this.items = [...this.accounts];   
  }

  navigate() {
    this.router.navigateByUrl('/transactions');
  }

}
