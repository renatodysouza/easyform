import { EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfigInput } from '../../interfaces/ConfigInput';
export declare class InputComponent implements OnInit {
    private fb;
    configInput: ConfigInput;
    eventInput: EventEmitter<any>;
    constructor(fb: FormBuilder);
    inputForm: FormGroup;
    ngOnInit(): void;
    initiFb(): void;
    getFormChanges(): void;
    eventValue(event: any): void;
}
