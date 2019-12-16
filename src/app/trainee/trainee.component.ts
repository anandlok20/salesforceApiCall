import { Component, OnInit } from '@angular/core';
import { TraineeService } from '../services/trainee.service';

@Component({
  selector: 'app-trainee',
  templateUrl: './trainee.component.html',
  styleUrls: ['./trainee.component.css']
})
export class TraineeComponent implements OnInit {

  constructor(private tService:TraineeService) { }

  ngOnInit() {
  }

}
