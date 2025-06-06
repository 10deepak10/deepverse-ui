import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableItem } from './table-item';

describe('TableItem', () => {
  let component: TableItem;
  let fixture: ComponentFixture<TableItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
