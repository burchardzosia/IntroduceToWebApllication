import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { TripContainerComponent } from './trip-container/trip-container.component';
import {CartComponent} from './cart/cart.component'
import { TripFromComponent } from './trip-from/trip-from.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { BuyCardComponent } from './buy-card/buy-card.component';
const routes: Routes = [
  {path: 'home', component: StartComponent},
  {path: 'trip', component: TripContainerComponent},
  {path: 'cart', component: CartComponent },
  {path: 'form', component: TripFromComponent},
  {path: 'trip/:id', component:TripDetailsComponent },
  {path: 'buycard', component: BuyCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
