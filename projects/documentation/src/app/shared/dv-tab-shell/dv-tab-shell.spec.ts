import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvTabShell } from './dv-tab-shell';

describe('DvTabShell', () => {
  let component: DvTabShell;
  let fixture: ComponentFixture<DvTabShell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DvTabShell]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DvTabShell);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
