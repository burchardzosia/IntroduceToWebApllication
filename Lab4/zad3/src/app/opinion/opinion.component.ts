import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.css']
})
export class OpinionComponent implements OnInit {

  constructor() { }
  public opinionCounter=0;
  public opinion=0;
  public war:number=0;
  ngOnInit(): void {
   
    
   
  }
  
  function1(){
    this.opinionCounter += 1;
    this.opinion += 1;
    this.war=Number((Number(this.opinion)/ Number(this.opinionCounter)).toFixed(5));
  }
  function2(){
    this.opinionCounter += 1;
    this.opinion += 2;
    this.war=Number((Number(this.opinion)/ Number(this.opinionCounter)).toFixed(5));
   
  }
  function3(){
    this.opinionCounter += 1;
    this.opinion += 3;
    this.war=Number((Number(this.opinion)/ Number(this.opinionCounter)).toFixed(5));
    
  }
  function4(){
    this.opinionCounter += 1;
    this.opinion += 4;
    this.war=Number((Number(this.opinion)/ Number(this.opinionCounter)).toFixed(5));
   
  }
  function5(){
    this.opinionCounter += 1;
    this.opinion += 5;
    this.war=Number((Number(this.opinion)/ Number(this.opinionCounter)).toFixed(5));
   
  }

}
