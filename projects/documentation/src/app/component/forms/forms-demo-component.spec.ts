import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsDemoComponent } from './forms-demo-component';

describe('FormsDemoComponent', () => {
  let component: FormsDemoComponent;
  let fixture: ComponentFixture<FormsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
