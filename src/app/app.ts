import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { SpeakersListComponent } from './components/speakers-list/speakers-list';

@Component({
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.css',
   imports: [HeaderComponent, SpeakersListComponent],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('it-conference-angular');
}
