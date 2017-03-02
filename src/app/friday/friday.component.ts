import { Component, OnInit } from '@angular/core';

import { Session } from './../session';
import { DataService } from './../data.service';

@Component({
  selector: 'app-friday',
  templateUrl: './friday.component.html',
  styleUrls: ['./friday.component.css']
})
export class FridayComponent implements OnInit {
  errorMessage: string;
  sessions: Session[];
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getFriday();
  }

  getFriday() {
    this.dataService.getFriday()
      .subscribe(
      sessions => this.sessions = sessions,
      error => this.errorMessage = <any>error);
  }
}
