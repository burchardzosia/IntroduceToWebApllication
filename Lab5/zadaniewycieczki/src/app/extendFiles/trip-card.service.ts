import { Injectable } from '@angular/core';
import {trip } from "../extendFiles/modelTrip"
import { DatePipe } from '@angular/common'
@Injectable({
  providedIn: 'root'
})
export class TripCardService {
  
  memory:Memory[] = [];
  table: trip[]=[]
  tableNew: trip[]=[]
  BuyTrip: TripBuy[]=[]
  timetable: number[]=[]
  flag=true;
  flag2=false
  constructor(public datepipe: DatePipe) { }
  getMemory(){
    return this.memory;
  }
  getTable(){
    return this.table
  }
  addTable(tripObject:trip){
    this.table.push(tripObject);

  }
  addingNewCart(tripObject:trip){
    this.tableNew.push(tripObject);


  }
  getNewTable(){
    return this.tableNew;
  }
  addBuyTrip(TripBuy:TripBuy){
    this.BuyTrip.push(TripBuy);
    this.BuyTrip.forEach((element)=>{
      let dataa=element.date.toLocaleDateString()
      let day2=Number(dataa[0])*10+Number(dataa[1])
      let month2=Number(dataa[3])*10+Number(dataa[4])
      let year2=Number(dataa[6])*1000+Number(dataa[7])*100+Number(dataa[8])*10+Number(dataa[9])
      let day=Number(dataa[0])*10+Number(dataa[1])+3
      let month=Number(dataa[3])*10+Number(dataa[4])
      let year=Number(dataa[6])*1000+Number(dataa[7])*100+Number(dataa[8])*10+Number(dataa[9])
      let day4=Number(element.trip.startDate[0])*10+Number(element.trip.startDate[1])+1
      let month4=Number(element.trip.startDate[3])*10+Number(element.trip.startDate[4])
      let year4=Number(element.trip.startDate[6])*1000+Number(element.trip.startDate[7])*100+Number(element.trip.startDate[8])*10+Number(element.trip.startDate[9])
      let tripstart3days=year*10000+month*100+day;
      let actualdate=year2*10000+month2*100+day2;
      let tripdatestart=year4*10000+month4*100+day4;
      console.log(actualdate)
      console.log(tripstart3days)
      console.log(tripdatestart)
      if (actualdate<tripdatestart && tripstart3days>tripdatestart ){
        this.flag2=true
        
      
      }
     
      

     })
     



    



  }
 
  getBuyTrip(){
    return this.BuyTrip;
  }


 
}

export interface Memory {
  name: string;
  number: number;
  rating: number;
  number_rating: number;
  buy:number;
}

export interface TripBuy {
  trip: trip;
  date: Date;
  number:number
}
