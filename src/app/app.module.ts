import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CalComponent } from './cal/cal.component';

@NgModule({
  declarations: [
    CalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CalComponent]
})
export class AppModule { }
