import { OnInit, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import * as ɵngcc0 from '@angular/core';
export declare class InputsearchComponent implements OnInit, OnChanges {
    nameField: ElementRef;
    autoTrigger: MatAutocompleteTrigger;
    allData: any;
    searchDefault: any;
    preSelected: string;
    preSelectedComparer: any;
    label: string;
    itemValue: any;
    itemResult: any;
    sendValue: EventEmitter<any>;
    sendKeyEvent: EventEmitter<any>;
    validate: boolean;
    readOnly: boolean;
    focusField: boolean;
    myControl: FormControl;
    filteredOptions: Observable<string[]>;
    allComplete: any[];
    globalTrigger: any;
    callNumber: number;
    callOne: number;
    valuSelectedInit: string;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onKey(event: any): void;
    private filter;
    eventClick($event: any, trigger: any): void;
    selected(id: any, label: string): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InputsearchComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<InputsearchComponent, "app-inputsearch", never, { "allData": "allData"; "preSelected": "preSelected"; "searchDefault": "searchDefault"; "preSelectedComparer": "preSelectedComparer"; "label": "label"; "itemValue": "itemValue"; "itemResult": "itemResult"; "validate": "validate"; "readOnly": "readOnly"; }, { "sendValue": "sendValue"; "sendKeyEvent": "sendKeyEvent"; }, never, never>;
}

//# sourceMappingURL=inputsearch.component.d.ts.map