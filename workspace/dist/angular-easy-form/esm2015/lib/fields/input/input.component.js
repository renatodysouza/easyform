import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as moment from 'moment';
export class InputComponent {
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
    setFormatDateField() {
        if (this.configInput.type === 'date') {
            this.configInput.value = moment(this.configInput.value).format(this.configInput.format || 'YYYY-MM-DD');
        }
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
                template: "<mat-form-field \n*ngIf=\"configInput.type !== 'textarea' &&\n configInput.type !== 'select' &&\n configInput.type !== 'checkbox' && \n configInput.type !== 'searchInput'\"\n \n [style]=\"configInput?.style\"  [formGroup]=\"inputForm\">\n  <mat-label>{{configInput.label}}</mat-label>\n  <input [type]=\"configInput.type\"\n   matInput [placeholder]='configInput?.placeholder || \"\" '\n   [value]='configInput?.value || \"\" '\n   [minlength]='configInput?.miniLength || \"\" '\n   [maxlength]='configInput?.maxLength || \"\" '\n   [pattern] = 'configInput?.pattern || \"\" '\n   [required]= 'configInput?.required || false '\n   [formControlName]='configInput?.alias || \"\" ' >\n</mat-form-field>\n\n<mat-form-field *ngIf=\"configInput.type === 'textarea'\" [style]=\"configInput?.style\"   [formGroup]=\"inputForm\">\n  <mat-label>{{configInput.label}}</mat-label>\n  <textarea matInput  [value]='configInput.value || \"\" '\n    [required]= 'configInput?.required || false'\n    [formControlName]='configInput?.alias || \"\" '\n    [pattern] = 'configInput?.pattern || \"\" '\n    [minlength]='configInput?.miniLength || \"\" '\n    [maxlength]='configInput?.maxLength || \"\" '\n    resizetofitcontent\n    cdkTextareaAutosize\n  ></textarea>\n</mat-form-field>\n\n<mat-form-field *ngIf=\"configInput.type === 'select'\"  [style]='configInput?.style || \"\" '  [formGroup]=\"inputForm\">\n  <mat-label>{{configInput.label}}</mat-label>\n  <select matNativeControl [required]='configInput?.required || false '  [formControlName]='configInput?.alias || \"\" '>\n    <option *ngIf='configInput.startEmpty || false' value=\"\">   ----- </option>\n    <option *ngFor=\"let option of configInput.setOptions\" [value]=\"option.id\"> {{option.value}}</option>\n  </select>\n</mat-form-field>\n\n<div class=\"check-default\" [style]='configInput?.style || \"\" ' *ngIf=\"configInput.type === 'checkbox'\" [formGroup]=\"inputForm\">\n  <input type=\"checkbox\"  [checked]='configInput?.checked || false ' [formControlName]='configInput?.alias || \"\" '>\n  <label  class=\"check-label\" for=\"scales\">{{configInput.label}}</label>\n</div>\n\n<div class=\"check-form\" *ngIf=\"configInput.type === 'searchInput'\"  [style]=\"configInput?.style\">\n  <app-inputsearch\n  [label]='configInput?.label || \" \" '\n  [validate]='configInput.validated || false '\n  [preSelected]='configInput?.valuePreselected || \"\" '\n  [preSelectedComparer]=''\n  [allData]='configInput?.dataOptions || \"\" '\n  [itemValue]='configInput?.valueData || \"\" '\n  [itemResult]='configInput?.showedData || \"\" '\n  (sendValue)=\"eventValue($event)\">\n </app-inputsearch>\n</div>\n\n\n",
                styles: [".check-default{align-items:baseline;display:flex;margin:18px 0 0}.check-label{margin-left:4%}.mat-form-field,.mat-form-field-infix{width:100%}"]
            },] }
];
InputComponent.ctorParameters = () => [
    { type: FormBuilder }
];
InputComponent.propDecorators = {
    configInput: [{ type: Input }],
    eventInput: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItZWFzeS1mb3JtL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9maWVsZHMvaW5wdXQvaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBRXhELE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBT2pDLE1BQU0sT0FBTyxjQUFjO0lBS3pCLFlBQW9CLEVBQWU7UUFBZixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBRnpCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRzFDLENBQUM7SUFHRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxPQUFPO1FBQ0wsTUFBTSxjQUFjLEdBQVEsRUFBRSxDQUFDO1FBQy9CLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLElBQUksRUFBRTtnQkFDeEYsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxJQUFJLEtBQUssRUFBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLElBQUksWUFBWSxDQUFDLENBQUM7U0FDekc7SUFFSCxDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFVO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDNUYsQ0FBQzs7O1lBMUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsaW5GQUFxQzs7YUFFdEM7OztZQVJRLFdBQVc7OzswQkFVakIsS0FBSzt5QkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbmZpZ0lucHV0IH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9Db25maWdJbnB1dCc7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY29uZmlnSW5wdXQhOiBDb25maWdJbnB1dDtcblxuICBAT3V0cHV0KCkgZXZlbnRJbnB1dCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikge1xuICB9XG4gIGlucHV0Rm9ybSE6IEZvcm1Hcm91cDtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRpRmIoKTtcbiAgICB0aGlzLmdldEZvcm1DaGFuZ2VzKCk7XG4gIH1cblxuICBpbml0aUZiKCkge1xuICAgIGNvbnN0IHNldENvbnRyb2xOYW1lOiBhbnkgPSB7fTtcbiAgICBzZXRDb250cm9sTmFtZVt0aGlzLmNvbmZpZ0lucHV0LmFsaWFzLnRvU3RyaW5nKCldID0gW3t2YWx1ZTogdGhpcy5jb25maWdJbnB1dC52YWx1ZSB8fCAnJyxcbiAgICAgZGlzYWJsZWQ6IHRoaXMuY29uZmlnSW5wdXQuZGlzYWJsZSB8fCBmYWxzZX1dO1xuICAgIHRoaXMuaW5wdXRGb3JtID0gdGhpcy5mYi5ncm91cChzZXRDb250cm9sTmFtZSk7XG4gICAgdGhpcy5ldmVudElucHV0LmVtaXQodGhpcy5pbnB1dEZvcm0pO1xuICB9XG5cbiAgc2V0Rm9ybWF0RGF0ZUZpZWxkKCkge1xuICAgIGlmICh0aGlzLmNvbmZpZ0lucHV0LnR5cGUgPT09ICdkYXRlJykge1xuICAgICAgdGhpcy5jb25maWdJbnB1dC52YWx1ZSA9IG1vbWVudCh0aGlzLmNvbmZpZ0lucHV0LnZhbHVlKS5mb3JtYXQodGhpcy5jb25maWdJbnB1dC5mb3JtYXQgfHwgJ1lZWVktTU0tREQnKTtcbiAgICB9XG5cbiAgfVxuXG4gIGdldEZvcm1DaGFuZ2VzKCkge1xuICAgIHRoaXMuaW5wdXRGb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5ldmVudElucHV0LmVtaXQodGhpcy5pbnB1dEZvcm0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXZlbnRWYWx1ZShldmVudDogYW55KSB7XG4gICAgdGhpcy5ldmVudElucHV0LmVtaXQoeyBhbGlhczogdGhpcy5jb25maWdJbnB1dC5hbGlhcywgdHlwZTogJ3NlYXJjaEZvcm0nLCB2YWx1ZTogZXZlbnQgfSk7XG4gIH1cblxufVxuIl19