import { Injectable } from '@angular/core';

export interface Speaker {
  id: number;
  name: string;
  topic: string;
  photoUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class Speakers  {
  private speakers: Speaker[] = [
    { id: 1, name: 'Екатерина', topic: 'AI в продакшене', photoUrl: 'ekateryna.svg' },
    { id: 2, name: 'Елена',    topic: 'React vs Angular', photoUrl: 'elena.svg' },
    { id: 3, name: 'Иван',     topic: 'Дизайн-системы',  photoUrl: 'ilya.svg' },
    { id: 4, name: 'Анна',     topic: 'Масштабирование', photoUrl: 'svetlana.svg' },
  ];

  getSpeakers(): Speaker[] {
    return this.speakers;
  }
}