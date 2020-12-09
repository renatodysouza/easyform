import { Output } from '@angular/core';
import { Component, EventEmitter, Input, OnInit, SimpleChanges } from '@angular/core';
import { Config } from './interfaces/Config';

@Component({
  selector: 'lib-angular-easy-form',
  templateUrl: './angular-easy-form.component.html',
  styles: ['./angular-easy-form.component.css']
})
export class AngularEasyFormComponent implements OnInit {
  @Input() masterConfig: Config;
  @Output() eventsForm = new EventEmitter();
  allFields: any = {};

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.easyFormService.setConfig(changes.masterConfig.currentValue());
  }

  eventGroupFields(event: any) {
    this.allFields = Object.assign(this.allFields, event);
    this.eventsForm.emit(this.allFields)
  }

}
