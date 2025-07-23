import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioDocumentation } from './radio-documentation';

describe('RadioDocumentation', () => {
  let component: RadioDocumentation;
  let fixture: ComponentFixture<RadioDocumentation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioDocumentation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioDocumentation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
