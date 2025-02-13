import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Challenge8Component } from './challenge8.component';

describe('Challenge8Component', () => {
  let component: Challenge8Component;
  let fixture: ComponentFixture<Challenge8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Challenge8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Challenge8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
