import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeTileListComponent } from './challenge-tile-list.component';

describe('ChallengeTileListComponent', () => {
  let component: ChallengeTileListComponent;
  let fixture: ComponentFixture<ChallengeTileListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeTileListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChallengeTileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
