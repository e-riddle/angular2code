import { Component, OnInit } from '@angular/core';

import { Speaker } from './../speaker';
import { DataService } from './../data.service';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.css']
})
export class SpeakerComponent implements OnInit {
  errorMessage: string;
  speakers: Speaker[];

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.getSpeakers();
  }

  getSpeakers() {
    this.dataService.getSpeakers()
      .subscribe(
      speakers => this.speakers = speakers,
      error => this.errorMessage = <any>error);
  }
}
