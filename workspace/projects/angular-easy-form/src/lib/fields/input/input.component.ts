import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularEasyFormService } from '../../angular-easy-form.service';
import { ConfigInput } from '../../interfaces/Config';


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
 /*    if (this.configInput.required) {
      this.inputForm.get('inputField')?.setValidators([Validators.required])
    } */
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
