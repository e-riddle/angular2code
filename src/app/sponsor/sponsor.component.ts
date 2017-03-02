import { Component, OnInit } from '@angular/core';

import { Sponsor } from './../sponsor';
import { DataService } from './../data.service';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent implements OnInit {
  errorMessage: string;
  sponsors: Sponsor[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getSponsors();
  }

  getSponsors() {
    //waits for async call to finish and will map it

    this.dataService.getSponsors()
      .subscribe(
      sponsors => this.sponsors = sponsors,
      error => this.errorMessage = <any>error);
  }
}
