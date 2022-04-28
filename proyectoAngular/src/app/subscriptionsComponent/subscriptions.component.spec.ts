import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionsComponentComponent } from './subscriptions.component';

describe('SubscriptionsComponentComponent', () => {
  let component: SubscriptionsComponentComponent;
  let fixture: ComponentFixture<SubscriptionsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
