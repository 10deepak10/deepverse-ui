import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipInputDocumentation } from './chip-input-documentation';

describe('ChipInputDocumentation', () => {
  let component: ChipInputDocumentation;
  let fixture: ComponentFixture<ChipInputDocumentation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipInputDocumentation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipInputDocumentation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
