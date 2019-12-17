import { Component, OnInit } from "@angular/core";
import { TraineeService } from "../services/trainee.service";
import { traineeSchema } from "../services/traineeSchema";
import { contactSchema } from "../services/contactSchema";

@Component({
  selector: "app-trainee",
  templateUrl: "./trainee.component.html",
  styleUrls: ["./trainee.component.css"]
})
export class TraineeComponent implements OnInit {
  contactData: any;
  traineeData: any;
  tData: traineeSchema = { fname: "", lname: "", email: "" };
  cData: contactSchema = { FirstName: "", LastName: "" };
  showContact = false;
  showTrainee = false;
  showButton = true;
  viewContact = false;
  viewTrainee = false;
  selectedId: any;
  constructor(private tService: TraineeService) {}

  ngOnInit() {
    this.tService.getAllContacts().subscribe(r => {
      this.contactData = r;
      console.log("data", this.contactData);
    });
    this.tService.getAllTrainee().subscribe(r => {
      this.traineeData = r;
      console.log("data", this.traineeData);
    });
  }

  submitData() {
    console.log("tData", this.cData);
    if (this.cData.LastName === "") {
      document.getElementById("status").hidden = false;
      document.getElementById("status").innerText = "Last Name is Required !!";
    } else {
      this.tService.createContact(this.cData).subscribe(r => {
        alert("dataFromServer"+ r);
      });
      // this.showContact = false;
      // this.showButton = true;
      // this.showTrainee = false;
    }
  }

  submitDataForTrainee() {
    console.log("tData", this.tData);
    if (this.tData.lname === "") {
      document.getElementById("status").hidden = false;
      document.getElementById("status").innerText = "Last Name is Required !!";
    }
    if (this.tData.email === "") {
      document.getElementById("statusEmail").hidden = false;
      document.getElementById("statusEmail").innerText = "Email is Required !!";
    } else {
      this.tService.createTrainee(this.tData).subscribe();
      // this.showContact = false;
      // this.showButton = true;
      // this.showTrainee = false;
    }
  }

  findTraineeById() {
    this.tService.getTraineeById(this.selectedId).subscribe();
  }

  resetValue() {
    document.getElementById("status").hidden = true;
    document.getElementById("statusEmail").hidden = true;
  }

  viewContactForm() {
    this.showContact = true;
    this.showButton = false;
    this.showTrainee = false;
    this.viewContact = false;
    this.viewTrainee = false;
  }

  viewTraineeForm() {
    this.showContact = false;
    this.showTrainee = true;
    this.showButton = false;
    this.viewContact = false;
    this.viewTrainee = false;
  }

  viewContactList() {
    this.showContact = false;
    this.showTrainee = false;
    this.showButton = false;
    this.viewContact = true;
    this.viewTrainee = false;
  }

  viewTraineeList() {
    this.showContact = false;
    this.showTrainee = false;
    this.showButton = false;
    this.viewContact = false;
    this.viewTrainee = true;
  }
  
  backTo(){
    this.showContact = false;
    this.showTrainee = false;
    this.showButton = true;
    this.viewContact = false;
    this.viewTrainee = false;
  }
}
