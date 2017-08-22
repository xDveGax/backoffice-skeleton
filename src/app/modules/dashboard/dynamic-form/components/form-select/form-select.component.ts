import { Component } from '@angular/core';
import { Field } from '../../models/field.interface';
import { FormGroup } from '@angular/forms/src/model';
import { FieldConfig } from 'app/modules/dashboard/dynamic-form/models/field-config.interface';

@Component({
  selector: 'form-select',
  styleUrls: ['form-select.component.scss'],
  template: `
    <div
      class="dynamic-field form-select"
      [formGroup]="group">
      <label>{{ config.label }}</label>
      <select [formControlName]="config.name">
        <option value="">{{ config.placeholder }}</option>
        <option *ngFor="let option of config.options">
          {{ option }}
        </option>
      </select>
    </div>
  `
})
export class FormSelectComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
