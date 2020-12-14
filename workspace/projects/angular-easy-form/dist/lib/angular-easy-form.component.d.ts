import { EventEmitter, OnInit, SimpleChanges } from '@angular/core';
import { Config } from './interfaces/Config';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AngularEasyFormComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AngularEasyFormComponent, "lib-angular-easy-form", never, { "masterConfig": "masterConfig"; }, { "eventsForm": "eventsForm"; }, never, never>;
}

//# sourceMappingURL=angular-easy-form.component.d.ts.map