import { Component, OnInit } from '@angular/core';
import { TripServiceService } from '../extendFiles/trip-service.service';
import { TripCardService } from '../extendFiles/trip-card.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-naviagation',
  templateUrl: './naviagation.component.html',
  styleUrls: ['./naviagation.component.css']
})
export class NaviagationComponent implements OnInit {
  constructor(public serviceTrip:TripServiceService,public mem:TripCardService,private datePipe: DatePipe) {}
  sum!:number;
  flag=true;
  ngOnInit(): void {
    

  }

}
