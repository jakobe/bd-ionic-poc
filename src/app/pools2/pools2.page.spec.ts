import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pools2Page } from './pools2.page';

describe('Pools2Page', () => {
  let component: Pools2Page;
  let fixture: ComponentFixture<Pools2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pools2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pools2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
