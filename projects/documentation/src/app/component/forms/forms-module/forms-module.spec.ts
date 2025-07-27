import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from './forms-module';

describe('FormsModule', () => {
  let component: FormsModule;
  let fixture: ComponentFixture<FormsModule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
