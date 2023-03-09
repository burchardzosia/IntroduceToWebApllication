import { Component, OnInit,Input,ViewChild } from '@angular/core';
import { trip } from '../extendFiles/modelTrip';
import { TripServiceService } from '../extendFiles/trip-service.service';
import { TripCardService } from '../extendFiles/trip-card.service';
import { DatePipe } from '@angular/common';
import {formatDate} from '@angular/common';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(public TripService: TripServiceService,private mem: TripCardService,private datePipe: DatePipe) {}
  public cart: Cartposition[] = [];
  sum!:number;
  myDate = new Date();
  ngOnInit(): void {
    this.sum = this.TripService.sum;
    this.cart=this.TripService.getCart();
  }
  buy(cartposition:Cartposition){
    let flag=true
    this.mem.getMemory().forEach((element,index)=>{
      if(element.name == cartposition.trip.name){
        element.number-=cartposition.number;
        element.buy += cartposition.number;
        flag=false;
        this.TripService.removeCart2(cartposition.trip)

      }
    })
    this.TripService.sum=this.TripService.sum-(cartposition.number*cartposition.trip.price)
    this.TripService.liczba=this.TripService.liczba-cartposition.number;
    formatDate(new Date(), 'yyyy/MM/dd', 'en');
    console.log(this.myDate)
    this.mem.addBuyTrip({trip:cartposition.trip, date:this.myDate,number:cartposition.number });
    


    
    
    

  }
}
export interface Cartposition {
  trip: trip;
  number: number;
}
export interface TripBuy {
  trip: trip;
  date: Date;
  number:number
}