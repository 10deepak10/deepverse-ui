import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchorMenu } from './anchor-menu';

describe('AnchorMenu', () => {
  let component: AnchorMenu;
  let fixture: ComponentFixture<AnchorMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnchorMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnchorMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
