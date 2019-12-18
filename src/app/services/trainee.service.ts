import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import {
  HttpClient,
  HttpRequest,
  HttpHandler,
  HttpResponse,
  HttpHeaders
} from "@angular/common/http";
import { traineeSchema } from "./traineeSchema";
import { contactSchema } from "./contactSchema";

@Injectable({
  providedIn: "root"
})
export class TraineeService {
  token:any;
  constructor(private httpClient: HttpClient, private route: Router) {
    const url = "https://login.salesforce.com/services/oauth2/token";
    const username = "alok2@enzigma.com";
    const grant_type = "password";
    const password = "test@1239ztBcKFlQlHkMfHNLtz4fNw3";
    const client_id =
      "3MVG9n_HvETGhr3BO1H9Ni1aKEHTCDIIRtLjdbhlcFha2PAK.owCr3D0ChczN5iqwJekWv3tQ_pDqLjE8jjGv";
    const client_secret =
      "0D9F82A12D821E1A2C6168462CAA5A15D3C56BDBE53644D0B632A9B977FB3C1C";
    const body={username,grant_type,password,client_id,client_secret};
    const headersNew = new HttpHeaders({
      // "username":username,
      // "grant_type":grant_type,
      // "password":password,
      // "client_id":client_id,
      // "client_secret":client_secret,
      "Content-Type": "application/json",
    });


    //request for access_token
      httpClient.post(url,body,
        { headers: headersNew }).subscribe(d1=>(console.log(d1)));
      // httpClient.get(url+"?username="+username+"&password="+password+"&grant_type="+grant_type+"&client_id="+client_id+"&client_secret="+client_secret,{ headers: headersNew }).subscribe(d1=>(console.log(d1)));;
  }


  auth_token =
    "Bearer 00D2w000000nT0a!AQQAQOC6L_4s7PUGKrj1uTmvb_hqT3qAmocJnTl12tNc6vGc8yglpOZyGk9G23gQT.uykWHyd6cFaZiQMP2q4EhcjkvCY.NZ";
  headers = new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: this.auth_token
  });

  getAllContacts() {
    // headers.set("Access-Control-Allow-Origin","*");
    return this.httpClient.get<any>(
      "https://alok2-dev-ed.my.salesforce.com/services/data/v39.0/sobjects/Contact",
      { headers: this.headers }
    );
  }

  createContact(cData: contactSchema) {
    return this.httpClient.post<contactSchema[]>(
      "https://alok2-dev-ed.my.salesforce.com/services/data/v39.0/sobjects/Contact",
      cData,
      { headers: this.headers }
    );
  }

  getAllTrainee() {
    return this.httpClient.get<any>(
      "https://alok2-dev-ed.my.salesforce.com/services/apexrest/tlist",
      { headers: this.headers }
    );
  }

  getTraineeById(Id: String) {
    return this.httpClient.get<any>(
      "https://alok2-dev-ed.my.salesforce.com/services/apexrest/trainee/" + Id,
      { headers: this.headers }
    );
  }

  createTrainee(tData: traineeSchema) {
    return this.httpClient.post<traineeSchema[]>(
      "https://alok2-dev-ed.my.salesforce.com/services/apexrest/trainee",
      tData,
      { headers: this.headers }
    );
  }
}
