import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OstukorvDetailidComponent } from './ostukorv-detailid.component';

describe('OstukorvDetailidComponent', () => {
  let component: OstukorvDetailidComponent;
  let fixture: ComponentFixture<OstukorvDetailidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OstukorvDetailidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OstukorvDetailidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
