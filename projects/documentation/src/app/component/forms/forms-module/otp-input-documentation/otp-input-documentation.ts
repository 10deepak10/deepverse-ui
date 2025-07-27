import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OtpInput } from '@deepverse/ui';
import { DvTabShell } from '../../../../shared/dv-tab-shell/dv-tab-shell';

@Component({
  selector: 'app-otp-input-documentation',
  imports: [DvTabShell,OtpInput , FormsModule],
  templateUrl: './otp-input-documentation.html',
  styleUrl: './otp-input-documentation.scss'
})
export class OtpInputDocumentation {
  otp:any=''
}
