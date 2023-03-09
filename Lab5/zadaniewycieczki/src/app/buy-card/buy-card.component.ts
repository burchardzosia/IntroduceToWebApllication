import { Component, OnInit } from '@angular/core';
import { trip } from '../extendFiles/modelTrip';
import { TripServiceService } from '../extendFiles/trip-service.service';
import { TripCardService } from '../extendFiles/trip-card.service';
import { DatePipe } from '@angular/common';
import {formatDate} from '@angular/common';
@Component({
  selector: 'app-buy-card',
  templateUrl: './buy-card.component.html',
  styleUrls: ['./buy-card.component.css']
})
export class BuyCardComponent implements OnInit {

  constructor(private mem: TripCardService,private datePipe: DatePipe) { }
  public table:TripBuy[] = [];
  flag=true;
  ngOnInit(): void {
    this.mem.getBuyTrip().forEach((element)=>{
       this.table.push(element)

      })

    
  }
  every(){
    this.table=[]
    this.mem.getBuyTrip().forEach((element)=>{
      this.table.push(element)

     })

  }
  archiwum(){
    this.table=[]
    this.mem.getBuyTrip().forEach((element)=>{
      let day=Number(element.trip.startDate[0])*10+Number(element.trip.startDate[1])
      let month=Number(element.trip.startDate[3])*10+Number(element.trip.startDate[4])
      let year=Number(element.trip.startDate[6])*1000+Number(element.trip.startDate[7])*100+Number(element.trip.startDate[8])*10+Number(element.trip.startDate[9])
      let dataa=element.date.toLocaleDateString()
      let day2=Number(dataa[0])*10+Number(dataa[1])
      let month2=Number(dataa[3])*10+Number(dataa[4])
      let year2=Number(dataa[6])*1000+Number(dataa[7])*100+Number(dataa[8])*10+Number(dataa[9])
      let day3=Number(element.trip.endDate[0])*10+Number(element.trip.endDate[1])
      let month3=Number(element.trip.endDate[3])*10+Number(element.trip.endDate[4])
      let year3=Number(element.trip.endDate[6])*1000+Number(element.trip.endDate[7])*100+Number(element.trip.endDate[8])*10+Number(element.trip.endDate[9])
      let tripdateStart=year*10000+month*100+day;
      let actualdate=year2*10000+month2*100+day2;
      let tripdateEnd=year3*10000+month3*100+day3;
      if (actualdate>tripdateStart && actualdate>tripdateEnd ){
        this.table.push(element)
      
      }
        

  })
        




  }
 
  actual(){
    this.table=[]
    this.mem.getBuyTrip().forEach((element)=>{
      let day=Number(element.trip.startDate[0])*10+Number(element.trip.startDate[1])
      let month=Number(element.trip.startDate[3])*10+Number(element.trip.startDate[4])
      let year=Number(element.trip.startDate[6])*1000+Number(element.trip.startDate[7])*100+Number(element.trip.startDate[8])*10+Number(element.trip.startDate[9])
      let dataa=element.date.toLocaleDateString()
      let day2=Number(dataa[0])*10+Number(dataa[1])
      let month2=Number(dataa[3])*10+Number(dataa[4])
      let year2=Number(dataa[6])*1000+Number(dataa[7])*100+Number(dataa[8])*10+Number(dataa[9])
      let day3=Number(element.trip.endDate[0])*10+Number(element.trip.endDate[1])
      let month3=Number(element.trip.endDate[3])*10+Number(element.trip.endDate[4])
      let year3=Number(element.trip.endDate[6])*1000+Number(element.trip.endDate[7])*100+Number(element.trip.endDate[8])*10+Number(element.trip.endDate[9])
      let tripdateStart=year*10000+month*100+day;
      let actualdate=year2*10000+month2*100+day2;
      let tripdateEnd=year3*10000+month3*100+day3;
      if (actualdate>tripdateStart && actualdate<tripdateEnd ){
        this.table.push(element)
      
      }
      this.flag=true;
        

  })


  }
  future(){
    this.table=[]
    this.mem.getBuyTrip().forEach((element)=>{
      let day=Number(element.trip.startDate[0])*10+Number(element.trip.startDate[1])
      let month=Number(element.trip.startDate[3])*10+Number(element.trip.startDate[4])
      let year=Number(element.trip.startDate[6])*1000+Number(element.trip.startDate[7])*100+Number(element.trip.startDate[8])*10+Number(element.trip.startDate[9])
      let dataa=element.date.toLocaleDateString()
      let day2=Number(dataa[0])*10+Number(dataa[1])
      let month2=Number(dataa[3])*10+Number(dataa[4])
      let year2=Number(dataa[6])*1000+Number(dataa[7])*100+Number(dataa[8])*10+Number(dataa[9])
      let day3=Number(element.trip.endDate[0])*10+Number(element.trip.endDate[1])
      let month3=Number(element.trip.endDate[3])*10+Number(element.trip.endDate[4])
      let year3=Number(element.trip.endDate[6])*1000+Number(element.trip.endDate[7])*100+Number(element.trip.endDate[8])*10+Number(element.trip.endDate[9])
      let tripdateStart=year*10000+month*100+day;
      let actualdate=year2*10000+month2*100+day2;
      let tripdateEnd=year3*10000+month3*100+day3;
      if (actualdate<tripdateStart  && actualdate<tripdateEnd){
        this.table.push(element)
      
      }
        

  })


  }
      
  

}

export interface TripBuy {
  trip: trip;
  date: Date;
  number:number
}
