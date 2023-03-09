import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-zad1',
  templateUrl: './zad1.component.html',
  styleUrls: ['./zad1.component.css']
})
export class Zad1Component implements OnInit {
    
  
  constructor() { }
  ColorFlag = false
  CompaniesFlag = false
  ModelFlag = false
  showCar=false
  Company: string
  Model: string
  Color: string
  carArray: any
  colorTable: string[]
  result: string
  flag=false
  flag1=false
  color="red"
  ngOnInit(): void {
    fetch('./assets/zad5/samochody.json').then(data => data.json())
    .then(json => {
      this.carArray = json
      this.CompaniesFlag=true

    });
  }
  showModelsTable(){
    this.ModelFlag = true

  }

  showColorsTable(){
    this.ColorFlag = true
    this.colorTable = this.carArray[this.Company][this.Model][0]
  
  }

  showResult(){
    this.result="Twoje auto to:" +" " +this.Company+" "+this.Model+" "+this.Color+" "+"wyposażenie:"+this.carArray[this.Company][this.Model][1]

  }
 

}
  



  


 

