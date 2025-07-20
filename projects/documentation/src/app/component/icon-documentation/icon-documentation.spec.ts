import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDocumentation } from './icon-documentation';

describe('IconDocumentation', () => {
  let component: IconDocumentation;
  let fixture: ComponentFixture<IconDocumentation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconDocumentation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconDocumentation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
