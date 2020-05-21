import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtsingComponent } from './otsing.component';

describe('OtsingComponent', () => {
  let component: OtsingComponent;
  let fixture: ComponentFixture<OtsingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtsingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtsingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
