import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpRequest, HttpHandler, HttpResponse, HttpHeaders } from "@angular/common/http";
import { config } from './config';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraineeService {
  data = {
    username: 'alok2@enzigma.com',
    password: 'test@1239ztBcKFlQlHkMfHNLtz4fNw3',
    grant_type: 'password',
    client_id: '3MVG9n_HvETGhr3BO1H9Ni1aKEHTCDIIRtLjdbhlcFha2PAK.owCr3D0ChczN5iqwJekWv3tQ_pDqLjE8jjGv',
    client_secret: '0D9F82A12D821E1A2C6168462CAA5A15D3C56BDBE53644D0B632A9B977FB3C1C',
  };
  d1: any;
  constructor(private httpClient: HttpClient, private route: Router) {
    const header=new HttpHeaders();

    this.httpClient.get<config>('https://login.salesforce.com/services/oauth2/token', {headers:this.data}).subscribe(data1 => {
      this.d1 = data1;
  })


    // const res1 = this.validUser();
    // console.log('res1',res1);
    // console.log('d1',this.d1)

    // const headers = new HttpHeaders({ Authorization: 'Basic' + btoa(u.username + ':'+ u.password) });


    // return this.http.get<any>(this.baseurl+"/validate?username="+u.username+"&"+"password="+u.password,{ headers }).pipe(
    //     map(
    //       userData => {
    //         sessionStorage.setItem('access_token', u.username);
    //         let authString = 'Bearer ' + btoa(u.username + ':' + u.password);
    //         sessionStorage.setItem('basicauth', authString);
    //         console.log("userdata"+userData);
    //         return userData;
    //       }
    //     )

    //   );

    // return this.http.get<any>(this.baseurl+"/validate?username="+u.username+"&"+"password="+u.password,{ headers }).pipe(
    //   map(
    //     userData => {
    //       sessionStorage.setItem('username', u.username);
    //       let authString = 'Basic ' + btoa(u.username + ':' + u.password);
    //       sessionStorage.setItem('basicauth', authString);
    //       console.log("userdata"+userData);
    //       return userData;
    //     }
    //   )

    // );

  }

  // validUser() {
  //   return this.httpClient.post<config>('https://login.salesforce.com/services/oauth2/token', this.data).pipe(map(
  //     res => {
  //       this.d1=res;
  //       sessionStorage.setItem('access_token',this.d1)
  //       console.log('res', res);
  //       return res;
  //     }
  //   ));
  // }


}
