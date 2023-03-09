import { Component, OnInit,ViewChild ,Input, Output,EventEmitter} from '@angular/core';
import { trip } from '../extendFiles/modelTrip';
import { TripServiceService } from 'src/app/extendFiles/trip-service.service';
import { TripCardService } from '../extendFiles/trip-card.service';
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
  public maxBuy=0;
  information=false;
  constructor(private TripService: TripServiceService,private mem: TripCardService) {}
  ngOnInit(): void {
    let flag2=true;
    this.maxBuy=this.trip.max;
    this.mem.getNewTable().forEach((element2)=>{
      if(element2.name==this.trip.name){
        flag2=false;
      }

    
    })
    if(flag2){
      this.mem.addingNewCart(this.trip)
    }
    this.cart = this.TripService.getCart();
    this.price=this.trip.price;
    this.mem.getMemory().forEach((element,index)=>{
      if(element.name == this.trip.name){
        this.counter = element.number;
        this.maxBuy=this.trip.max-element.buy;
      }
    })
    this.information=true;

  
    
    

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
      this.TripService.liczba=this.TripService.liczba-1;
      
    }
    this.mem.getMemory().forEach((element,index)=>{
      if(element.name== this.trip.name){
        this.mem.getMemory()[index].number = this.mem.getMemory()[index].number - 1;
      }
    })
   
      
  }
  addToCart(){
    
    if (this.counter<this.maxBuy){
      this.TripService.sum = this.TripService.sum + parseFloat(this.trip.price.toString());
      this.TripService.liczba=this.TripService.liczba+1;
      this.counter++;
      let flag=true;
      this.sub.emit(this.trip);
      this.TripService.pushCart(this.trip)
      this.mem.getMemory().forEach((element,index)=>{
        if(element.name == this.trip.name){
          element.number += 1;
          flag=false;
  
        }
      })
      if(flag){
        
        this.mem.getMemory().push({name:this.trip.name, number: 1, rating: 0,number_rating:0,buy:0});

      }
      
      
    

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
  this.TripService.liczba=this.TripService.liczba-this.counter
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