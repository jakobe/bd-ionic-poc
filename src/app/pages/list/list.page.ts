import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-page-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private accounts = [
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
      title: 'Lønkonto',
      balance: 6281.37,
      currency: 'DKK',
      account: '7915-0000030705'
    }
  ];
  public items: Array<{ title: string; balance: number; currency: string; account: string }> = [];
  constructor(public platform: Platform) {
    this.items = [...this.accounts];
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
