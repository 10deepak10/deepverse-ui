import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DvTabShell } from '../../../../shared/dv-tab-shell/dv-tab-shell';
import { UploadBoxComponent } from '@deepverse/ui';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-file-upload-docunentation',
  imports: [CommonModule,FormsModule, DvTabShell , UploadBoxComponent],
  templateUrl: './file-upload-docunentation.html',
  styleUrl: './file-upload-docunentation.scss'
})
export class FileUploadDocunentation {

  uploadedFile: File = new File(['Dummy content'], 'example.csv', {
    type: 'text/csv',
    lastModified: Date.now(),
  });
  
}
