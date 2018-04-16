import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElistItemComponent } from './elist-item.component';

describe('ElistItemComponent', () => {
  let component: ElistItemComponent;
  let fixture: ComponentFixture<ElistItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElistItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
