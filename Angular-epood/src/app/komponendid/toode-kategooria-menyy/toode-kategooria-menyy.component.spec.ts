import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToodeKategooriaMenyyComponent } from './toode-kategooria-menyy.component';

describe('ToodeKategooriaMenyyComponent', () => {
  let component: ToodeKategooriaMenyyComponent;
  let fixture: ComponentFixture<ToodeKategooriaMenyyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToodeKategooriaMenyyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToodeKategooriaMenyyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
