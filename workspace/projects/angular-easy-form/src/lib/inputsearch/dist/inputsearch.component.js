"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InputsearchComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var autocomplete_1 = require("@angular/material/autocomplete");
var InputsearchComponent = /** @class */ (function () {
    function InputsearchComponent() {
        this.allData = [];
        this.preSelected = '';
        this.sendValue = new core_1.EventEmitter();
        this.sendKeyEvent = new core_1.EventEmitter();
        this.focusField = false;
        this.myControl = new forms_1.FormControl();
        this.allComplete = [];
        this.callNumber = 0;
        this.callOne = 0;
    }
    InputsearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allComplete = this.allData || [];
        var patter = new RegExp(this.preSelected + '$', 'i');
        this.allComplete.map(function (res) {
            var str = res[_this.itemResult].toLowerCase();
            if (str.match(patter) || res[_this.preSelectedComparer] === _this.preSelected) {
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
    __decorate([
        core_1.ViewChild('selectInp')
    ], InputsearchComponent.prototype, "nameField");
    __decorate([
        core_1.ViewChild(autocomplete_1.MatAutocompleteTrigger, { static: true })
    ], InputsearchComponent.prototype, "autoTrigger");
    __decorate([
        core_1.Input()
    ], InputsearchComponent.prototype, "allData");
    __decorate([
        core_1.Input()
    ], InputsearchComponent.prototype, "searchDefault");
    __decorate([
        core_1.Input()
    ], InputsearchComponent.prototype, "preSelected");
    __decorate([
        core_1.Input()
    ], InputsearchComponent.prototype, "preSelectedComparer");
    __decorate([
        core_1.Input()
    ], InputsearchComponent.prototype, "label");
    __decorate([
        core_1.Input()
    ], InputsearchComponent.prototype, "itemValue");
    __decorate([
        core_1.Input()
    ], InputsearchComponent.prototype, "itemResult");
    __decorate([
        core_1.Output()
    ], InputsearchComponent.prototype, "sendValue");
    __decorate([
        core_1.Output()
    ], InputsearchComponent.prototype, "sendKeyEvent");
    __decorate([
        core_1.Input()
    ], InputsearchComponent.prototype, "validate");
    __decorate([
        core_1.Input()
    ], InputsearchComponent.prototype, "readOnly");
    InputsearchComponent = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'app-inputsearch',
            templateUrl: './inputsearch.component.html',
            styleUrls: ['./inputsearch.component.scss'],
            encapsulation: core_1.ViewEncapsulation.ShadowDom
        })
    ], InputsearchComponent);
    return InputsearchComponent;
}());
exports.InputsearchComponent = InputsearchComponent;
