import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersuccessComponent } from './usersuccess.component';

describe('UsersuccessComponent', () => {
  let component: UsersuccessComponent;
  let fixture: ComponentFixture<UsersuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
