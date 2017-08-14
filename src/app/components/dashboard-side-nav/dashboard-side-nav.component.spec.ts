import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSideNavComponent } from './dashboard-side-nav.component';

describe('DashboardSideNavComponent', () => {
  let component: DashboardSideNavComponent;
  let fixture: ComponentFixture<DashboardSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
