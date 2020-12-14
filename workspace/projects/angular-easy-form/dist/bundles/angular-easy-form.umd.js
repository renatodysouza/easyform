(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/material/input'), require('@angular/common'), require('@angular/platform-browser'), require('@angular/material/form-field'), require('@angular/platform-browser/animations'), require('@angular/cdk/text-field'), require('@angular/material/autocomplete'), require('@angular/material/select')) :
    typeof define === 'function' && define.amd ? define('angular-easy-form', ['exports', '@angular/core', '@angular/forms', '@angular/material/input', '@angular/common', '@angular/platform-browser', '@angular/material/form-field', '@angular/platform-browser/animations', '@angular/cdk/text-field', '@angular/material/autocomplete', '@angular/material/select'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['angular-easy-form'] = {}, global.ng.core, global.ng.forms, global.ng.material.input, global.ng.common, global.ng.platformBrowser, global.ng.material.formField, global.ng.platformBrowser.animations, global.ng.cdk.textField, global.ng.material.autocomplete, global.ng.material.select));
}(this, (function (exports, core, forms, input, common, platformBrowser, formField, animations, textField, autocomplete, select) { 'use strict';

    var AngularEasyFormComponent = /** @class */ (function () {
        function AngularEasyFormComponent() {
            this.eventsForm = new core.EventEmitter();
            this.allFields = {};
            this.valueEvent = {};
            this.otherEvents = {};
        }
        AngularEasyFormComponent.prototype.ngOnInit = function () {
        };
        AngularEasyFormComponent.prototype.ngOnChanges = function (changes) {
            // this.easyFormService.setConfig(changes.masterConfig.currentValue());
        };
        AngularEasyFormComponent.prototype.eventGroupFields = function (event) {
            if (!event) {
                return;
            }
            this.allFields = Object.assign(this.allFields, event);
            this.valueEvent = {
                otherEvents: this.allFields,
                values: Object.assign(this.otherEvents, event[Object.keys(event)[0].toString()][0])
            };
            this.eventsForm.emit(this.valueEvent);
        };
        return AngularEasyFormComponent;
    }());
    AngularEasyFormComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'lib-angular-easy-form',
                    template: "<lib-group-fields *ngFor=\"let horizontalFields of masterConfig.fields\"\r\n [style]='masterConfig.style' \r\n [configGroup]='horizontalFields'\r\n (eventGroupInput) ='eventGroupFields($event)'\r\n ></lib-group-fields>\r\n",
                    styles: ['./angular-easy-form.component.css']
                },] }
    ];
    AngularEasyFormComponent.ctorParameters = function () { return []; };
    AngularEasyFormComponent.propDecorators = {
        masterConfig: [{ type: core.Input }],
        eventsForm: [{ type: core.Output }]
    };

    var InputComponent = /** @class */ (function () {
        function InputComponent(fb) {
            this.fb = fb;
            this.eventInput = new core.EventEmitter();
        }
        InputComponent.prototype.ngOnInit = function () {
            this.initiFb();
            this.getFormChanges();
        };
        InputComponent.prototype.initiFb = function () {
            var setControlName = {};
            setControlName[this.configInput.alias.toString()] = [this.configInput.value || ''];
            this.inputForm = this.fb.group(setControlName);
            this.eventInput.emit(this.inputForm);
        };
        InputComponent.prototype.getFormChanges = function () {
            var _this = this;
            this.inputForm.valueChanges.subscribe(function () {
                _this.eventInput.emit(_this.inputForm);
            });
        };
        InputComponent.prototype.eventValue = function (event) {
            this.eventInput.emit({ alias: this.configInput.alias, type: 'searchForm', value: event });
        };
        return InputComponent;
    }());
    InputComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'lib-input',
                    template: "<mat-form-field \n*ngIf=\"configInput.type !== 'textarea' &&\n configInput.type !== 'select' &&\n configInput.type !== 'checkbox' && \n configInput.type !== 'searchInput'\"\n \n [style]=\"configInput.style\"  [formGroup]=\"inputForm\">\n  <mat-label>{{configInput.label}}</mat-label>\n  <input [type]=\"configInput.type\"\n   matInput [placeholder]=\"configInput.placeholder\"\n   [value]=\"configInput.value\" \n   [minlength]='configInput.miniLength'\n   [maxlength]='configInput.maxLength'\n   [pattern] = 'configInput.pattern'\n   [disabled]='configInput.disable'\n   [required]= 'configInput.required'\n   [formControlName]=\"configInput.alias\" >\n</mat-form-field>\n\n<mat-form-field *ngIf=\"configInput.type === 'textarea'\" [style]=\"configInput.style\"   [formGroup]=\"inputForm\">\n  <mat-label>{{configInput.label}}</mat-label>\n  <textarea matInput  [value]=\"configInput.value\" \n    [disabled]='configInput.disable'\n    [required]= 'configInput.required'\n    [formControlName]=\"configInput.alias\"\n    [pattern] = 'configInput.pattern'\n    [minlength]='configInput.miniLength'\n    [maxlength]='configInput.maxLength'\n    [disabled]='configInput.disable'\n    resizetofitcontent\n    cdkTextareaAutosize\n  ></textarea>\n</mat-form-field>\n\n<mat-form-field *ngIf=\"configInput.type === 'select'\"  [style]=\"configInput.style\"  [formGroup]=\"inputForm\">\n  <mat-label>{{configInput.label}}</mat-label>\n  <select matNativeControl [required]='configInput.required'  [formControlName]=\"configInput.alias\">\n    <option *ngIf=\"configInput.startEmpty\" value=\"\">   ----- </option>\n    <option *ngFor=\"let option of configInput.setOptions\" [value]=\"option.id\"> {{option.value}}</option>\n  </select>\n</mat-form-field>\n\n<div class=\"check-default\" [style]=\"configInput.style\" *ngIf=\"configInput.type === 'checkbox'\" [formGroup]=\"inputForm\">\n  <input type=\"checkbox\"  [checked]=\"configInput.checked\"  [disabled]='configInput.disable'  [formControlName]=\"configInput.alias\">\n  <label  class=\"check-label\" for=\"scales\">{{configInput.label}}</label>\n</div>\n\n<div class=\"check-form\" *ngIf=\"configInput.type === 'searchInput'\"  [style]=\"configInput.style\">\n  <app-inputsearch\n  [label]='configInput.label'\n  [validate]='configInput.validated'\n  [preSelected]='configInput.valuePreselected'\n  [preSelectedComparer]=''\n  [allData]='configInput.dataOptions'\n  [itemValue]='configInput.valueData'\n  [itemResult]='configInput.showedData'\n  (sendValue)=\"eventValue($event)\">\n </app-inputsearch>\n</div>\n\n\n",
                    styles: [".check-default{align-items:baseline;display:flex;margin:18px 0 0}.check-label{margin-left:10%}.mat-form-field{width:100%}"]
                },] }
    ];
    InputComponent.ctorParameters = function () { return [
        { type: forms.FormBuilder }
    ]; };
    InputComponent.propDecorators = {
        configInput: [{ type: core.Input }],
        eventInput: [{ type: core.Output }]
    };

    var GroupFieldsComponent = /** @class */ (function () {
        function GroupFieldsComponent() {
            this.eventGroupInput = new core.EventEmitter();
            this.fieldsGroup = {};
        }
        GroupFieldsComponent.prototype.ngOnInit = function () {
        };
        GroupFieldsComponent.prototype.eventFields = function (event) {
            if (event.type === 'searchForm') {
                this.fieldsGroup[event.alias] = { value: event.value, isValid: event.valid };
                this.eventGroupInput.emit(this.fieldsGroup);
            }
            else {
                this.fieldsGroup[Object.keys(event.value)[0] || Object.keys(event)[0]] = [event.value, event.valid, event];
                this.eventGroupInput.emit(this.fieldsGroup);
            }
        };
        return GroupFieldsComponent;
    }());
    GroupFieldsComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'lib-group-fields',
                    template: "<div class=\"horizontal-group\">\n    <lib-input class=\"input-dyn\" *ngFor=\"let field of configGroup\" [configInput]='field' (eventInput)=\"eventFields($event)\"></lib-input>\n</div>\n\n\n",
                    styles: [".horizontal-group{display:flex;flex-direction:column;flex-direction:row}.input-dyn{margin-left:1%;width:100%}"]
                },] }
    ];
    GroupFieldsComponent.ctorParameters = function () { return []; };
    GroupFieldsComponent.propDecorators = {
        configGroup: [{ type: core.Input }],
        eventGroupInput: [{ type: core.Output }]
    };

    var InputsearchComponent = /** @class */ (function () {
        function InputsearchComponent() {
            this.allData = [];
            this.preSelected = '';
            this.sendValue = new core.EventEmitter();
            this.sendKeyEvent = new core.EventEmitter();
            this.focusField = false;
            this.myControl = new forms.FormControl();
            this.allComplete = [];
            this.callNumber = 0;
            this.callOne = 0;
        }
        InputsearchComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.allComplete = this.allData || [];
            this.allComplete.map(function (res) {
                var str = res[_this.itemResult].toLowerCase();
                if (res[_this.preSelectedComparer] === _this.preSelected) {
                    _this.myControl.setValue(str.toUpperCase());
                    _this.filter(_this.preSelected);
                    return;
                }
            });
            this.myControl.valueChanges.subscribe(function (value) {
                if (_this.globalTrigger) {
                    _this.globalTrigger.openPanel();
                }
                if (value === '') {
                    _this.sendValue.emit({ id: '', name: _this.label });
                }
                if (value === '' && _this.callNumber === 0) {
                    _this.allComplete = _this.allData;
                    _this.callNumber = 1;
                }
                _this.filter(value);
            });
        };
        InputsearchComponent.prototype.ngOnChanges = function (changes) {
            this.allComplete = changes.allData.currentValue;
        };
        InputsearchComponent.prototype.onKey = function (event) {
            this.sendKeyEvent.emit({ eventSent: event, field: this.myControl });
        };
        InputsearchComponent.prototype.filter = function (value) {
            var _this = this;
            var filterValue = typeof value === 'string' ? value.toLowerCase() : value;
            var newResult = [];
            this.allData.map(function (option) {
                var result = typeof option[_this.itemResult] === 'string' ?
                    option[_this.itemResult].toLowerCase() : option[_this.itemResult];
                if (result.includes(filterValue)) {
                    _this.valuSelectedInit = option.id;
                    newResult.push(option);
                }
            });
            if (newResult.length > 1 && this.callNumber === 0) {
                setTimeout(function () {
                    _this.autoTrigger.openPanel();
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
        };
        InputsearchComponent.prototype.eventClick = function ($event, trigger) {
            this.globalTrigger = trigger;
            trigger.openPanel();
        };
        InputsearchComponent.prototype.selected = function (id, label) {
            if (!id) {
                return;
            }
            this.sendValue.emit({ id: id, name: this.label });
        };
        return InputsearchComponent;
    }());
    InputsearchComponent.decorators = [
        { type: core.Component, args: [{
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    selector: 'app-inputsearch',
                    template: "<div class='group-input'>\n    <label *ngIf=\"label\" >{{label}}</label>\n    <mat-form-field  class=\"form-group\" [style.background-color]=\"myControl.status === 'INVALID'  && validate ? 'rgb(232, 154, 154)' : ''\">\n            <input class=\"multipleSelect\" type=\"text\" [matAutocomplete]=\"auto\" required\n            (keyup)=\"onKey($event)\"\n            aria-label=\"Number\"\n            matInput\n            #trigger=\"matAutocompleteTrigger\"\n            (click)='eventClick($event,trigger)'\n                   [formControl]=\"myControl\"\n                   [matAutocomplete]=\"auto\">\n            <mat-autocomplete #auto=\"matAutocomplete\"  showPanel=\"true\" #selectInp\n            >\n              <mat-option  *ngFor=\"let item of allComplete\" style=\"display: block\" (click)='selected(item[itemValue], label); $event.stopPropagation()' [value]=\"item[itemResult]\">\n                {{item[itemResult]}}\n              </mat-option>\n            </mat-autocomplete>\n      </mat-form-field>\n</div>\n",
                    encapsulation: core.ViewEncapsulation.ShadowDom,
                    styles: [".border-input{border:1px solid grey!important}.group-input{display:flex;flex-direction:column}label{margin-bottom:8px}.mat-form-field-appearance-legacy .mat-form-field-underline{height:0!important}.mat-input-element{padding-left:0}.mat-form-field-appearance-legacy .mat-form-field-infix{border:1px solid #dcdcdc;border-radius:4px 5px;margin-top:0;padding:8px 0 8px 9px}"]
                },] }
    ];
    InputsearchComponent.ctorParameters = function () { return []; };
    InputsearchComponent.propDecorators = {
        nameField: [{ type: core.ViewChild, args: ['selectInp',] }],
        autoTrigger: [{ type: core.ViewChild, args: [autocomplete.MatAutocompleteTrigger, { static: true },] }],
        allData: [{ type: core.Input }],
        searchDefault: [{ type: core.Input }],
        preSelected: [{ type: core.Input }],
        preSelectedComparer: [{ type: core.Input }],
        label: [{ type: core.Input }],
        itemValue: [{ type: core.Input }],
        itemResult: [{ type: core.Input }],
        sendValue: [{ type: core.Output }],
        sendKeyEvent: [{ type: core.Output }],
        validate: [{ type: core.Input }],
        readOnly: [{ type: core.Input }]
    };

    var AngularEasyFormModule = /** @class */ (function () {
        function AngularEasyFormModule() {
        }
        return AngularEasyFormModule;
    }());
    AngularEasyFormModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [
                        AngularEasyFormComponent,
                        InputComponent,
                        GroupFieldsComponent,
                        InputsearchComponent
                    ],
                    imports: [
                        common.CommonModule,
                        platformBrowser.BrowserModule,
                        animations.BrowserAnimationsModule,
                        input.MatInputModule,
                        textField.TextFieldModule,
                        forms.ReactiveFormsModule,
                        formField.MatFormFieldModule,
                        autocomplete.MatAutocompleteModule,
                        select.MatSelectModule,
                        formField.MatFormFieldModule
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

    exports.AngularEasyFormComponent = AngularEasyFormComponent;
    exports.AngularEasyFormModule = AngularEasyFormModule;
    exports.ɵa = InputComponent;
    exports.ɵb = GroupFieldsComponent;
    exports.ɵc = InputsearchComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-easy-form.umd.js.map
