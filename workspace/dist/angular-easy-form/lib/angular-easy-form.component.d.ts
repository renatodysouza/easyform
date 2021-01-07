import { EventEmitter, OnInit } from '@angular/core';
import { ThemeConfig } from './config/themeConfig';
export declare class AngularEasyFormComponent implements OnInit {
    private themConfig;
    setConfig: any;
    eventsForm: EventEmitter<any>;
    allFields: any;
    valueEvent: any;
    otherEvents: any;
    masterConfig: any;
    showGroups: boolean;
    constructor(themConfig: ThemeConfig);
    ngOnInit(): void;
    formOptions(): ThemeConfig;
    eventGroupFields(event: any): void;
    agregateResult(event: any): void;
    populateGroup(groupFields: Array<any>): void;
}
