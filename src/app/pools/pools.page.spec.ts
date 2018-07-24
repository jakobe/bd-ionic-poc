import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolsPage } from './pools.page';

describe('PoolsPage', () => {
  let component: PoolsPage;
  let fixture: ComponentFixture<PoolsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
