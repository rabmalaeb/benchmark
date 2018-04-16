import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPagerComponent } from './app-pager.component';

describe('AppPagerComponent', () => {
  let component: AppPagerComponent;
  let fixture: ComponentFixture<AppPagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
