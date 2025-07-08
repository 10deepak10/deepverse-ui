import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabDocumentation } from './tab-documentation';

describe('TabDocumentation', () => {
  let component: TabDocumentation;
  let fixture: ComponentFixture<TabDocumentation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabDocumentation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabDocumentation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
