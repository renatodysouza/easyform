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
        this.setFormatDateField();
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
                template: "<mat-form-field \n*ngIf=\"configInput.type !== 'textarea' &&\n configInput.type !== 'select' &&\n configInput.type !== 'checkbox' && \n configInput.type !== 'searchInput'\"\n \n [style]=\"configInput?.style\"  [formGroup]=\"inputForm\">\n  <mat-label>{{configInput.label || '' | translate}}</mat-label>\n  <input [type]=\"configInput.type\"\n   matInput [placeholder]='configInput?.placeholder || \"\" '\n   [value]='configInput?.value || \"\" '\n   [minlength]='configInput?.miniLength || \"\" '\n   [maxlength]='configInput?.maxLength || \"\" '\n   [pattern] = 'configInput?.pattern || \"\" '\n   [required]= 'configInput?.required || false '\n   [formControlName]='configInput?.alias || \"\" ' >\n</mat-form-field>\n\n<mat-form-field *ngIf=\"configInput.type === 'textarea'\" [style]=\"configInput?.style\"   [formGroup]=\"inputForm\">\n  <mat-label>{{configInput.label || '' | translate}}</mat-label>\n  <textarea matInput  [value]='configInput.value || \"\" '\n    [required]= 'configInput?.required || false'\n    [formControlName]='configInput?.alias || \"\" '\n    [pattern] = 'configInput?.pattern || \"\" '\n    [minlength]='configInput?.miniLength || \"\" '\n    [maxlength]='configInput?.maxLength || \"\" '\n    resizetofitcontent\n    cdkTextareaAutosize\n  ></textarea>\n</mat-form-field>\n\n<mat-form-field *ngIf=\"configInput.type === 'select'\"  [style]='configInput?.style || \"\" '  [formGroup]=\"inputForm\">\n  <mat-label>{{configInput.label || '' | translate}}</mat-label>\n  <select matNativeControl [required]='configInput?.required || false '  [formControlName]='configInput?.alias || \"\" '>\n    <option *ngIf='configInput.startEmpty || false' value=\"\">   ----- </option>\n    <option *ngFor=\"let option of configInput.setOptions\" [value]=\"option.id\"> {{option.value}}</option>\n  </select>\n</mat-form-field>\n\n<div class=\"check-default\" [style]='configInput?.style || \"\" ' *ngIf=\"configInput.type === 'checkbox'\" [formGroup]=\"inputForm\">\n  <input type=\"checkbox\"  [checked]='configInput?.checked || false ' [formControlName]='configInput?.alias || \"\" '>\n  <label  class=\"check-label\" for=\"scales\">{{configInput.label || '' | translate}}</label>\n</div>\n\n<div class=\"check-form\" *ngIf=\"configInput.type === 'searchInput'\"  [style]=\"configInput?.style\">\n  <app-inputsearch\n  [label]='configInput?.label || \" \" | translate'\n  [validate]='configInput.validated || false '\n  [preSelected]='configInput?.valuePreselected || \"\" '\n  [preSelectedComparer]=''\n  [allData]='configInput?.dataOptions || \"\" '\n  [itemValue]='configInput?.valueData || \"\" '\n  [itemResult]='configInput?.showedData || \"\" '\n  (sendValue)=\"eventValue($event)\">\n </app-inputsearch>\n</div>\n\n\n",
                styles: [".check-default{align-items:baseline;display:flex;margin:18px 0 0}.check-label{margin-left:4%}.mat-form-field,.mat-form-field-infix{width:100%}"]
            },] }
];
InputComponent.ctorParameters = () => [
    { type: FormBuilder }
];
InputComponent.propDecorators = {
    configInput: [{ type: Input }],
    eventInput: [{ type: Output }],
    applyLang: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItZWFzeS1mb3JtL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9maWVsZHMvaW5wdXQvaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBRXhELE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBUWpDLE1BQU0sT0FBTyxjQUFjO0lBTXpCLFlBQW9CLEVBQWU7UUFBZixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBSnpCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBTTFDLENBQUM7SUFHRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxPQUFPO1FBQ0wsTUFBTSxjQUFjLEdBQVEsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLElBQUksRUFBRTtnQkFDeEYsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxJQUFJLEtBQUssRUFBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLElBQUksWUFBWSxDQUFDLENBQUM7U0FDekc7SUFFSCxDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFVO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDNUYsQ0FBQzs7O1lBN0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsb3NGQUFxQzs7YUFFdEM7OztZQVRRLFdBQVc7OzswQkFXakIsS0FBSzt5QkFDTCxNQUFNO3dCQUNOLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29uZmlnSW5wdXQgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL0NvbmZpZ0lucHV0JztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjb25maWdJbnB1dCE6IENvbmZpZ0lucHV0O1xuICBAT3V0cHV0KCkgZXZlbnRJbnB1dCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgYXBwbHlMYW5nOiBhbnk7XG4gIGlucHV0Rm9ybSE6IEZvcm1Hcm91cDtcbiAgXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyKSB7XG5cbiAgfVxuXG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0aUZiKCk7XG4gICAgdGhpcy5nZXRGb3JtQ2hhbmdlcygpO1xuICB9XG5cbiAgaW5pdGlGYigpIHtcbiAgICBjb25zdCBzZXRDb250cm9sTmFtZTogYW55ID0ge307XG4gICAgdGhpcy5zZXRGb3JtYXREYXRlRmllbGQoKTtcbiAgICBzZXRDb250cm9sTmFtZVt0aGlzLmNvbmZpZ0lucHV0LmFsaWFzLnRvU3RyaW5nKCldID0gW3t2YWx1ZTogdGhpcy5jb25maWdJbnB1dC52YWx1ZSB8fCAnJyxcbiAgICAgZGlzYWJsZWQ6IHRoaXMuY29uZmlnSW5wdXQuZGlzYWJsZSB8fCBmYWxzZX1dO1xuICAgIHRoaXMuaW5wdXRGb3JtID0gdGhpcy5mYi5ncm91cChzZXRDb250cm9sTmFtZSk7XG4gICAgdGhpcy5ldmVudElucHV0LmVtaXQodGhpcy5pbnB1dEZvcm0pO1xuICB9XG5cbiAgc2V0Rm9ybWF0RGF0ZUZpZWxkKCkge1xuICAgIGlmICh0aGlzLmNvbmZpZ0lucHV0LnR5cGUgPT09ICdkYXRlJykge1xuICAgICAgdGhpcy5jb25maWdJbnB1dC52YWx1ZSA9IG1vbWVudCh0aGlzLmNvbmZpZ0lucHV0LnZhbHVlKS5mb3JtYXQodGhpcy5jb25maWdJbnB1dC5mb3JtYXQgfHwgJ1lZWVktTU0tREQnKTtcbiAgICB9XG5cbiAgfVxuXG4gIGdldEZvcm1DaGFuZ2VzKCkge1xuICAgIHRoaXMuaW5wdXRGb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5ldmVudElucHV0LmVtaXQodGhpcy5pbnB1dEZvcm0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXZlbnRWYWx1ZShldmVudDogYW55KSB7XG4gICAgdGhpcy5ldmVudElucHV0LmVtaXQoeyBhbGlhczogdGhpcy5jb25maWdJbnB1dC5hbGlhcywgdHlwZTogJ3NlYXJjaEZvcm0nLCB2YWx1ZTogZXZlbnQgfSk7XG4gIH1cblxufVxuIl19