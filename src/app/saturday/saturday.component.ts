import { Component, OnInit } from '@angular/core';

import { AppRoutingModule }     from '../app-routing/app-routing.module';

import { Session } from './../session';
import { DataService } from './../data.service';

@Component({
  selector: 'app-saturday',
  templateUrl: './saturday.component.html',
  styleUrls: ['./saturday.component.css'],
  providers: [DataService]
})

export class SaturdayComponent implements OnInit {
  errorMessage: string;
  sessions: Session[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getSaturday();
  }

  getSaturday() {
    this.dataService.getSaturday()
      .subscribe(
      sessions => this.sessions = sessions,
      error => this.errorMessage = <any>error);
  }
}
