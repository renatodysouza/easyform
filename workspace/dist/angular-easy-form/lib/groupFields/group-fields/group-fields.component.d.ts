import { EventEmitter, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
export declare class GroupFieldsComponent implements OnInit {
    translate: TranslateService;
    configGroup: any;
    eventGroupInput: EventEmitter<any>;
    setLang: any;
    fieldsGroup: any;
    constructor(translate: TranslateService);
    ngOnInit(): void;
    eventFields(event: any): void;
}
