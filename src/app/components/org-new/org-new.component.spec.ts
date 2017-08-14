import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgNewComponent } from './org-new.component';

describe('OrgNewComponent', () => {
  let component: OrgNewComponent;
  let fixture: ComponentFixture<OrgNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
