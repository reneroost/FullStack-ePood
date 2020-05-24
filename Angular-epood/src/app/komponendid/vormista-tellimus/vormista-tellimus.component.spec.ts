import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VormistaTellimusComponent } from './vormista-tellimus.component';

describe('VormistaTellimusComponent', () => {
  let component: VormistaTellimusComponent;
  let fixture: ComponentFixture<VormistaTellimusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VormistaTellimusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VormistaTellimusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
