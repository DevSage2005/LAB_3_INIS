import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpeakersList } from './speakers-list';

describe('SpeakersList', () => {
  let component: SpeakersList;
  let fixture: ComponentFixture<SpeakersList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpeakersList],
    }).compileComponents();

    fixture = TestBed.createComponent(SpeakersList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
