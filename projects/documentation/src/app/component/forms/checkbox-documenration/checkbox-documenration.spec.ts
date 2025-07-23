import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxDocumenration } from './checkbox-documenration';

describe('CheckboxDocumenration', () => {
  let component: CheckboxDocumenration;
  let fixture: ComponentFixture<CheckboxDocumenration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxDocumenration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxDocumenration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
