import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-transfer',
  templateUrl: './transfer.page.html',
  styleUrls: ['./transfer.page.scss'],
})
export class TransferPage implements OnInit {

  constructor(public platform: Platform, private router: Router) {}

  ngOnInit() {
  }

  navigate() {
    this.router.navigateByUrl('/transfer');
  }

}
