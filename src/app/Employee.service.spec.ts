import { TestBed, inject } from '@angular/core/testing';
import { EmployeeService } from './Employee.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeService]
    });
  });

  it('should be created', inject([EmployeeService], (service: EmployeeService) => {
    expect(service).toBeTruthy();
  }));
});