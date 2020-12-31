import { Output } from '@angular/core';
import { Component, EventEmitter, Input, OnInit, SimpleChanges } from '@angular/core';
import { ThemeConfig } from './config/themeConfig';
import { FormOptions } from './interfaces/FormOptions';


@Component({
  selector: 'lib-angular-easy-form',
  templateUrl: './angular-easy-form.component.html',
  styles: ['./angular-easy-form.component.css']
})
export class AngularEasyFormComponent implements OnInit {
  setConfig: any;
  @Output() eventsForm = new EventEmitter();
  allFields: any = {};
  valueEvent: any = {};
  otherEvents: any = {};
  masterConfig: any = { };
  showGroups = false;

  constructor(private themConfig: ThemeConfig) {

  }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  formOptions(): ThemeConfig {
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

  populateGroup(groupFields: Array<any>) {
    this.masterConfig.fields = groupFields;
    this.showGroups = groupFields ? true : false;
  }

}
