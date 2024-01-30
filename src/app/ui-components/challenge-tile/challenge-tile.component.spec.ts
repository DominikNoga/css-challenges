import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeTileComponent } from './challenge-tile.component';

describe('ChallengeTileComponent', () => {
  let component: ChallengeTileComponent;
  let fixture: ComponentFixture<ChallengeTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChallengeTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
