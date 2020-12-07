import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


interface ConfigInput {
  type: string,
  alias: string,
  label: string,
  disable: boolean,
  placeholder: string,
  value: any,
  style: string
  required: boolean
}

@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() configInput: ConfigInput = {
    type: '',
    alias:'',
    label: 'teste',
    disable: false,
    placeholder: '',
    value: '',
    style: '',
    required: true
  };

  @Output() eventInput = new EventEmitter();

  constructor(private fb: FormBuilder) { }
  inputForm!: FormGroup;
  
  ngOnInit(): void {
    this.initiFb();
    if (this.configInput.required) {
      this.inputForm.get('inputField')?.setValidators([Validators.required])
    }
    this.getFormChanges();
  }

  initiFb() {
    const setControlName: any = {}
    setControlName[this.configInput.alias.toString()] = ['']
    this.inputForm = this.fb.group(setControlName);
  }

  getFormChanges() {
    this.inputForm.valueChanges.subscribe(() => {
      console.log(this.inputForm);
    });
  }

}
