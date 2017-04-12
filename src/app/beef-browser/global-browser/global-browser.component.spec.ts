import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalBrowserComponent } from './global-browser.component';

describe('GlobalBrowserComponent', () => {
  let component: GlobalBrowserComponent;
  let fixture: ComponentFixture<GlobalBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
