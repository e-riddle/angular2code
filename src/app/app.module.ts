import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FridayComponent } from './friday/friday.component';
import { SaturdayComponent } from './saturday/saturday.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { RoomComponent } from './room/room.component';
import { FaqComponent } from './faq/faq.component';

import { AppRoutingModule }     from './app-routing/app-routing.module';

import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FridayComponent,
    SaturdayComponent,
    SponsorComponent,
    SpeakerComponent,
    RoomComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
