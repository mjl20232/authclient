import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationComponent } from './authorization.component';
import { Injectable } from '@angular/core';

describe('AuthorizationComponent', () => {
  let component: AuthorizationComponent;
  let fixture: ComponentFixture<AuthorizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorizationComponent]
    });
    fixture = TestBed.createComponent(AuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
