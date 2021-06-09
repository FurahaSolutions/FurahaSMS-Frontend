import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SchoolRoomService } from './school-room.service';

describe('SchoolRoomService', () => {
  let service: SchoolRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(SchoolRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
