import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHotellistComponent } from './user-hotellist.component';

describe('UserHotellistComponent', () => {
  let component: UserHotellistComponent;
  let fixture: ComponentFixture<UserHotellistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHotellistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserHotellistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
