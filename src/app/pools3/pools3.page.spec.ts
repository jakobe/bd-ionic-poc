import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pools3Page } from './pools3.page';

describe('Pools3Page', () => {
  let component: Pools3Page;
  let fixture: ComponentFixture<Pools3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pools3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pools3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
