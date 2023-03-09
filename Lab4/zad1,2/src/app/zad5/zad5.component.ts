import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zad5',
  templateUrl: './zad5.component.html',
  styleUrls: ['./zad5.component.css']
})
export class Zad5Component implements OnInit {

  constructor() { }
  htmlToAdd: string;
  topicToAdd: string;
  jsonTable: any

  ngOnInit(): void {
    fetch('./assets/fakeInfo.json').then(data => data.json())
    .then(json => {
      this.jsonTable=json

      
    });
  }
  learnEvents(){
    this.htmlToAdd=this.jsonTable["events"];
    this.topicToAdd="Events"
  }
  learnTheBasics(){
    this.htmlToAdd=this.jsonTable["theBasics"];
    this.topicToAdd="The Basics"

  }
  learnComponents(){
    this.htmlToAdd=this.jsonTable["components"];
    this.topicToAdd="Components"

  }

}
