import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeefNotFoundComponent } from './beef-not-found.component';

describe('BeefNotFoundComponent', () => {
  let component: BeefNotFoundComponent;
  let fixture: ComponentFixture<BeefNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeefNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeefNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
