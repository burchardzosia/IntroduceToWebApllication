import { Component, OnInit, Input} from '@angular/core';
import { trip } from '../extendFiles/modelTrip';
import { TripCardService } from '../extendFiles/trip-card.service';
import { OpinionService } from '../opinion.service';
@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.css']
})
export class OpinionComponent implements OnInit {
  @Input() trip! : trip;
  constructor(private mem: TripCardService, private opinionService: OpinionService) { }
  public opinionCounter=0;
  public opinionSum=0;
  flag=false;
  war=0;
  counter=0;
  opinionTable: opinion[] = []
  ngOnInit(): void {
    this.mem.getMemory().forEach((element,index)=>{
  
      if(element.name == this.trip.name){
        this.opinionCounter=this.mem.getMemory()[index].number_rating
        this.opinionSum=this.mem.getMemory()[index].rating
        this.war=Number((Number(this.opinionSum)/ Number(this.opinionCounter)).toFixed(5));
      
   
      }
     
    })
    this.opinionService.getopinion().forEach((element)=>{
      if(element.opinionname == this.trip.name){
        this.addopinion(element)
        
      
   
      }


    })
   
    
   
  }
  
  function1(){
    this.opinionCounter += 1;
    this.opinionSum += 1;
    this.war=Number((Number(this.opinionSum)/ Number(this.opinionCounter)).toFixed(5));
    this.memory(this.opinionSum,this.opinionCounter)
  
  }
  function2(){
    this.opinionCounter += 1;
    this.opinionSum += 2;
    this.war=Number((Number(this.opinionSum)/ Number(this.opinionCounter)).toFixed(5));
    this.memory(this.opinionSum,this.opinionCounter)
   
  }
  function3(){
    this.opinionCounter += 1;
    this.opinionSum += 3;
    this.war=Number((Number(this.opinionSum)/ Number(this.opinionCounter)).toFixed(5));
    this.memory(this.opinionSum,this.opinionCounter)
    
  }
  function4(){
    this.opinionCounter += 1;
    this.opinionSum += 4;
    this.war=Number((Number(this.opinionSum)/ Number(this.opinionCounter)).toFixed(5));
    this.memory(this.opinionSum,this.opinionCounter)
  }
  function5(){
    this.opinionCounter += 1;
    this.opinionSum += 5;
    this.war=Number((Number(this.opinionSum)/ Number(this.opinionCounter)).toFixed(5));
    this.memory(this.opinionSum,this.opinionCounter)
   
  }
  memory(opinion_mem :number, number_opinion:number){
    let flag=true
    this.mem.getMemory().forEach((element,index)=>{
      if(element.name == this.trip.name){
        this.mem.getMemory()[index].rating =opinion_mem;
        this.mem.getMemory()[index].number_rating = number_opinion;
        flag=false

      }
    })
    if(flag){
      
      this.mem.getMemory().push({name:this.trip.name, number: 0, rating: opinion_mem,number_rating: number_opinion, buy:0});

    }
    



  }
  addopinion(opinionObject: opinion): void{
    this.opinionTable.push(opinionObject);
  }
 
}

interface opinion {
  nick: string;
  date: string;
  opinia: string;
  opinionname:string;
}
