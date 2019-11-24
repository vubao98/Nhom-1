import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationRoutingPopupComponent } from './confirmation-routing-popup.component';

describe('ConfirmationRoutingPopupComponent', () => {
  let component: ConfirmationRoutingPopupComponent;
  let fixture: ComponentFixture<ConfirmationRoutingPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationRoutingPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationRoutingPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
