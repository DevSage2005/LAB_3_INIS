import { Component, OnInit } from '@angular/core';
import { Speakers, Speaker } from '../../services/speakers';

import { CommonModule } from '@angular/common';        // ← для *ngFor
import { SpeakerCardComponent } from '../speaker-card/speaker-card'; 

@Component({
  selector: 'app-speakers-list',
  standalone: true, 
  templateUrl: './speakers-list.html',
  styleUrls: ['./speakers-list.css'],
  imports: [CommonModule, SpeakerCardComponent]
})
export class SpeakersListComponent implements OnInit {
  speakers: Speaker[] = [];

  constructor(private speakersService: Speakers) {}

  ngOnInit(): void {
    this.speakers = this.speakersService.getSpeakers();
  }

  trackById(index: number, item: Speaker): number {
    return item.id;
  }
}