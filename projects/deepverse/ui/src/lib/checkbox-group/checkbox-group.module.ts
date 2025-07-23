import { NgModule } from '@angular/core';
import { Checkbox } from './checkbox/checkbox';
import { CheckboxGroup } from './checkbox-group';

@NgModule({
  declarations: [],
  imports: [Checkbox, CheckboxGroup],
  exports: [Checkbox, CheckboxGroup],
})
export class CheckboxGroupModule { }
