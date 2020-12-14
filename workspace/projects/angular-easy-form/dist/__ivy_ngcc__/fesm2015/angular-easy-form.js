import { EventEmitter, Component, Input, Output, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, NgModule } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatAutocompleteTrigger, MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@angular/forms';
import * as ɵngcc3 from '@angular/material/form-field';
import * as ɵngcc4 from '@angular/material/input';
import * as ɵngcc5 from '@angular/cdk/text-field';
import * as ɵngcc6 from '@angular/material/autocomplete';
import * as ɵngcc7 from '@angular/material/core';

function AngularEasyFormComponent_lib_group_fields_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "lib-group-fields", 1);
    ɵngcc0.ɵɵlistener("eventGroupInput", function AngularEasyFormComponent_lib_group_fields_0_Template_lib_group_fields_eventGroupInput_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.eventGroupFields($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const horizontalFields_r1 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleMap(ctx_r0.masterConfig.style);
    ɵngcc0.ɵɵproperty("configGroup", horizontalFields_r1);
} }
function InputComponent_mat_form_field_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-form-field", 3);
    ɵngcc0.ɵɵelementStart(1, "mat-label");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(3, "input", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleMap(ctx_r0.configInput.style);
    ɵngcc0.ɵɵproperty("formGroup", ctx_r0.inputForm);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.configInput.label);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("type", ctx_r0.configInput.type)("placeholder", ctx_r0.configInput.placeholder)("value", ctx_r0.configInput.value)("minlength", ctx_r0.configInput.miniLength)("maxlength", ctx_r0.configInput.maxLength)("pattern", ctx_r0.configInput.pattern)("disabled", ctx_r0.configInput.disable)("required", ctx_r0.configInput.required)("formControlName", ctx_r0.configInput.alias);
} }
function InputComponent_mat_form_field_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-form-field", 3);
    ɵngcc0.ɵɵelementStart(1, "mat-label");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(3, "textarea", 5);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleMap(ctx_r1.configInput.style);
    ɵngcc0.ɵɵproperty("formGroup", ctx_r1.inputForm);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.configInput.label);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("value", ctx_r1.configInput.value)("disabled", ctx_r1.configInput.disable)("required", ctx_r1.configInput.required)("formControlName", ctx_r1.configInput.alias)("pattern", ctx_r1.configInput.pattern)("minlength", ctx_r1.configInput.miniLength)("maxlength", ctx_r1.configInput.maxLength)("disabled", ctx_r1.configInput.disable);
} }
function InputComponent_mat_form_field_2_option_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "option", 9);
    ɵngcc0.ɵɵtext(1, " ----- ");
    ɵngcc0.ɵɵelementEnd();
} }
function InputComponent_mat_form_field_2_option_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "option", 10);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r7 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("value", option_r7.id);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", option_r7.value, "");
} }
function InputComponent_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-form-field", 3);
    ɵngcc0.ɵɵelementStart(1, "mat-label");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "select", 6);
    ɵngcc0.ɵɵtemplate(4, InputComponent_mat_form_field_2_option_4_Template, 2, 0, "option", 7);
    ɵngcc0.ɵɵtemplate(5, InputComponent_mat_form_field_2_option_5_Template, 2, 2, "option", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleMap(ctx_r2.configInput.style);
    ɵngcc0.ɵɵproperty("formGroup", ctx_r2.inputForm);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.configInput.label);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("required", ctx_r2.configInput.required)("formControlName", ctx_r2.configInput.alias);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.configInput.startEmpty);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r2.configInput.setOptions);
} }
function InputComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 11);
    ɵngcc0.ɵɵelement(1, "input", 12);
    ɵngcc0.ɵɵelementStart(2, "label", 13);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleMap(ctx_r3.configInput.style);
    ɵngcc0.ɵɵproperty("formGroup", ctx_r3.inputForm);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("checked", ctx_r3.configInput.checked)("disabled", ctx_r3.configInput.disable)("formControlName", ctx_r3.configInput.alias);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.configInput.label);
} }
function InputComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 14);
    ɵngcc0.ɵɵelementStart(1, "app-inputsearch", 15);
    ɵngcc0.ɵɵlistener("sendValue", function InputComponent_div_4_Template_app_inputsearch_sendValue_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.eventValue($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleMap(ctx_r4.configInput.style);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("label", ctx_r4.configInput.label)("validate", ctx_r4.configInput.validated)("preSelected", ctx_r4.configInput.valuePreselected)("allData", ctx_r4.configInput.dataOptions)("itemValue", ctx_r4.configInput.valueData)("itemResult", ctx_r4.configInput.showedData);
} }
function GroupFieldsComponent_lib_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "lib-input", 2);
    ɵngcc0.ɵɵlistener("eventInput", function GroupFieldsComponent_lib_input_1_Template_lib_input_eventInput_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.eventFields($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r1 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("configInput", field_r1);
} }
const _c0 = ["selectInp"];
function InputsearchComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "label");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.label);
} }
function InputsearchComponent_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mat-option", 8);
    ɵngcc0.ɵɵlistener("click", function InputsearchComponent_mat_option_8_Template_mat_option_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r7); const item_r5 = ctx.$implicit; const ctx_r6 = ɵngcc0.ɵɵnextContext(); ctx_r6.selected(item_r5[ctx_r6.itemValue], ctx_r6.label); return $event.stopPropagation(); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("value", item_r5[ctx_r4.itemResult]);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", item_r5[ctx_r4.itemResult], " ");
} }
class AngularEasyFormComponent {
    constructor() {
        this.eventsForm = new EventEmitter();
        this.allFields = {};
        this.valueEvent = {};
        this.otherEvents = {};
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        // this.easyFormService.setConfig(changes.masterConfig.currentValue());
    }
    eventGroupFields(event) {
        if (!event) {
            return;
        }
        this.allFields = Object.assign(this.allFields, event);
        this.valueEvent = {
            otherEvents: this.allFields,
            values: Object.assign(this.otherEvents, event[Object.keys(event)[0].toString()][0])
        };
        this.eventsForm.emit(this.valueEvent);
    }
}
AngularEasyFormComponent.ɵfac = function AngularEasyFormComponent_Factory(t) { return new (t || AngularEasyFormComponent)(); };
AngularEasyFormComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AngularEasyFormComponent, selectors: [["lib-angular-easy-form"]], inputs: { masterConfig: "masterConfig" }, outputs: { eventsForm: "eventsForm" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [[3, "style", "configGroup", "eventGroupInput", 4, "ngFor", "ngForOf"], [3, "configGroup", "eventGroupInput"]], template: function AngularEasyFormComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, AngularEasyFormComponent_lib_group_fields_0_Template, 1, 3, "lib-group-fields", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngForOf", ctx.masterConfig.fields);
    } }, directives: function () { return [ɵngcc1.NgForOf, GroupFieldsComponent]; }, styles: ["./angular-easy-form.component.css"] });
AngularEasyFormComponent.ctorParameters = () => [];
AngularEasyFormComponent.propDecorators = {
    masterConfig: [{ type: Input }],
    eventsForm: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AngularEasyFormComponent, [{
        type: Component,
        args: [{
                selector: 'lib-angular-easy-form',
                template: "<lib-group-fields *ngFor=\"let horizontalFields of masterConfig.fields\"\r\n [style]='masterConfig.style' \r\n [configGroup]='horizontalFields'\r\n (eventGroupInput) ='eventGroupFields($event)'\r\n ></lib-group-fields>\r\n",
                styles: ['./angular-easy-form.component.css']
            }]
    }], function () { return []; }, { eventsForm: [{
            type: Output
        }], masterConfig: [{
            type: Input
        }] }); })();

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
        setControlName[this.configInput.alias.toString()] = [this.configInput.value || ''];
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
InputComponent.ɵfac = function InputComponent_Factory(t) { return new (t || InputComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc2.FormBuilder)); };
InputComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: InputComponent, selectors: [["lib-input"]], inputs: { configInput: "configInput" }, outputs: { eventInput: "eventInput" }, decls: 5, vars: 5, consts: [[3, "style", "formGroup", 4, "ngIf"], ["class", "check-default", 3, "style", "formGroup", 4, "ngIf"], ["class", "check-form", 3, "style", 4, "ngIf"], [3, "formGroup"], ["matInput", "", 3, "type", "placeholder", "value", "minlength", "maxlength", "pattern", "disabled", "required", "formControlName"], ["matInput", "", "resizetofitcontent", "", "cdkTextareaAutosize", "", 3, "value", "disabled", "required", "formControlName", "pattern", "minlength", "maxlength"], ["matNativeControl", "", 3, "required", "formControlName"], ["value", "", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], ["value", ""], [3, "value"], [1, "check-default", 3, "formGroup"], ["type", "checkbox", 3, "checked", "disabled", "formControlName"], ["for", "scales", 1, "check-label"], [1, "check-form"], [3, "label", "validate", "preSelected", "preSelectedComparer", "allData", "itemValue", "itemResult", "sendValue"]], template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, InputComponent_mat_form_field_0_Template, 4, 13, "mat-form-field", 0);
        ɵngcc0.ɵɵtemplate(1, InputComponent_mat_form_field_1_Template, 4, 12, "mat-form-field", 0);
        ɵngcc0.ɵɵtemplate(2, InputComponent_mat_form_field_2_Template, 6, 8, "mat-form-field", 0);
        ɵngcc0.ɵɵtemplate(3, InputComponent_div_3_Template, 4, 7, "div", 1);
        ɵngcc0.ɵɵtemplate(4, InputComponent_div_4_Template, 2, 8, "div", 2);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.configInput.type !== "textarea" && ctx.configInput.type !== "select" && ctx.configInput.type !== "checkbox" && ctx.configInput.type !== "searchInput");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.configInput.type === "textarea");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.configInput.type === "select");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.configInput.type === "checkbox");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.configInput.type === "searchInput");
    } }, directives: function () { return [ɵngcc1.NgIf, ɵngcc3.MatFormField, ɵngcc2.NgControlStatusGroup, ɵngcc2.FormGroupDirective, ɵngcc3.MatLabel, ɵngcc4.MatInput, ɵngcc2.DefaultValueAccessor, ɵngcc2.MinLengthValidator, ɵngcc2.MaxLengthValidator, ɵngcc2.PatternValidator, ɵngcc2.RequiredValidator, ɵngcc2.NgControlStatus, ɵngcc2.FormControlName, ɵngcc5.CdkTextareaAutosize, ɵngcc2.SelectControlValueAccessor, ɵngcc1.NgForOf, ɵngcc2.NgSelectOption, ɵngcc2.ɵangular_packages_forms_forms_x, ɵngcc2.CheckboxControlValueAccessor, InputsearchComponent]; }, styles: [".check-default[_ngcontent-%COMP%]{align-items:baseline;display:flex;margin:18px 0 0}.check-label[_ngcontent-%COMP%]{margin-left:10%}.mat-form-field[_ngcontent-%COMP%]{width:100%}"] });
InputComponent.ctorParameters = () => [
    { type: FormBuilder }
];
InputComponent.propDecorators = {
    configInput: [{ type: Input }],
    eventInput: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InputComponent, [{
        type: Component,
        args: [{
                selector: 'lib-input',
                template: "<mat-form-field \n*ngIf=\"configInput.type !== 'textarea' &&\n configInput.type !== 'select' &&\n configInput.type !== 'checkbox' && \n configInput.type !== 'searchInput'\"\n \n [style]=\"configInput.style\"  [formGroup]=\"inputForm\">\n  <mat-label>{{configInput.label}}</mat-label>\n  <input [type]=\"configInput.type\"\n   matInput [placeholder]=\"configInput.placeholder\"\n   [value]=\"configInput.value\" \n   [minlength]='configInput.miniLength'\n   [maxlength]='configInput.maxLength'\n   [pattern] = 'configInput.pattern'\n   [disabled]='configInput.disable'\n   [required]= 'configInput.required'\n   [formControlName]=\"configInput.alias\" >\n</mat-form-field>\n\n<mat-form-field *ngIf=\"configInput.type === 'textarea'\" [style]=\"configInput.style\"   [formGroup]=\"inputForm\">\n  <mat-label>{{configInput.label}}</mat-label>\n  <textarea matInput  [value]=\"configInput.value\" \n    [disabled]='configInput.disable'\n    [required]= 'configInput.required'\n    [formControlName]=\"configInput.alias\"\n    [pattern] = 'configInput.pattern'\n    [minlength]='configInput.miniLength'\n    [maxlength]='configInput.maxLength'\n    [disabled]='configInput.disable'\n    resizetofitcontent\n    cdkTextareaAutosize\n  ></textarea>\n</mat-form-field>\n\n<mat-form-field *ngIf=\"configInput.type === 'select'\"  [style]=\"configInput.style\"  [formGroup]=\"inputForm\">\n  <mat-label>{{configInput.label}}</mat-label>\n  <select matNativeControl [required]='configInput.required'  [formControlName]=\"configInput.alias\">\n    <option *ngIf=\"configInput.startEmpty\" value=\"\">   ----- </option>\n    <option *ngFor=\"let option of configInput.setOptions\" [value]=\"option.id\"> {{option.value}}</option>\n  </select>\n</mat-form-field>\n\n<div class=\"check-default\" [style]=\"configInput.style\" *ngIf=\"configInput.type === 'checkbox'\" [formGroup]=\"inputForm\">\n  <input type=\"checkbox\"  [checked]=\"configInput.checked\"  [disabled]='configInput.disable'  [formControlName]=\"configInput.alias\">\n  <label  class=\"check-label\" for=\"scales\">{{configInput.label}}</label>\n</div>\n\n<div class=\"check-form\" *ngIf=\"configInput.type === 'searchInput'\"  [style]=\"configInput.style\">\n  <app-inputsearch\n  [label]='configInput.label'\n  [validate]='configInput.validated'\n  [preSelected]='configInput.valuePreselected'\n  [preSelectedComparer]=''\n  [allData]='configInput.dataOptions'\n  [itemValue]='configInput.valueData'\n  [itemResult]='configInput.showedData'\n  (sendValue)=\"eventValue($event)\">\n </app-inputsearch>\n</div>\n\n\n",
                styles: [".check-default{align-items:baseline;display:flex;margin:18px 0 0}.check-label{margin-left:10%}.mat-form-field{width:100%}"]
            }]
    }], function () { return [{ type: ɵngcc2.FormBuilder }]; }, { eventInput: [{
            type: Output
        }], configInput: [{
            type: Input
        }] }); })();

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
GroupFieldsComponent.ɵfac = function GroupFieldsComponent_Factory(t) { return new (t || GroupFieldsComponent)(); };
GroupFieldsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GroupFieldsComponent, selectors: [["lib-group-fields"]], inputs: { configGroup: "configGroup" }, outputs: { eventGroupInput: "eventGroupInput" }, decls: 2, vars: 1, consts: [[1, "horizontal-group"], ["class", "input-dyn", 3, "configInput", "eventInput", 4, "ngFor", "ngForOf"], [1, "input-dyn", 3, "configInput", "eventInput"]], template: function GroupFieldsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, GroupFieldsComponent_lib_input_1_Template, 1, 1, "lib-input", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.configGroup);
    } }, directives: [ɵngcc1.NgForOf, InputComponent], styles: [".horizontal-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-direction:row}.input-dyn[_ngcontent-%COMP%]{margin-left:1%;width:100%}"] });
GroupFieldsComponent.ctorParameters = () => [];
GroupFieldsComponent.propDecorators = {
    configGroup: [{ type: Input }],
    eventGroupInput: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GroupFieldsComponent, [{
        type: Component,
        args: [{
                selector: 'lib-group-fields',
                template: "<div class=\"horizontal-group\">\n    <lib-input class=\"input-dyn\" *ngFor=\"let field of configGroup\" [configInput]='field' (eventInput)=\"eventFields($event)\"></lib-input>\n</div>\n\n\n",
                styles: [".horizontal-group{display:flex;flex-direction:column;flex-direction:row}.input-dyn{margin-left:1%;width:100%}"]
            }]
    }], function () { return []; }, { eventGroupInput: [{
            type: Output
        }], configGroup: [{
            type: Input
        }] }); })();

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
InputsearchComponent.ɵfac = function InputsearchComponent_Factory(t) { return new (t || InputsearchComponent)(); };
InputsearchComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: InputsearchComponent, selectors: [["app-inputsearch"]], viewQuery: function InputsearchComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵstaticViewQuery(MatAutocompleteTrigger, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nameField = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.autoTrigger = _t.first);
    } }, inputs: { allData: "allData", preSelected: "preSelected", searchDefault: "searchDefault", preSelectedComparer: "preSelectedComparer", label: "label", itemValue: "itemValue", itemResult: "itemResult", validate: "validate", readOnly: "readOnly" }, outputs: { sendValue: "sendValue", sendKeyEvent: "sendKeyEvent" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 9, vars: 7, consts: [[1, "group-input"], [4, "ngIf"], [1, "form-group"], ["type", "text", "required", "", "aria-label", "Number", "matInput", "", 1, "multipleSelect", 3, "matAutocomplete", "formControl", "keyup", "click"], ["trigger", "matAutocompleteTrigger"], ["showPanel", "true"], ["auto", "matAutocomplete", "selectInp", ""], ["style", "display: block", 3, "value", "click", 4, "ngFor", "ngForOf"], [2, "display", "block", 3, "value", "click"]], template: function InputsearchComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = ɵngcc0.ɵɵgetCurrentView();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, InputsearchComponent_label_1_Template, 2, 1, "label", 1);
        ɵngcc0.ɵɵelementStart(2, "mat-form-field", 2);
        ɵngcc0.ɵɵelementStart(3, "input", 3, 4);
        ɵngcc0.ɵɵlistener("keyup", function InputsearchComponent_Template_input_keyup_3_listener($event) { return ctx.onKey($event); })("click", function InputsearchComponent_Template_input_click_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const _r1 = ɵngcc0.ɵɵreference(4); return ctx.eventClick($event, _r1); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "mat-autocomplete", 5, 6);
        ɵngcc0.ɵɵtemplate(8, InputsearchComponent_mat_option_8_Template, 2, 2, "mat-option", 7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r2 = ɵngcc0.ɵɵreference(6);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.label);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("background-color", ctx.myControl.status === "INVALID" && ctx.validate ? "rgb(232, 154, 154)" : "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("matAutocomplete", _r2)("formControl", ctx.myControl)("matAutocomplete", _r2);
        ɵngcc0.ɵɵadvance(5);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.allComplete);
    } }, directives: [ɵngcc1.NgIf, ɵngcc3.MatFormField, ɵngcc4.MatInput, ɵngcc6.MatAutocompleteTrigger, ɵngcc2.DefaultValueAccessor, ɵngcc2.RequiredValidator, ɵngcc2.NgControlStatus, ɵngcc2.FormControlDirective, ɵngcc6.MatAutocomplete, ɵngcc1.NgForOf, ɵngcc7.MatOption], styles: [".border-input{border:1px solid grey!important}.group-input{display:flex;flex-direction:column}label{margin-bottom:8px}.mat-form-field-appearance-legacy .mat-form-field-underline{height:0!important}.mat-input-element{padding-left:0}.mat-form-field-appearance-legacy .mat-form-field-infix{border:1px solid #dcdcdc;border-radius:4px 5px;margin-top:0;padding:8px 0 8px 9px}"], encapsulation: 3, changeDetection: 0 });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InputsearchComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'app-inputsearch',
                template: "<div class='group-input'>\n    <label *ngIf=\"label\" >{{label}}</label>\n    <mat-form-field  class=\"form-group\" [style.background-color]=\"myControl.status === 'INVALID'  && validate ? 'rgb(232, 154, 154)' : ''\">\n            <input class=\"multipleSelect\" type=\"text\" [matAutocomplete]=\"auto\" required\n            (keyup)=\"onKey($event)\"\n            aria-label=\"Number\"\n            matInput\n            #trigger=\"matAutocompleteTrigger\"\n            (click)='eventClick($event,trigger)'\n                   [formControl]=\"myControl\"\n                   [matAutocomplete]=\"auto\">\n            <mat-autocomplete #auto=\"matAutocomplete\"  showPanel=\"true\" #selectInp\n            >\n              <mat-option  *ngFor=\"let item of allComplete\" style=\"display: block\" (click)='selected(item[itemValue], label); $event.stopPropagation()' [value]=\"item[itemResult]\">\n                {{item[itemResult]}}\n              </mat-option>\n            </mat-autocomplete>\n      </mat-form-field>\n</div>\n",
                encapsulation: ViewEncapsulation.ShadowDom,
                styles: [".border-input{border:1px solid grey!important}.group-input{display:flex;flex-direction:column}label{margin-bottom:8px}.mat-form-field-appearance-legacy .mat-form-field-underline{height:0!important}.mat-input-element{padding-left:0}.mat-form-field-appearance-legacy .mat-form-field-infix{border:1px solid #dcdcdc;border-radius:4px 5px;margin-top:0;padding:8px 0 8px 9px}"]
            }]
    }], function () { return []; }, { allData: [{
            type: Input
        }], preSelected: [{
            type: Input
        }], sendValue: [{
            type: Output
        }], sendKeyEvent: [{
            type: Output
        }], nameField: [{
            type: ViewChild,
            args: ['selectInp']
        }], autoTrigger: [{
            type: ViewChild,
            args: [MatAutocompleteTrigger, { static: true }]
        }], searchDefault: [{
            type: Input
        }], preSelectedComparer: [{
            type: Input
        }], label: [{
            type: Input
        }], itemValue: [{
            type: Input
        }], itemResult: [{
            type: Input
        }], validate: [{
            type: Input
        }], readOnly: [{
            type: Input
        }] }); })();

class AngularEasyFormModule {
}
AngularEasyFormModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: AngularEasyFormModule });
AngularEasyFormModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function AngularEasyFormModule_Factory(t) { return new (t || AngularEasyFormModule)(); }, imports: [[
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
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(AngularEasyFormModule, { declarations: function () { return [AngularEasyFormComponent, InputComponent, GroupFieldsComponent, InputsearchComponent]; }, imports: function () { return [CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatInputModule,
        TextFieldModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        MatSelectModule,
        MatFormFieldModule]; }, exports: function () { return [AngularEasyFormComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AngularEasyFormModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

/*
 * Public API Surface of angular-easy-form
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AngularEasyFormComponent, AngularEasyFormModule, InputComponent as ɵa, GroupFieldsComponent as ɵb, InputsearchComponent as ɵc };

//# sourceMappingURL=angular-easy-form.js.map