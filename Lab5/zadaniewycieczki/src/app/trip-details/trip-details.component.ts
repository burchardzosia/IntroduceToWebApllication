import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trip } from '../extendFiles/modelTrip';
import { TripServiceService } from 'src/app/extendFiles/trip-service.service';
import { TripCardService } from '../extendFiles/trip-card.service';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {
  public price: number = 0;
  public mark: string='$';
  public counter:number = 0;
  public rating: number=0;
  public number_rating: number=0;
  photos: number = 0
  
  public Trip:trip={ name: '',
    country: '',
    startDate: '',
    endDate: '',
    max: 0,
    price: 0,
    description: '',
    image: '',
    linkphoto :[],
    }
    constructor( private route: ActivatedRoute,private TripService: TripServiceService,private mem: TripCardService) { }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('id');
    this.mem.getNewTable().forEach((element)=>{
      if(name==element.name){
        this.Trip=element
      }
      this.mem.getMemory().forEach((element,index)=>{
        if(element.name == this.Trip.name){
          this.counter = element.number;
          this.rating = element.rating;
          this.number_rating=element.number_rating;
          this.price=this.Trip.price
        }
      })
      

   

    
    })
    this.price=this.Trip.price

   

  }
  RemoveFromCart(){
    if (this.counter>0){
      this.counter--;
      this.TripService.removeCart(this.Trip)
      this.TripService.sum = this.TripService.sum - this.Trip.price;
      this.TripService.liczba=this.TripService.liczba-1;
      
    }
    this.mem.getMemory().forEach((element,index)=>{
      if(element.name== this.Trip.name){
        this.mem.getMemory()[index].number = this.mem.getMemory()[index].number - 1;
      }
    })
   
      
  }
  addToCart(){
    
    if (this.counter<this.Trip.max){
      this.TripService.sum = this.TripService.sum + parseFloat(this.Trip.price.toString());
      this.TripService.liczba=this.TripService.liczba+1;
      this.counter++;
      let flag=true;
      this.TripService.pushCart(this.Trip)
      this.mem.getMemory().forEach((element,index)=>{
        if(element.name == this.Trip.name){
          element.number += 1;
          flag=false;
  
        }
      })
      if(flag){
        
        this.mem.getMemory().push({name:this.Trip.name, number: 1, rating: 0,number_rating:0,buy:0});

      }
      
      
    

    }

  }
  change(): void{
    if(this.mark === 'zł'){
      this.price = this.Trip.price / 4.51;
      this.mark = '€';
    
    }
    else{
      this.price = this.Trip.price * 4.51;
      this.mark = 'zł';
    }
    
  }
  
  nextPhoto(){

    if(this.photos == this.Trip.linkphoto.length-1){
      this.photos = 0;

    }
     
    else{
      this.photos+= 1
    }
    
  }
  previousPhoto(){
    if(this.photos>=1)
    this.photos -= 1
  else{
    this.photos = this.Trip.linkphoto.length-1
  }
  }
  

}


  
