
import { trip } from '../extendFiles/modelTrip';
import { Component, OnInit , Input,ViewChild,Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-trip-container',
  templateUrl: './trip-container.component.html',
  styleUrls: ['./trip-container.component.css']
 
})
export class TripContainerComponent implements OnInit {
  
  public counter:number=0;
  constructor() { }
  tripTable: trip[] =[]
  tripAddCart: trip[] =[]
  public licz:number = 0;
  public mini: number=-1;
  public maxi: number=-1;
  public temp: trip=this.tripTable[0];
  public flag=false;
  ngOnInit(): void {
    fetch('../assets/trip.json').then(data => data.json())
    .then(json => {
      
      for (let i in json["trips"]) {
        this.tripTable.push({
          linkphoto:json["trips"][i]["linkphoto"],
          name: json["trips"][i]["name"],
          country: json["trips"][i]["country"],
          startDate:json["trips"][i]["startDate"],
          endDate: json["trips"][i]["endDate"],
          price:json["trips"][i]["price"],
          max:json["trips"][i]["max"],
          description:json["trips"][i]["desciption"],
          image:json["trips"][i]["image"]
          
          
          
          
  
          
          

        } as trip)
      
      }
      this.mini=-1;
      this.low();
      this.maxi=-1;
      this.heigh();
      

      
      
    }
    
    );

  }

  low():number{
    this.mini=-1;
    for (let trip of this.tripTable){
      if(this.mini > Number(trip.price) || this.mini == -1)
        this.mini = Number(trip.price);
    }
    
    return this.mini;
   
    
  }
  heigh():number{
    this.maxi=-1;
    for (let trip of this.tripTable){
      if(this.maxi < Number(trip.price)){
        this.maxi = Number(trip.price);
      }

        
    }
    return this.maxi;
   
    
  }
  plus(tripObject:trip):void{
    this.licz++;
    

   
  
   
  }
  getback(tripObject:trip):void{
    this.licz--;
   
    
  }
  delatetrip(tripObject : trip):void{
    for (var i = 0; i < this.tripTable.length; i++) {
      if (this.tripTable[i] == tripObject) {
        this.tripTable.splice(i, 1)
        
      }
    }
    this.low();
    this.heigh();
   
  }
  submitEvent(trips: trip):void{
    this.tripTable.push(trips);
    this.low();
    this.heigh();
  }
  

 
}
