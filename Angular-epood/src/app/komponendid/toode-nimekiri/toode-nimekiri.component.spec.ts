import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToodeNimekiriComponent } from './toode-nimekiri.component';

describe('ToodeNimekiriComponent', () => {
  let component: ToodeNimekiriComponent;
  let fixture: ComponentFixture<ToodeNimekiriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToodeNimekiriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToodeNimekiriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
