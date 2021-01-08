import { Output } from '@angular/core';
import { Component, EventEmitter, Input, OnInit, SimpleChanges } from '@angular/core';
import { Config } from './config/config';
import { Fields } from './config/fields';
import { FormOptions } from './interfaces/FormOptions';


@Component({
  selector: 'lib-angular-easy-form',
  templateUrl: './angular-easy-form.component.html',
  styles: ['./angular-easy-form.component.css']
})
export class AngularEasyFormComponent implements OnInit {
  @Output() eventsForm = new EventEmitter();
  @Input() setFieldsConfig: any;
  setConfig: any;
  allFields: any = {};
  valueEvent: any = {};
  otherEvents: any = {};
  masterConfig: any = { };
  showGroups = false;

  constructor(private themConfig: Config) {

  }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.populateGroup();
  }

  formOptions(): Config {
    return this.themConfig;
  }

  // tslint:disable-next-line: typedef
  eventGroupFields(event: any) {
    this.agregateResult(event);
    this.valueEvent = {
      otherEvents: this.allFields,
      values: Object.assign(this.otherEvents, event[Object.keys(event)[0].toString()][0])
    };
    this.eventsForm.emit(this.valueEvent);
  }

  agregateResult(event: any) {
    this.allFields = Object.assign(this.allFields, event);
  }

  populateGroup() {
    this.masterConfig.fields = this.setFieldsConfig;
    this.showGroups = this.setFieldsConfig ? true : false;
  }

}

export const options = new AngularEasyFormComponent(new Config(new Fields()));

