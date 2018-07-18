import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public transactions: Array<{ title: string; amount: number; currency: string; date: Date, type: string }> = [];

  constructor() {
    
    const today = new Date();

    const transactionTypes = [
      {
        title: 'Afdrag lån Peugeot',
        amountMin: -3000,
        amountMax: -3000,
        currency: 'DKK',
        date: this.addDays(today, -1),
        type: 'cash'
      },
      {
        title: 'Afdrag lån Mondeo',
        amountMin: -6000,
        amountMax: -6000,
        currency: 'DKK',
        date: this.addDays(today, -1),
        type: 'cash'
      },
      {
        title: 'BS Skattestyrelsen DMR',
        amountMin: -1910,
        amountMax: -1910,
        currency: 'DKK',
        date: this.addDays(today, -3),
        type: 'car'
      },
      {
        title: 'BS HK, Handel og kontor',
        amountMin: -56,
        amountMax: -72,
        currency: 'DKK',
        date: this.addDays(today, -19),
        type: 'help-buoy'
      },
      {
        title: 'BS DR Licens',
        amountMin: -1263.50,
        amountMax: -1263.50,
        currency: 'DKK',
        date: this.addDays(today, -25),
        type: 'tv'
      },
      {
        title: 'Løn',
        amountMin: 24000,
        amountMax: 28000,
        currency: 'DKK',
        date: this.addDays(today, -25),
        type: 'cash'
      }
    ];

    for (let month = 0; month <= 11; month++) {
      let transactions = [...transactionTypes];
      while( transactions.length ) {
        let transactionCopy = {...this.popRandomElement(transactions)};
        transactionCopy.date = this.addDays(today, (-30 * month)),
        transactionCopy.amount = (Math.round(this.randomFromInterval(transactionCopy.amountMin, transactionCopy.amountMax) * 10) / 10);
        this.transactions.push(transactionCopy);
      }
    }

  }

  private addDays(date, days) {
    var newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
  }

  private popRandomElement(array) {
    const index = Math.floor(Math.random() * array.length);
    const element = array.splice(index, 1)[0];
    return element;
  }

  private randomIntFromInterval(min,max)
  {
      return Math.floor(this.randomFromInterval(min,max));
  }

  private randomFromInterval(min,max)
  {
      return Math.random() * (max - min) + min;
  }

}
