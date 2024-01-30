import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSuchChallengeComponent } from './no-such-challenge.component';

describe('NoSuchChallengeComponent', () => {
  let component: NoSuchChallengeComponent;
  let fixture: ComponentFixture<NoSuchChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoSuchChallengeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoSuchChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
