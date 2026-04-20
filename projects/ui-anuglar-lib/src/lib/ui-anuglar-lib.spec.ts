import { TestBed } from '@angular/core/testing';

import { GROUND_UI_DIRECTIVES } from './ui-anuglar-lib';
import { provideGroundUi } from './providers';

describe('GROUND_UI_DIRECTIVES', () => {
  it('should expose wrapper directives', () => {
    expect(GROUND_UI_DIRECTIVES.length).toBeGreaterThan(0);
  });

  it('should register provider without throwing', async () => {
    await TestBed.configureTestingModule({
      providers: [provideGroundUi()],
    }).compileComponents();

    expect(TestBed).toBeTruthy();
  });
});
