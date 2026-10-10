import { Component, Input } from '@angular/core';
import { Speaker } from '../../services/speakers';

@Component({
  selector: 'app-speaker-card',
  standalone: true,
  templateUrl: './speaker-card.html',
  styleUrls: ['./speaker-card.css'],
})
export class SpeakerCardComponent {
  @Input() speaker!: Speaker;
}