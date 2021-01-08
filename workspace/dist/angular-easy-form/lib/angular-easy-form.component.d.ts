import { EventEmitter, OnInit } from '@angular/core';
import { Config } from './config/config';
export declare class AngularEasyFormComponent implements OnInit {
    private themConfig;
    eventsForm: EventEmitter<any>;
    setFieldsConfig: any;
    setConfig: any;
    allFields: any;
    valueEvent: any;
    otherEvents: any;
    masterConfig: any;
    showGroups: boolean;
    constructor(themConfig: Config);
    ngOnInit(): void;
    formOptions(): Config;
    eventGroupFields(event: any): void;
    agregateResult(event: any): void;
    populateGroup(): void;
}
export declare const options: AngularEasyFormComponent;
