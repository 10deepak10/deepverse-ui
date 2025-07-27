import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadDocunentation } from './file-upload-docunentation';

describe('FileUploadDocunentation', () => {
  let component: FileUploadDocunentation;
  let fixture: ComponentFixture<FileUploadDocunentation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileUploadDocunentation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileUploadDocunentation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
