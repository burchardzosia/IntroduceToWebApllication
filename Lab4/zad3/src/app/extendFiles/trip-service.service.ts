import { Injectable, Output ,EventEmitter} from '@angular/core';
import {trip } from "../extendFiles/modelTrip"
@Injectable({
  providedIn: 'root'
})
export class TripServiceService {
  cart: Cartposition[] = [];
  sum: number = 0;
  public flag=true;
  public flag2=true;
  constructor() {
    
  }

  getCart(): Cartposition[]{
    return this.cart;
  }
  pushCart(Object: trip){
  
    this.flag=true;
    for (var i = 0; i < this.cart.length; i++) {
      if (this.cart[i]["trip"] == Object) {
        this.cart[i]["number"]+=1;
        this.flag=false;
      }
    }
    if(this.flag==true){
      let x:Cartposition = {trip: Object, number: 1} 
        this.cart.push(x)
   

    }
   
    
  }
  removeCart(Object: trip){
    this.flag2=true;
    for (var i = 0; i < this.cart.length; i++) {
      if (this.cart[i]["trip"] == Object) {
        if(this.cart[i]["number"] !=1){
          this.cart[i]["number"]-=1;
          this.flag2=false;

        }
        
        
      }
    }
    if(this.flag2==true){
      for (var i = 0; i < this.cart.length; i++) {
        if (this.cart[i]["trip"] == Object) {
          this.cart.splice(i, 1)
          
        }
      }

    }
  }
  removeCart2(Object: trip){
    for (var i = 0; i < this.cart.length; i++) {
      if (this.cart[i]["trip"] == Object) {
        this.cart.splice(i, 1)
        
      }
  }
}       
       
      
    
  
 
 
  
 
 
  
    
   
    
    
    
  

 
}



export interface Cartposition {
  trip: trip;
  number: number;
}