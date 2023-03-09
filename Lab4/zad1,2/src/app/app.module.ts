import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Zad1Component } from './zad1/zad1.component';
import { Zad5Component } from './zad5/zad5.component';

@NgModule({
  declarations: [
    AppComponent,
    Zad1Component,
    Zad5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
