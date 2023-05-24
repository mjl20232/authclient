import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationDetailComponent } from './authorization-detail.component';

describe('AuthorizationDetailComponent', () => {
  let component: AuthorizationDetailComponent;
  let fixture: ComponentFixture<AuthorizationDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorizationDetailComponent]
    });
    fixture = TestBed.createComponent(AuthorizationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
