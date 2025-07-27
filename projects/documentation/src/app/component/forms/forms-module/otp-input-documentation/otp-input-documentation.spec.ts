import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpInputDocumentation } from './otp-input-documentation';

describe('OtpInputDocumentation', () => {
  let component: OtpInputDocumentation;
  let fixture: ComponentFixture<OtpInputDocumentation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtpInputDocumentation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtpInputDocumentation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
