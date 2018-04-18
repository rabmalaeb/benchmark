import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DependentItemComponent } from './dependent-item.component';

describe('DependentItemComponent', () => {
  let component: DependentItemComponent;
  let fixture: ComponentFixture<DependentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DependentItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DependentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
