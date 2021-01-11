import { HttpClient } from '@angular/common/http';
import { EventEmitter, OnInit } from '@angular/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Config } from './config/config';
export declare function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader;
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
    lang: string;
    constructor(themConfig: Config);
    setLanguage(lang: string): void;
    ngOnInit(): void;
    formOptions(): Config;
    eventGroupFields(event: any): void;
    agregateResult(event: any): void;
    populateGroup(): void;
}
export declare const options: AngularEasyFormComponent;
