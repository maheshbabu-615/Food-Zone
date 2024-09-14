import { TestBed } from '@angular/core/testing';

import { addRestaurantService } from './add-restaurant.service';

describe('AddRestaurantService', () => {
  let service: addRestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(addRestaurantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
