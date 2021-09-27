import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {Card} from "./card/card";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    Card
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
