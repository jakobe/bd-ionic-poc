import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'pools',
  templateUrl: './pools.page.html',
  styleUrls: ['./pools.page.scss'],
})
export class PoolsPage implements OnInit {

  private transactions = [];  
  private counter = 0;
  private PAGE_SIZE = 40;

  constructor(public platform: Platform, private router: Router) {}

  ngOnInit() {
    this.transactions = this.generateTransactions(this.PAGE_SIZE);
  }

  generateTransactions(num) {
    let newTransactions = [];
    for (let i = 0; i < num; i++) {
      let transaction = { 
        text: "Page: " + this.counter, 
        amount: "Transaction: " + i + " (total: " + (this.counter * num + i) + ")", date: "10.07.2018" 
      };     
      newTransactions.push(transaction);
    }
    return newTransactions;
  }

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }

  doInfinite(event) {
    this.counter++;
    setTimeout(() => {
      let newTransactions = this.generateTransactions(this.PAGE_SIZE);
      this.transactions = this.transactions.concat(newTransactions);
      console.log('Async operation has ended');
      event.target.complete();
    }, 200);
  }

}
