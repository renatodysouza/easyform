import { EventEmitter, OnInit } from '@angular/core';
export declare class GroupFieldsComponent implements OnInit {
    configGroup: any;
    eventGroupInput: EventEmitter<any>;
    fieldsGroup: any;
    constructor();
    ngOnInit(): void;
    eventFields(event: any): void;
}
