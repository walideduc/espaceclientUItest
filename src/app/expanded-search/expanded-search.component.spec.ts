import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandedSearchComponent } from './expanded-search.component';

describe('ExpandedSearchComponent', () => {
  let component: ExpandedSearchComponent;
  let fixture: ComponentFixture<ExpandedSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandedSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
