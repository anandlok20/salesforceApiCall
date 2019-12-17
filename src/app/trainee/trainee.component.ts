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
  resData: any;
  tData: traineeSchema = { Name: "", MobilePhone: "", Email: "" };
  cData: contactSchema = { FirstName: "", LastName: "" };
  constructor(private tService: TraineeService) {}

  ngOnInit() {
    this.tService.getAllContacts().subscribe(r => {
      this.resData = r;
      console.log("data", this.resData);
    });
  }

  submitData() {
    console.log("tData", this.cData);
    if (this.cData.LastName==="") {
      alert("Last Name is Required !!");
    } else {
      this.tService.createContact(this.cData).subscribe();
    }
  }
}
