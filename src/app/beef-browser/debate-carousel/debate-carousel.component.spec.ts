import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebateCarouselComponent } from './debate-carousel.component';

describe('DebateCarouselComponent', () => {
  let component: DebateCarouselComponent;
  let fixture: ComponentFixture<DebateCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebateCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebateCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
