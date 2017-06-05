import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LieuxListComponent } from './lieux-list.component';

describe('LieuxListComponent', () => {
  let component: LieuxListComponent;
  let fixture: ComponentFixture<LieuxListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LieuxListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LieuxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
