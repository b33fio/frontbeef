import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDebatesComponent } from './my-debates.component';

describe('MyDebatesComponent', () => {
  let component: MyDebatesComponent;
  let fixture: ComponentFixture<MyDebatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDebatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDebatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
