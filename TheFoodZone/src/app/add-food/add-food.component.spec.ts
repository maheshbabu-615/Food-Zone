import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemsComponent } from './add-food.component';

describe('AddFoodComponent', () => {
  let component: AddItemsComponent;
  let fixture: ComponentFixture<AddItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddItemsComponent]
    });
    fixture = TestBed.createComponent(AddItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
