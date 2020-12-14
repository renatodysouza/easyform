import { EventEmitter, OnInit, SimpleChanges } from '@angular/core';
import { Config } from './interfaces/Config';
export declare class AngularEasyFormComponent implements OnInit {
    masterConfig: Config;
    eventsForm: EventEmitter<any>;
    allFields: any;
    valueEvent: any;
    otherEvents: any;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    eventGroupFields(event: any): void;
}
