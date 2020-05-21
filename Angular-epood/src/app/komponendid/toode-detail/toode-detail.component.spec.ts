import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToodeDetailComponent } from './toode-detail.component';

describe('ToodeDetailComponent', () => {
  let component: ToodeDetailComponent;
  let fixture: ComponentFixture<ToodeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToodeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToodeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
