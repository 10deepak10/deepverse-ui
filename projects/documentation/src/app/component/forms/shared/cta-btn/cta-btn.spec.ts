import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaBtn } from './cta-btn';

describe('CtaBtn', () => {
  let component: CtaBtn;
  let fixture: ComponentFixture<CtaBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaBtn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaBtn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
