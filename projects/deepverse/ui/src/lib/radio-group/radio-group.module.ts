import { NgModule } from '@angular/core';
import { RadioGroup } from './radio-group';
import { Radio } from './radio/radio';

@NgModule({
  imports: [RadioGroup, Radio ],
  exports: [RadioGroup, Radio]
})
export class RadioGroupModule { }
