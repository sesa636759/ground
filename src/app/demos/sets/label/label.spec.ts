import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetLabel } from './label';

describe('SetLabel', () => {
  let component: SetLabel;
  let fixture: ComponentFixture<SetLabel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetLabel],
    }).compileComponents();

    fixture = TestBed.createComponent(SetLabel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});







