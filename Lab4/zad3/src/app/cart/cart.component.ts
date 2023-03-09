import { Component, OnInit,Input,ViewChild } from '@angular/core';
import { trip } from '../extendFiles/modelTrip';
import { TripServiceService } from '../extendFiles/trip-service.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(public TripService: TripServiceService) {}
  public cart: Cartposition[] = [];
  sum!:number;
  ngOnInit(): void {
    this.sum = this.TripService.sum;
    this.cart=this.TripService.getCart();
  }

}
export interface Cartposition {
  trip: trip;
  number: number;
}