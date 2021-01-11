import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lib-group-fields',
  templateUrl: './group-fields.component.html',
  styleUrls: ['./group-fields.component.css']
})
export class GroupFieldsComponent implements OnInit {
  @Input() configGroup: any;
  @Output() eventGroupInput = new EventEmitter();
  @Input() setLang: any;
  fieldsGroup: any = {};

  constructor(public translate: TranslateService) {
    this.translate.addLangs(['en', 'pt']);
    translate.setDefaultLang('pt');
    translate.use(this.setLang || localStorage.getItem('locale') || 'pt');
   }

  ngOnInit(): void {
  }

  eventFields(event: any) {
    if (event.type === 'searchForm') {
      this.fieldsGroup[event.alias] = {value: event.value, isValid: event.valid };
      this.eventGroupInput.emit(this.fieldsGroup);
    } else {
      this.fieldsGroup[Object.keys(event.value)[0] || Object.keys(event)[0]] = [ event.value, event.valid, event ];
      this.eventGroupInput.emit(this.fieldsGroup);
    }
  }

}
