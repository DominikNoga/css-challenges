import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeRendererComponent } from './challenge-renderer.component';

describe('ChallengeRendererComponent', () => {
  let component: ChallengeRendererComponent;
  let fixture: ComponentFixture<ChallengeRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChallengeRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
