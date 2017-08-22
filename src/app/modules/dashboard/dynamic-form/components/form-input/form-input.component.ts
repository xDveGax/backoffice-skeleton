import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';
import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'form-input',
  styleUrls: ['form-input.component.scss'],
  template: `
    <div
      class="dynamic-field form-input"
      [formGroup]="group">
      <label>{{ config.label }}</label>
      <input
        type="text"
        [attr.placeholder]="config.placeholder"
        [formControlName]="config.name">
    </div>
  `
})
export class FormInputComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
