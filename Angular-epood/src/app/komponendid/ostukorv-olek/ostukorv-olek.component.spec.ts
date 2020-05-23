import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OstukorvOlekComponent } from './ostukorv-olek.component';

describe('OstukorvOlekComponent', () => {
  let component: OstukorvOlekComponent;
  let fixture: ComponentFixture<OstukorvOlekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OstukorvOlekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OstukorvOlekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
