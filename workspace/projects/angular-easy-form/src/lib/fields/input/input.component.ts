import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { ConfigInput } from '../../interfaces/ConfigInput';


@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() configInput: ConfigInput

  @Output() eventInput = new EventEmitter();

  constructor(private fb: FormBuilder) {
   }
  inputForm!: FormGroup;
  
  ngOnInit(): void {
    this.initiFb();
    this.getFormChanges();
  }

  initiFb() {
    const setControlName: any = {}
    setControlName[this.configInput.alias.toString()] = ['']
    this.inputForm = this.fb.group(setControlName);
  }

  getFormChanges() {
    this.inputForm.valueChanges.subscribe(() => {
      this.eventInput.emit(this.inputForm);
    });
  }

  eventValue(event: any) {
    this.eventInput.emit({alias: this.configInput.alias, type: 'searchForm', value: event});
  }

}
