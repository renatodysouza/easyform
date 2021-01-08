import { ɵɵdefineInjectable, Injectable, ɵɵinject, EventEmitter, Component, Output, Input, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, NgModule } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatAutocompleteTrigger, MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';

class Fields {
    constructor() {
        this.allFields = [];
    }
    text(settings) {
        this.allFields.push(settings);
    }
    number(settings) {
        this.allFields.push(settings);
    }
    textArea(settings) {
        this.allFields.push(settings);
    }
    date(settings) {
        this.allFields.push(settings);
    }
    select(settings) {
        this.allFields.push(settings);
    }
    checkbox(settings) {
        this.allFields.push(settings);
    }
    searchInput(settings) {
        this.allFields.push(settings);
    }
    getFields() {
        return this.allFields;
    }
}
Fields.ɵprov = ɵɵdefineInjectable({ factory: function Fields_Factory() { return new Fields(); }, token: Fields, providedIn: "root" });
Fields.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];

class Config {
    constructor(fields) {
        this.fields = fields;
        this.fieldsBuilded = [];
        this.fieldsClass = fields;
        this.config = {
            style: this.styleGlobal
        };
    }
    generateMatriz() {
        this.decreaseFields();
        this.matriz.map(numb => {
            this.fieldsBuilded.push(this.buildingFields(numb));
            this.fieldsIteration = this.fieldsIteration.slice(numb, this.fieldsIteration.length);
        });
    }
    decreaseFields() {
        return this.fieldsIteration = [...this.fieldsClass.getFields()];
    }
    buildingFields(quantityOfFields) {
        const fieldsBuild = [];
        const allFields = this.fieldsIteration;
        for (let index = 0; index < allFields.length;) {
            if (quantityOfFields > index) {
                fieldsBuild.push(allFields[index]);
            }
            index++;
        }
        return fieldsBuild;
    }
    field() {
        return this.fieldsClass;
    }
    build() {
        this.generateMatriz();
        return this.fieldsBuilded || this.fieldsClass.getFields();
    }
}
Config.ɵprov = ɵɵdefineInjectable({ factory: function Config_Factory() { return new Config(ɵɵinject(Fields)); }, token: Config, providedIn: "root" });
Config.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
Config.ctorParameters = () => [
    { type: Fields }
];

class AngularEasyFormComponent {
    constructor(themConfig) {
        this.themConfig = themConfig;
        this.eventsForm = new EventEmitter();
        this.allFields = {};
        this.valueEvent = {};
        this.otherEvents = {};
        this.masterConfig = {};
        this.showGroups = false;
    }
    // tslint:disable-next-line: typedef
    ngOnInit() {
        this.populateGroup();
    }
    formOptions() {
        return this.themConfig;
    }
    // tslint:disable-next-line: typedef
    eventGroupFields(event) {
        this.agregateResult(event);
        this.valueEvent = {
            otherEvents: this.allFields,
            values: Object.assign(this.otherEvents, event[Object.keys(event)[0].toString()][0])
        };
        this.eventsForm.emit(this.valueEvent);
    }
    agregateResult(event) {
        this.allFields = Object.assign(this.allFields, event);
    }
    populateGroup() {
        this.masterConfig.fields = this.setFieldsConfig;
        this.showGroups = this.setFieldsConfig ? true : false;
    }
}
AngularEasyFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-angular-easy-form',
                template: "<div *ngIf=\"showGroups\">\r\n    <lib-group-fields *ngFor=\"let horizontalFields of masterConfig.fields\"\r\n     [style]='masterConfig.style' \r\n     [configGroup]='horizontalFields'\r\n     (eventGroupInput) ='eventGroupFields($event)'\r\n     ></lib-group-fields>\r\n</div>\r\n",
                styles: ['./angular-easy-form.component.css']
            },] }
];
AngularEasyFormComponent.ctorParameters = () => [
    { type: Config }
];
AngularEasyFormComponent.propDecorators = {
    eventsForm: [{ type: Output }],
    setFieldsConfig: [{ type: Input }]
};
const options = new AngularEasyFormComponent(new Config(new Fields()));

class InputComponent {
    constructor(fb) {
        this.fb = fb;
        this.eventInput = new EventEmitter();
    }
    ngOnInit() {
        this.initiFb();
        this.getFormChanges();
    }
    initiFb() {
        const setControlName = {};
        setControlName[this.configInput.alias.toString()] = [{ value: this.configInput.value || '',
                disabled: this.configInput.disable || false }];
        this.inputForm = this.fb.group(setControlName);
        this.eventInput.emit(this.inputForm);
    }
    getFormChanges() {
        this.inputForm.valueChanges.subscribe(() => {
            this.eventInput.emit(this.inputForm);
        });
    }
    eventValue(event) {
        this.eventInput.emit({ alias: this.configInput.alias, type: 'searchForm', value: event });
    }
}
InputComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-input',
                template: "<mat-form-field \n*ngIf=\"configInput.type !== 'textarea' &&\n configInput.type !== 'select' &&\n configInput.type !== 'checkbox' && \n configInput.type !== 'searchInput'\"\n \n [style]=\"configInput.style\"  [formGroup]=\"inputForm\">\n  <mat-label>{{configInput.label}}</mat-label>\n  <input [type]=\"configInput.type\"\n   matInput [placeholder]='configInput?.placeholder || \"\" '\n   [value]='configInput?.value || \"\" '\n   [minlength]='configInput?.miniLength || \"\" '\n   [maxlength]='configInput?.maxLength || \"\" '\n   [pattern] = 'configInput?.pattern || \"\" '\n   [required]= 'configInput?.required || false '\n   [formControlName]='configInput?.alias || \"\" ' >\n</mat-form-field>\n\n<mat-form-field *ngIf=\"configInput.type === 'textarea'\" [style]=\"configInput?.style\"   [formGroup]=\"inputForm\">\n  <mat-label>{{configInput.label}}</mat-label>\n  <textarea matInput  [value]='configInput.value || \"\" '\n    [required]= 'configInput?.required || false'\n    [formControlName]='configInput?.alias || \"\" '\n    [pattern] = 'configInput?.pattern || \"\" '\n    [minlength]='configInput?.miniLength || \"\" '\n    [maxlength]='configInput?.maxLength || \"\" '\n    resizetofitcontent\n    cdkTextareaAutosize\n  ></textarea>\n</mat-form-field>\n\n<mat-form-field *ngIf=\"configInput.type === 'select'\"  [style]='configInput?.style || \"\" '  [formGroup]=\"inputForm\">\n  <mat-label>{{configInput.label}}</mat-label>\n  <select matNativeControl [required]='configInput?.required || false '  [formControlName]='configInput?.alias || \"\" '>\n    <option *ngIf='configInput.startEmpty || false' value=\"\">   ----- </option>\n    <option *ngFor=\"let option of configInput.setOptions\" [value]=\"option.id\"> {{option.value}}</option>\n  </select>\n</mat-form-field>\n\n<div class=\"check-default\" [style]='configInput?.style || \"\" ' *ngIf=\"configInput.type === 'checkbox'\" [formGroup]=\"inputForm\">\n  <input type=\"checkbox\"  [checked]='configInput?.checked || false ' [formControlName]='configInput?.alias || \"\" '>\n  <label  class=\"check-label\" for=\"scales\">{{configInput.label}}</label>\n</div>\n\n<div class=\"check-form\" *ngIf=\"configInput.type === 'searchInput'\"  [style]=\"configInput?.style\">\n  <app-inputsearch\n  [label]='configInput?.label || \" \" '\n  [validate]='configInput.validated || false '\n  [preSelected]='configInput?.valuePreselected || \"\" '\n  [preSelectedComparer]=''\n  [allData]='configInput?.dataOptions || \"\" '\n  [itemValue]='configInput?.valueData || \"\" '\n  [itemResult]='configInput?.showedData || \"\" '\n  (sendValue)=\"eventValue($event)\">\n </app-inputsearch>\n</div>\n\n\n",
                styles: [".check-default{align-items:baseline;display:flex;margin:18px 0 0}.check-label{margin-left:4%}.mat-form-field{width:100%}"]
            },] }
];
InputComponent.ctorParameters = () => [
    { type: FormBuilder }
];
InputComponent.propDecorators = {
    configInput: [{ type: Input }],
    eventInput: [{ type: Output }]
};

class GroupFieldsComponent {
    constructor() {
        this.eventGroupInput = new EventEmitter();
        this.fieldsGroup = {};
    }
    ngOnInit() {
    }
    eventFields(event) {
        if (event.type === 'searchForm') {
            this.fieldsGroup[event.alias] = { value: event.value, isValid: event.valid };
            this.eventGroupInput.emit(this.fieldsGroup);
        }
        else {
            this.fieldsGroup[Object.keys(event.value)[0] || Object.keys(event)[0]] = [event.value, event.valid, event];
            this.eventGroupInput.emit(this.fieldsGroup);
        }
    }
}
GroupFieldsComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-group-fields',
                template: "<div class=\"horizontal-group\" *ngIf=\"configGroup && configGroup.length > 0\">\n    <lib-input class=\"input-dyn\" *ngFor=\"let field of configGroup\" [configInput]='field' (eventInput)=\"eventFields($event)\"></lib-input>\n</div>\n\n\n",
                styles: [".horizontal-group{display:flex;flex-direction:column;flex-direction:row}.input-dyn{margin-left:1%;width:100%}"]
            },] }
];
GroupFieldsComponent.ctorParameters = () => [];
GroupFieldsComponent.propDecorators = {
    configGroup: [{ type: Input }],
    eventGroupInput: [{ type: Output }]
};

class InputsearchComponent {
    constructor() {
        this.allData = [];
        this.preSelected = '';
        this.sendValue = new EventEmitter();
        this.sendKeyEvent = new EventEmitter();
        this.focusField = false;
        this.myControl = new FormControl();
        this.allComplete = [];
        this.callNumber = 0;
        this.callOne = 0;
    }
    ngOnInit() {
        this.allComplete = this.allData || [];
        this.allComplete.map((res) => {
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
    ngOnChanges(changes) {
        this.allComplete = changes.allData.currentValue;
    }
    onKey(event) {
        this.sendKeyEvent.emit({ eventSent: event, field: this.myControl });
    }
    filter(value) {
        const filterValue = typeof value === 'string' ? value.toLowerCase() : value;
        const newResult = [];
        this.allData.map((option) => {
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
        }
        else {
            if (this.label === 'Delivery Address' && this.callOne === 0) {
                this.selected(this.valuSelectedInit, this.label);
                this.callOne = 1;
            }
        }
        this.allComplete = newResult;
    }
    eventClick($event, trigger) {
        this.globalTrigger = trigger;
        trigger.openPanel();
    }
    selected(id, label) {
        if (!id) {
            return;
        }
        this.sendValue.emit({ id: id, name: this.label });
    }
}
InputsearchComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'app-inputsearch',
                template: "<div class='group-input'>\n    <label *ngIf=\"label\" >{{label}}</label>\n    <mat-form-field  class=\"form-group\" [style.background-color]=\"myControl.status === 'INVALID'  && validate ? 'rgb(232, 154, 154)' : ''\">\n            <input class=\"multipleSelect\" type=\"text\" [matAutocomplete]=\"auto\" required\n            (keyup)=\"onKey($event)\"\n            aria-label=\"Number\"\n            matInput\n            #trigger=\"matAutocompleteTrigger\"\n            (click)='eventClick($event,trigger)'\n                   [formControl]=\"myControl\"\n                   [matAutocomplete]=\"auto\">\n            <mat-autocomplete #auto=\"matAutocomplete\"  showPanel=\"true\" #selectInp\n            >\n              <mat-option  *ngFor=\"let item of allComplete\" style=\"display: block\" (click)='selected(item[itemValue], label); $event.stopPropagation()' [value]=\"item[itemResult]\">\n                {{item[itemResult]}}\n              </mat-option>\n            </mat-autocomplete>\n      </mat-form-field>\n</div>\n",
                encapsulation: ViewEncapsulation.ShadowDom,
                styles: [".border-input{border:1px solid grey!important}.group-input{display:flex;flex-direction:column}label{margin-bottom:8px}.mat-form-field-appearance-legacy .mat-form-field-underline{height:0!important}.mat-input-element{padding-left:0}.mat-form-field-appearance-legacy .mat-form-field-infix{border:1px solid #dcdcdc;border-radius:4px 5px;margin-top:0;padding:8px 0 8px 9px}"]
            },] }
];
InputsearchComponent.ctorParameters = () => [];
InputsearchComponent.propDecorators = {
    nameField: [{ type: ViewChild, args: ['selectInp',] }],
    autoTrigger: [{ type: ViewChild, args: [MatAutocompleteTrigger, { static: true },] }],
    allData: [{ type: Input }],
    searchDefault: [{ type: Input }],
    preSelected: [{ type: Input }],
    preSelectedComparer: [{ type: Input }],
    label: [{ type: Input }],
    itemValue: [{ type: Input }],
    itemResult: [{ type: Input }],
    sendValue: [{ type: Output }],
    sendKeyEvent: [{ type: Output }],
    validate: [{ type: Input }],
    readOnly: [{ type: Input }]
};

class AngularEasyFormModule {
}
AngularEasyFormModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    AngularEasyFormComponent,
                    InputComponent,
                    GroupFieldsComponent,
                    InputsearchComponent
                ],
                imports: [
                    CommonModule,
                    BrowserModule,
                    BrowserAnimationsModule,
                    MatInputModule,
                    TextFieldModule,
                    ReactiveFormsModule,
                    MatFormFieldModule,
                    MatAutocompleteModule,
                    MatSelectModule,
                    MatFormFieldModule
                ],
                exports: [AngularEasyFormComponent]
            },] }
];

/*
 * Public API Surface of angular-easy-form
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AngularEasyFormComponent, AngularEasyFormModule, options, Config as ɵa, Fields as ɵb, InputComponent as ɵc, GroupFieldsComponent as ɵd, InputsearchComponent as ɵe };
//# sourceMappingURL=angular-easy-form.js.map
