import {
    Component, OnInit, Input,
    ViewEncapsulation,
    Output, EventEmitter,
    ViewChild, ElementRef, ChangeDetectionStrategy, OnChanges, SimpleChanges
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-inputsearch',
    templateUrl: './inputsearch.component.html',
    styleUrls: ['./inputsearch.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom
})
export class InputsearchComponent implements OnInit, OnChanges {
    @ViewChild('selectInp') nameField: ElementRef;
    @ViewChild(MatAutocompleteTrigger, { static: true }) autoTrigger: MatAutocompleteTrigger;
    @Input() allData: any = [];
    @Input() searchDefault: any;
    @Input() preSelected = '';
    @Input() preSelectedComparer: any;
    @Input() label: string;
    @Input() itemValue: any;
    @Input() itemResult: any;
    @Output() sendValue = new EventEmitter();
    @Output() sendKeyEvent = new EventEmitter();
    @Input() validate: boolean;
    @Input() readOnly: boolean;
    focusField = false;
    myControl = new FormControl();
    filteredOptions: Observable<string[]>;
    allComplete = [];
    globalTrigger: any;
    callNumber = 0;
    callOne = 0;
    valuSelectedInit: string;
    constructor() {

    }

    ngOnInit(): void {
        this.allComplete = this.allData || [];
        this.allComplete.map((res: any) => {
            const str = res[this.itemResult].toLowerCase();
            if (res[this.preSelectedComparer] === this.preSelected) {
                this.myControl.setValue(str.toUpperCase());
                this.filter(this.preSelected);
                return;
            }
        });

        this.myControl.valueChanges.subscribe(value => {
            if (this.globalTrigger) {
                this.globalTrigger.openPanel();
            }
            if (value === '') {
                this.sendValue.emit({ id: '', name: this.label });
            }
            if (value === '' && this.callNumber === 0) {
                this.allComplete = this.allData;
                this.callNumber = 1;
            }
            this.filter(value);
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.allComplete = changes.allData.currentValue;
    }

    onKey(event: any) {
        this.sendKeyEvent.emit({eventSent: event, field: this.myControl});
    }

    private filter(value: string) {
        const filterValue = typeof value === 'string' ? value.toLowerCase() : value;
        const newResult: any = [];
        this.allData.map((option: any) => {
            const result = typeof option[this.itemResult] === 'string' ?
                option[this.itemResult].toLowerCase() : option[this.itemResult];
            if (result.includes(filterValue)) {
                this.valuSelectedInit = option.id;
                newResult.push(option);
            }
        });
        if (newResult.length > 1 && this.callNumber === 0) {
            setTimeout(() => {
                this.autoTrigger.openPanel();
            }, 200);
            this.callNumber = 1;
        } else {
            if (this.label === 'Delivery Address' && this.callOne === 0) {
                this.selected(this.valuSelectedInit, this.label);
                this.callOne = 1;
            }
        }
        this.allComplete = newResult;


    }

    eventClick($event: any, trigger: any) {
        this.globalTrigger = trigger;
        trigger.openPanel();
    }

    selected(id: any, label: string) {
        if (!id) {
            return;
        }
        this.sendValue.emit({ id: id, name: this.label });
    }

}
