import { TestBed } from '@angular/core/testing';

import { DataSheetService } from './data-sheet.service';

describe('DataSheetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataSheetService = TestBed.get(DataSheetService);
    expect(service).toBeTruthy();
  });
});
