import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TouchID } from '@ionic-native/touch-id/ngx';

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

  constructor(private router: Router, private touchId: TouchID) {}

  ngOnInit() {
    this.touchId.isAvailable()
      .then(
        res => console.log('TouchID is available'),
        err =>  console.error('TouchID is NOT available', err)
      )
      this.touchId.verifyFingerprintWithCustomPasswordFallbackAndEnterPasswordLabel(
        'Log venligst ind med dit fingeraftryk', 'Log ind med NemID i stedet')
        .then(
          res => console.log('Ok', res),
          err => console.error('Error', err)
        );
  }

  

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }
}
