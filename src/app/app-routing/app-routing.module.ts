import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { SponsorComponent } from '../sponsor/sponsor.component';
import { FridayComponent } from '../friday/friday.component';
import { SaturdayComponent } from '../saturday/saturday.component';
import { SpeakerComponent } from '../speaker/speaker.component';
import { RoomComponent } from '../room/room.component';
import { FaqComponent } from '../faq/faq.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sponsor', component: SponsorComponent },
  { path: 'friday', component: FridayComponent },
  { path: 'saturday', component: SaturdayComponent },
  { path: 'speaker', component: SpeakerComponent },
  { path: 'room', component: RoomComponent },
  { path: 'faq', component: FaqComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
