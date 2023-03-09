import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TripContainerComponent } from './trip-container/trip-container.component';
import { TripCardComponent } from './trip-card/trip-card.component';
import { TripFormComponent } from './trip-form/trip-form.component';
import { OpinionComponent } from './opinion/opinion.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    TripContainerComponent,
    TripCardComponent,
    TripFormComponent,
    OpinionComponent,
    CartComponent,

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
