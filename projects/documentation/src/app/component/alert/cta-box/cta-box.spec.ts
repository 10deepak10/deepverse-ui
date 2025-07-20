import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaBox } from './cta-box';

describe('CtaBox', () => {
  let component: CtaBox;
  let fixture: ComponentFixture<CtaBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
