import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OtpInput } from '@deepverse/ui';

@Component({
  selector: 'app-otp-input-documentation',
  imports: [OtpInput , FormsModule],
  templateUrl: './otp-input-documentation.html',
  styleUrl: './otp-input-documentation.scss'
})
export class OtpInputDocumentation {
  otp:any=''
}
