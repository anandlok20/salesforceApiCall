import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import {
  HttpClient,
  HttpRequest,
  HttpHandler,
  HttpResponse,
  HttpHeaders
} from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { traineeSchema } from './traineeSchema';
import { contactSchema } from './contactSchema';

@Injectable({
  providedIn: "root"
})
export class TraineeService {

  constructor(private httpClient: HttpClient, private route: Router) {
  

    // const res1 = this.validUser();
    // console.log('res1',res1);
    // console.log('d1',this.d1)

  }
  auth_token =
  "Bearer 00D2w000000nT0a!AQQAQCzhknn3babjvOsa_eKHjmdylo.pCKiK75Z87hTmTN2MKNbfz59xfMLlz4HqGMuS_zy8zahuY6GVAe0uaGjM_hQqqetA";
  headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Authorization": this.auth_token
  });

  getAllContacts() {
    // headers.set("Access-Control-Allow-Origin","*");
    return this.httpClient
      .get<any>(
        "https://alok2-dev-ed.my.salesforce.com/services/data/v39.0/sobjects/Contact",
        { headers: this.headers }
      )
  }

  createContact(cData : contactSchema){
    return this.httpClient
      .post<contactSchema[]>(
        "https://alok2-dev-ed.my.salesforce.com/services/data/v39.0/sobjects/Contact",cData,
        { headers: this.headers }
      )
  }

  getAllTrainee() {
    return this.httpClient
      .get<any>(
        "https://alok2-dev-ed.my.salesforce.com/services/apexrest/tlist",
        { headers: this.headers }
      )
  }

  getTraineeById(Id:String) {
    return this.httpClient
      .get<any>(
        "https://alok2-dev-ed.my.salesforce.com/services/apexrest/trainee/"+Id,
        { headers: this.headers }
      )
  }

  createTrainee(tData : traineeSchema){
    return this.httpClient
      .post<traineeSchema[]>(
        "https://alok2-dev-ed.my.salesforce.com/services/apexrest/trainee",tData,
        { headers: this.headers }
      )
  }
}
