import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public appPages = [
    {
      title: 'Velkommen',
      url: '/'
    },
    {
      title: 'Kontooverblik',
      url: '/accounts'
    },
    {
      title: 'Depoter og puljer',
      url: ''
    },
    {
      title: 'NetBoks',
      url: ''
    },
    {
      title: 'Overførsel',
      url: ''
    },
    {
      title: 'Kortoversigt',
      url: ''
    },
    {
      title: 'Sydbank Favorit',
      url: ''
    },
    {
      title: 'Faste betalinger',
      url: ''
    },
    {
      title: 'Indbetalingskort',
      url: ''
    },
    {
      title: 'Investering',
      url: ''
    },
    {
      title: 'Forbrugsoverblik',
      url: ''
    },
    {
      title: 'Kontakt os',
      url: ''
    }
  ];

  constructor(private router: Router) {}


  navigate(url: string) {
    this.router.navigateByUrl(url);
  }
}
