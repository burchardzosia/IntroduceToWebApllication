import { Component, OnInit,ViewChild ,Input, Output,EventEmitter} from '@angular/core';
import { trip } from '../extendFiles/modelTrip';
import { TripServiceService } from 'src/app/extendFiles/trip-service.service';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css'],

})
export class TripCardComponent implements OnInit {
  @Input() trip! : trip;
  @Input() mini! : number;
  @Input() maxi! : number;
  @Output() min = new EventEmitter();
  @Output() max = new EventEmitter();
  @Output() remove : EventEmitter<trip> = new EventEmitter();
  @Output() sub : EventEmitter<trip> = new EventEmitter();
  @Output() getback : EventEmitter<trip> = new EventEmitter();
  public price: number = 0;
  public mark: string='$';
  public counter:number = 0;
  public flag=false;
  public cart:Cartposition[] = [];
  
  constructor(private TripService: TripServiceService) {}
  ngOnInit(): void {
    this.cart = this.TripService.getCart();
    this.price=this.trip.price;
  
    
    

  }
  change(): void{
    if(this.mark === 'zł'){
      this.price = this.price / 4.51;
      this.mark = '€';
    
    }
    else{
      this.price = this.price * 4.51;
      this.mark = 'zł';
    }
    
  }
  RemoveFromCart(){
    if (this.counter>0){
      this.counter--;
      this.getback.emit(this.trip);
      this.TripService.removeCart(this.trip)
      this.TripService.sum = this.TripService.sum - this.trip.price;
      
    }
   
      
  }
  addToCart(){
    
    if (this.counter<this.trip.max){
      this.TripService.sum = this.TripService.sum + parseFloat(this.trip.price.toString());
      this.counter++;
      this.sub.emit(this.trip);
      this.TripService.pushCart(this.trip)
      
      
      
    

    }

  }
  getLow(): number{
    this.min.emit();
    return this.mini;
    
  }
  getHeigh(): number{
    this.max.emit();
    return this.maxi;
    
   

  }
 delatetrip(): void{
  this.TripService.sum = this.TripService.sum - this.counter * this.trip.price;
  this.TripService.removeCart2(this.trip)
  this.remove.emit(this.trip)
  this.getLow();
  this.getHeigh();
  
  


 }
 
 

}
export interface Cartposition {
  trip: trip;
  number: number;
}
