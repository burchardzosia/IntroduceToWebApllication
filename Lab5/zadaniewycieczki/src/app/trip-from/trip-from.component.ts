import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder  } from '@angular/forms';
import { Validators } from '@angular/forms';
import { trip } from '../extendFiles/modelTrip';
import { TripCardService } from '../extendFiles/trip-card.service';
import { FirebaseService } from '../firebase.service';
@Component({
  selector: 'app-trip-from',
  templateUrl: './trip-from.component.html',
  styleUrls: ['./trip-from.component.css']
})
export class TripFromComponent implements OnInit {

  constructor(private mem: TripCardService, private firebase: FirebaseService) { }

  ngOnInit(): void {
  }
  ilosc:number = 0;
  TripForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    
    ]),
    country: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    startDate: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-3][0-9].[0-3][0-9].([0-9][0-9])[0-9][0-9]'),
     
      
    ]),
    endDate: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-3][0-9].[0-3][0-9].([0-9][0-9])[0-9][0-9]'),
    ]),
    max: new FormControl(this.ilosc, [
      Validators.required,
      Validators.min(1),
      Validators.pattern('[0-9]*'),
    ]),
    price: new FormControl(this.ilosc,[
      Validators.required,
      Validators.min(1),
      Validators.pattern('[0-9]*'),
  
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    image: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    linkphoto: new FormControl([], [
      Validators.required,
      Validators.minLength(2),
    ]),
  });

 
  flag=false;
  submit() :void{
    if (!this.TripForm.valid) {
      this.flag=true;
      return
    }
    this.flag=false;
    let AddTrip= {
      name: this.TripForm.get('name')!.value,
      country: this.TripForm.get('country')!.value,
      startDate: this.TripForm.get('startDate')!.value,
      endDate: this.TripForm.get('endDate')!.value,
      description: this.TripForm.get('description')!.value,
      image: this.TripForm.get('image')!.value,
      linkphoto: this.TripForm.get('linkphoto')!.value,
      max: this.TripForm.get('max')!.value,
      price: this.TripForm.get('price')!.value,
      

    } as trip
    this.TripForm.reset();
    this.firebase.addTrip(AddTrip);
    
    
    


  }

}
