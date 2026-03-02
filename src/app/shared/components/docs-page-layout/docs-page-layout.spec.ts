import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsPageLayout } from './docs-page-layout';

describe('DocsPageLayout', () => {
  let component: DocsPageLayout;
  let fixture: ComponentFixture<DocsPageLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocsPageLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(DocsPageLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
