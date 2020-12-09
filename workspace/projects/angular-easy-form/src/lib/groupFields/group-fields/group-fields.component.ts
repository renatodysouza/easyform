import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-group-fields',
  templateUrl: './group-fields.component.html',
  styleUrls: ['./group-fields.component.css']
})
export class GroupFieldsComponent implements OnInit {
  @Input() configGroup: any;
  @Output() eventGroupInput = new EventEmitter();
  fieldsGroup: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  eventFields(event: any) {
    if (event.type === 'searchForm') {
      this.fieldsGroup[event.alias] = {value: event.value, isValid: event.valid };
      this.eventGroupInput.emit(this.fieldsGroup);
    } else {
      this.fieldsGroup[Object.keys(event.value)[0] || Object.keys(event)[0]] = {value: event.value, isValid: event.valid, formGroup: event};
      this.eventGroupInput.emit(this.fieldsGroup)
    }
  }

}
