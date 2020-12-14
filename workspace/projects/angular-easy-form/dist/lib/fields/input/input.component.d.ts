import { EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfigInput } from '../../interfaces/ConfigInput';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InputComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<InputComponent, "lib-input", never, { "configInput": "configInput"; }, { "eventInput": "eventInput"; }, never, never>;
}

//# sourceMappingURL=input.component.d.ts.map