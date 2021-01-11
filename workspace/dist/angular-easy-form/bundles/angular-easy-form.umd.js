(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ngx-translate/http-loader'), require('@angular/forms'), require('moment'), require('@ngx-translate/core'), require('@angular/material/input'), require('@angular/common'), require('@angular/platform-browser'), require('@angular/material/form-field'), require('@angular/platform-browser/animations'), require('@angular/cdk/text-field'), require('@angular/material/autocomplete'), require('@angular/material/select'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('angular-easy-form', ['exports', '@angular/core', '@ngx-translate/http-loader', '@angular/forms', 'moment', '@ngx-translate/core', '@angular/material/input', '@angular/common', '@angular/platform-browser', '@angular/material/form-field', '@angular/platform-browser/animations', '@angular/cdk/text-field', '@angular/material/autocomplete', '@angular/material/select', '@angular/common/http'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['angular-easy-form'] = {}, global.ng.core, global.httpLoader, global.ng.forms, global.moment, global.core, global.ng.material.input, global.ng.common, global.ng.platformBrowser, global.ng.material.formField, global.ng.platformBrowser.animations, global.ng.cdk.textField, global.ng.material.autocomplete, global.ng.material.select, global.ng.common.http));
}(this, (function (exports, i0, httpLoader, forms, moment, core, input, common, platformBrowser, formField, animations, textField, autocomplete, select, http) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var moment__namespace = /*#__PURE__*/_interopNamespace(moment);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var Fields = /** @class */ (function () {
        function Fields() {
            this.allFields = [];
        }
        Fields.prototype.text = function (settings) {
            settings.type = 'text';
            this.allFields.push(settings);
        };
        Fields.prototype.number = function (settings) {
            settings.type = 'number';
            this.allFields.push(settings);
        };
        Fields.prototype.textArea = function (settings) {
            settings.type = 'textArea';
            this.allFields.push(settings);
        };
        Fields.prototype.date = function (settings) {
            settings.type = 'date';
            this.allFields.push(settings);
        };
        Fields.prototype.select = function (settings) {
            settings.type = 'select';
            this.allFields.push(settings);
        };
        Fields.prototype.checkbox = function (settings) {
            settings.type = 'checkbox';
            this.allFields.push(settings);
        };
        Fields.prototype.searchInput = function (settings) {
            settings.type = 'searchInput';
            this.allFields.push(settings);
        };
        Fields.prototype.getFields = function () {
            return this.allFields;
        };
        return Fields;
    }());
    Fields.ɵprov = i0.ɵɵdefineInjectable({ factory: function Fields_Factory() { return new Fields(); }, token: Fields, providedIn: "root" });
    Fields.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];

    var Config = /** @class */ (function () {
        function Config(fields) {
            this.fields = fields;
            this.fieldsBuilded = [];
            this.fieldsClass = fields;
            this.config = {
                style: this.styleGlobal
            };
        }
        Config.prototype.generateMatriz = function () {
            var _this = this;
            this.decreaseFields();
            this.matriz.map(function (numb) {
                _this.fieldsBuilded.push(_this.buildingFields(numb));
                _this.fieldsIteration = _this.fieldsIteration.slice(numb, _this.fieldsIteration.length);
            });
        };
        Config.prototype.decreaseFields = function () {
            return this.fieldsIteration = __spread(this.fieldsClass.getFields());
        };
        Config.prototype.buildingFields = function (quantityOfFields) {
            var fieldsBuild = [];
            var allFields = this.fieldsIteration;
            for (var index = 0; index < allFields.length;) {
                if (quantityOfFields > index) {
                    fieldsBuild.push(allFields[index]);
                }
                index++;
            }
            return fieldsBuild;
        };
        Config.prototype.field = function () {
            return this.fieldsClass;
        };
        Config.prototype.build = function () {
            this.generateMatriz();
            return this.fieldsBuilded || this.fieldsClass.getFields();
        };
        return Config;
    }());
    Config.ɵprov = i0.ɵɵdefineInjectable({ factory: function Config_Factory() { return new Config(i0.ɵɵinject(Fields)); }, token: Config, providedIn: "root" });
    Config.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    Config.ctorParameters = function () { return [
        { type: Fields }
    ]; };

    // @dynamic
    function HttpLoaderFactory(http) {
        var transl = new httpLoader.TranslateHttpLoader(http, './src/assets/i18n/', '.json');
        return transl;
    }
    var AngularEasyFormComponent = /** @class */ (function () {
        function AngularEasyFormComponent(themConfig) {
            this.themConfig = themConfig;
            this.eventsForm = new i0.EventEmitter();
            this.allFields = {};
            this.valueEvent = {};
            this.otherEvents = {};
            this.masterConfig = {};
            this.showGroups = false;
        }
        AngularEasyFormComponent.prototype.setLanguage = function (lang) {
            this.lang = lang;
        };
        // tslint:disable-next-line: typedef
        AngularEasyFormComponent.prototype.ngOnInit = function () {
            this.populateGroup();
        };
        AngularEasyFormComponent.prototype.formOptions = function () {
            return this.themConfig;
        };
        // tslint:disable-next-line: typedef
        AngularEasyFormComponent.prototype.eventGroupFields = function (event) {
            this.agregateResult(event);
            this.valueEvent = {
                otherEvents: this.allFields,
                values: Object.assign(this.otherEvents, event[Object.keys(event)[0].toString()][0])
            };
            this.eventsForm.emit(this.valueEvent);
        };
        AngularEasyFormComponent.prototype.agregateResult = function (event) {
            this.allFields = Object.assign(this.allFields, event);
        };
        AngularEasyFormComponent.prototype.populateGroup = function () {
            this.masterConfig.fields = this.setFieldsConfig;
            this.masterConfig.lang = this.lang;
            this.showGroups = this.setFieldsConfig ? true : false;
        };
        return AngularEasyFormComponent;
    }());
    AngularEasyFormComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-angular-easy-form',
                    template: "<div *ngIf=\"showGroups\">\r\n    <lib-group-fields *ngFor=\"let horizontalFields of masterConfig.fields\"\r\n     [style]='masterConfig.style' \r\n     [configGroup]='horizontalFields'\r\n     [setLang]=' masterConfig.lang'\r\n     (eventGroupInput) ='eventGroupFields($event)'\r\n     ></lib-group-fields>\r\n</div>\r\n",
                    styles: ['./angular-easy-form.component.css']
                },] }
    ];
    AngularEasyFormComponent.ctorParameters = function () { return [
        { type: Config }
    ]; };
    AngularEasyFormComponent.propDecorators = {
        eventsForm: [{ type: i0.Output }],
        setFieldsConfig: [{ type: i0.Input }]
    };
    var options = new AngularEasyFormComponent(new Config(new Fields()));

    var InputComponent = /** @class */ (function () {
        function InputComponent(fb) {
            this.fb = fb;
            this.eventInput = new i0.EventEmitter();
        }
        InputComponent.prototype.ngOnInit = function () {
            this.initiFb();
            this.getFormChanges();
        };
        InputComponent.prototype.initiFb = function () {
            var setControlName = {};
            this.setFormatDateField();
            setControlName[this.configInput.alias.toString()] = [{ value: this.configInput.value || '',
                    disabled: this.configInput.disable || false }];
            this.inputForm = this.fb.group(setControlName);
            this.eventInput.emit(this.inputForm);
        };
        InputComponent.prototype.setFormatDateField = function () {
            if (this.configInput.type === 'date') {
                this.configInput.value = moment__namespace(this.configInput.value).format(this.configInput.format || 'YYYY-MM-DD');
            }
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
        { type: i0.Component, args: [{
                    selector: 'lib-input',
                    template: "<mat-form-field \n*ngIf=\"configInput.type !== 'textarea' &&\n configInput.type !== 'select' &&\n configInput.type !== 'checkbox' && \n configInput.type !== 'searchInput'\"\n \n [style]=\"configInput?.style\"  [formGroup]=\"inputForm\">\n  <mat-label>{{configInput.label || '' | translate}}</mat-label>\n  <input [type]=\"configInput.type\"\n   matInput [placeholder]='configInput?.placeholder || \"\" '\n   [value]='configInput?.value || \"\" '\n   [minlength]='configInput?.miniLength || \"\" '\n   [maxlength]='configInput?.maxLength || \"\" '\n   [pattern] = 'configInput?.pattern || \"\" '\n   [required]= 'configInput?.required || false '\n   [formControlName]='configInput?.alias || \"\" ' >\n</mat-form-field>\n\n<mat-form-field *ngIf=\"configInput.type === 'textarea'\" [style]=\"configInput?.style\"   [formGroup]=\"inputForm\">\n  <mat-label>{{configInput.label || '' | translate}}</mat-label>\n  <textarea matInput  [value]='configInput.value || \"\" '\n    [required]= 'configInput?.required || false'\n    [formControlName]='configInput?.alias || \"\" '\n    [pattern] = 'configInput?.pattern || \"\" '\n    [minlength]='configInput?.miniLength || \"\" '\n    [maxlength]='configInput?.maxLength || \"\" '\n    resizetofitcontent\n    cdkTextareaAutosize\n  ></textarea>\n</mat-form-field>\n\n<mat-form-field *ngIf=\"configInput.type === 'select'\"  [style]='configInput?.style || \"\" '  [formGroup]=\"inputForm\">\n  <mat-label>{{configInput.label || '' | translate}}</mat-label>\n  <select matNativeControl [required]='configInput?.required || false '  [formControlName]='configInput?.alias || \"\" '>\n    <option *ngIf='configInput.startEmpty || false' value=\"\">   ----- </option>\n    <option *ngFor=\"let option of configInput.setOptions\" [value]=\"option.id\"> {{option.value}}</option>\n  </select>\n</mat-form-field>\n\n<div class=\"check-default\" [style]='configInput?.style || \"\" ' *ngIf=\"configInput.type === 'checkbox'\" [formGroup]=\"inputForm\">\n  <input type=\"checkbox\"  [checked]='configInput?.checked || false ' [formControlName]='configInput?.alias || \"\" '>\n  <label  class=\"check-label\" for=\"scales\">{{configInput.label || '' | translate}}</label>\n</div>\n\n<div class=\"check-form\" *ngIf=\"configInput.type === 'searchInput'\"  [style]=\"configInput?.style\">\n  <app-inputsearch\n  [label]='configInput?.label || \" \" | translate'\n  [validate]='configInput.validated || false '\n  [preSelected]='configInput?.valuePreselected || \"\" '\n  [preSelectedComparer]=''\n  [allData]='configInput?.dataOptions || \"\" '\n  [itemValue]='configInput?.valueData || \"\" '\n  [itemResult]='configInput?.showedData || \"\" '\n  (sendValue)=\"eventValue($event)\">\n </app-inputsearch>\n</div>\n\n\n",
                    styles: [".check-default{align-items:baseline;display:flex;margin:18px 0 0}.check-label{margin-left:4%}.mat-form-field,.mat-form-field-infix{width:100%}"]
                },] }
    ];
    InputComponent.ctorParameters = function () { return [
        { type: forms.FormBuilder }
    ]; };
    InputComponent.propDecorators = {
        configInput: [{ type: i0.Input }],
        eventInput: [{ type: i0.Output }],
        applyLang: [{ type: i0.Input }]
    };

    var GroupFieldsComponent = /** @class */ (function () {
        function GroupFieldsComponent(translate) {
            this.translate = translate;
            this.eventGroupInput = new i0.EventEmitter();
            this.fieldsGroup = {};
            this.translate.addLangs(['en', 'pt']);
            translate.setDefaultLang('pt');
            translate.use(this.setLang || localStorage.getItem('locale') || 'pt');
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
        { type: i0.Component, args: [{
                    selector: 'lib-group-fields',
                    template: "<div class=\"horizontal-group\" *ngIf=\"configGroup && configGroup.length > 0\">\n    <lib-input *ngFor=\"let field of configGroup\" class=\"input-dyn\" [applyLang]='setLang' [style]=\"field?.styleHorizontal || 'width:100%;'\"  [configInput]='field' (eventInput)=\"eventFields($event)\"></lib-input>\n</div>\n\n\n",
                    styles: [".horizontal-group{display:flex;flex-direction:row}.input-dyn{margin-left:1%}"]
                },] }
    ];
    GroupFieldsComponent.ctorParameters = function () { return [
        { type: core.TranslateService }
    ]; };
    GroupFieldsComponent.propDecorators = {
        configGroup: [{ type: i0.Input }],
        eventGroupInput: [{ type: i0.Output }],
        setLang: [{ type: i0.Input }]
    };

    var InputsearchComponent = /** @class */ (function () {
        function InputsearchComponent() {
            this.allData = [];
            this.preSelected = '';
            this.sendValue = new i0.EventEmitter();
            this.sendKeyEvent = new i0.EventEmitter();
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
        { type: i0.Component, args: [{
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    selector: 'app-inputsearch',
                    template: "<div class='group-input'>\n    <label *ngIf=\"label\" >{{label}}</label>\n    <mat-form-field  class=\"form-group\" [style.background-color]=\"myControl.status === 'INVALID'  && validate ? 'rgb(232, 154, 154)' : ''\">\n            <input class=\"multipleSelect\" type=\"text\" [matAutocomplete]=\"auto\" required\n            (keyup)=\"onKey($event)\"\n            aria-label=\"Number\"\n            matInput\n            #trigger=\"matAutocompleteTrigger\"\n            (click)='eventClick($event,trigger)'\n                   [formControl]=\"myControl\"\n                   [matAutocomplete]=\"auto\">\n            <mat-autocomplete #auto=\"matAutocomplete\"  showPanel=\"true\" #selectInp\n            >\n              <mat-option  *ngFor=\"let item of allComplete\" style=\"display: block\" (click)='selected(item[itemValue], label); $event.stopPropagation()' [value]=\"item[itemResult]\">\n                {{item[itemResult]}}\n              </mat-option>\n            </mat-autocomplete>\n      </mat-form-field>\n</div>\n",
                    encapsulation: i0.ViewEncapsulation.ShadowDom,
                    styles: [".border-input{border:1px solid grey!important}.group-input{display:flex;flex-direction:column}label{margin-bottom:8px}.mat-form-field-appearance-legacy .mat-form-field-underline{height:0!important}.mat-input-element{padding-left:0}.mat-form-field-appearance-legacy .mat-form-field-infix{border:1px solid #dcdcdc;border-radius:4px 5px;margin-top:0;padding:8px 0 8px 9px}.mat-form-field-infix{width:100%}"]
                },] }
    ];
    InputsearchComponent.ctorParameters = function () { return []; };
    InputsearchComponent.propDecorators = {
        nameField: [{ type: i0.ViewChild, args: ['selectInp',] }],
        autoTrigger: [{ type: i0.ViewChild, args: [autocomplete.MatAutocompleteTrigger, { static: true },] }],
        allData: [{ type: i0.Input }],
        searchDefault: [{ type: i0.Input }],
        preSelected: [{ type: i0.Input }],
        preSelectedComparer: [{ type: i0.Input }],
        label: [{ type: i0.Input }],
        itemValue: [{ type: i0.Input }],
        itemResult: [{ type: i0.Input }],
        sendValue: [{ type: i0.Output }],
        sendKeyEvent: [{ type: i0.Output }],
        validate: [{ type: i0.Input }],
        readOnly: [{ type: i0.Input }]
    };

    var createTranslateLoader = function (http) {
        return new httpLoader.TranslateHttpLoader(http, '../src/assets/i18n/', '.json');
    };
    var AngularEasyFormModule = /** @class */ (function () {
        function AngularEasyFormModule() {
        }
        return AngularEasyFormModule;
    }());
    AngularEasyFormModule.decorators = [
        { type: i0.NgModule, args: [{
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
                        formField.MatFormFieldModule,
                        core.TranslateModule.forRoot({
                            loader: {
                                provide: core.TranslateLoader,
                                useFactory: createTranslateLoader,
                                deps: [http.HttpClient]
                            }
                        })
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
    exports.HttpLoaderFactory = HttpLoaderFactory;
    exports.createTranslateLoader = createTranslateLoader;
    exports.options = options;
    exports.ɵa = Config;
    exports.ɵb = Fields;
    exports.ɵc = InputComponent;
    exports.ɵd = GroupFieldsComponent;
    exports.ɵe = InputsearchComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-easy-form.umd.js.map
