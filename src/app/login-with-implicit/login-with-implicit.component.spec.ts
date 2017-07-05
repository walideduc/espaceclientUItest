import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWithImplicitComponent } from './login-with-implicit.component';

describe('LoginWithImplicitComponent', () => {
  let component: LoginWithImplicitComponent;
  let fixture: ComponentFixture<LoginWithImplicitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginWithImplicitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWithImplicitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
