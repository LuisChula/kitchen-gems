import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsRankComponent } from './stars-rank.component';

describe('StarsRankComponent', () => {
  let component: StarsRankComponent;
  let fixture: ComponentFixture<StarsRankComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarsRankComponent]
    });
    fixture = TestBed.createComponent(StarsRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
