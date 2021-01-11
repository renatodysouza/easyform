import { EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfigInput } from '../../interfaces/ConfigInput';
export declare class InputComponent implements OnInit {
    private fb;
    configInput: ConfigInput;
    eventInput: EventEmitter<any>;
    applyLang: any;
    inputForm: FormGroup;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    initiFb(): void;
    setFormatDateField(): void;
    getFormChanges(): void;
    eventValue(event: any): void;
}
