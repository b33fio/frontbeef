import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebatePageComponent } from './debate-page.component';

describe('DebatePageComponent', () => {
  let component: DebatePageComponent;
  let fixture: ComponentFixture<DebatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
