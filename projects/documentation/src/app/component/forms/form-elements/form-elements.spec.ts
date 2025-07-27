import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormElements } from './form-elements';

describe('FormElements', () => {
  let component: FormElements;
  let fixture: ComponentFixture<FormElements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormElements]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormElements);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
