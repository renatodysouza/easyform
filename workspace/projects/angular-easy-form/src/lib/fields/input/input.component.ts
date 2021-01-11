import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfigInput } from '../../interfaces/ConfigInput';
import * as moment from 'moment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() configInput!: ConfigInput;
  @Output() eventInput = new EventEmitter();
  @Input() applyLang: any;
  inputForm!: FormGroup;
  
  constructor(private fb: FormBuilder) {

  }


  ngOnInit(): void {
    this.initiFb();
    this.getFormChanges();
  }

  initiFb() {
    const setControlName: any = {};
    this.setFormatDateField();
    setControlName[this.configInput.alias.toString()] = [{value: this.configInput.value || '',
     disabled: this.configInput.disable || false}];
    this.inputForm = this.fb.group(setControlName);
    this.eventInput.emit(this.inputForm);
  }

  setFormatDateField() {
    if (this.configInput.type === 'date') {
      this.configInput.value = moment(this.configInput.value).format(this.configInput.format || 'YYYY-MM-DD');
    }

  }

  getFormChanges() {
    this.inputForm.valueChanges.subscribe(() => {
      this.eventInput.emit(this.inputForm);
    });
  }

  eventValue(event: any) {
    this.eventInput.emit({ alias: this.configInput.alias, type: 'searchForm', value: event });
  }

}
