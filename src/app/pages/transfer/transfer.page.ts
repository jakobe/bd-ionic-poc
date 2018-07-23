import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-transfer',
  templateUrl: 'transfer.page.html',
  styleUrls: ['transfer.page.scss'],
})
export class TransferPage implements OnInit {
  private fromAccount;
  private toAccount;
  private minDate = (new Date()).toISOString();
  private transferDate = this.minDate;
  private save = false;

  constructor(public platform: Platform, private router: Router) {}

  ngOnInit() {
  }

}
