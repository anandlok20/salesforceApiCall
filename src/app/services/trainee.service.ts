import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpRequest, HttpHandler } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TraineeService {
  name:string;
  constructor(private httpClient: HttpClient,private route: Router) { 

    this.httpClient.get('https://login.salesforce.com/services/oauth2/token', {
        username: 'alok2@enzigma.com',
        password: 'test@1239ztBcKFlQlHkMfHNLtz4fNw3',
        grant_type: 'password',
        client_id: '3MVG9n_HvETGhr3BO1H9Ni1aKEHTCDIIRtLjdbhlcFha2PAK.owCr3D0ChczN5iqwJekWv3tQ_pDqLjE8jjGv',
        client_secret: '0D9F82A12D821E1A2C6168462CAA5A15D3C56BDBE53644D0B632A9B977FB3C1C',
      })
    .toPromise()
    .then(response => {
      console.log(response);
    })
    .catch(console.log);

  }

  
}
