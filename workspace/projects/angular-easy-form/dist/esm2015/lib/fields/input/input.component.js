import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
        setControlName[this.configInput.alias.toString()] = [this.configInput.value || ''];
        this.inputForm = this.fb.group(setControlName);
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
                template: "<mat-form-field \n*ngIf=\"configInput.type !== 'textarea' &&\n configInput.type !== 'select' &&\n configInput.type !== 'checkbox' && \n configInput.type !== 'searchInput'\"\n \n [style]=\"configInput.style\"  [formGroup]=\"inputForm\">\n  <mat-label>{{configInput.label}}</mat-label>\n  <input [type]=\"configInput.type\"\n   matInput [placeholder]=\"configInput.placeholder\"\n   [value]=\"configInput.value\" \n   [minlength]='configInput.miniLength'\n   [maxlength]='configInput.maxLength'\n   [pattern] = 'configInput.pattern'\n   [disabled]='configInput.disable'\n   [required]= 'configInput.required'\n   [formControlName]=\"configInput.alias\" >\n</mat-form-field>\n\n<mat-form-field *ngIf=\"configInput.type === 'textarea'\" [style]=\"configInput.style\"   [formGroup]=\"inputForm\">\n  <mat-label>{{configInput.label}}</mat-label>\n  <textarea matInput  [value]=\"configInput.value\" \n    [disabled]='configInput.disable'\n    [required]= 'configInput.required'\n    [formControlName]=\"configInput.alias\"\n    [pattern] = 'configInput.pattern'\n    [minlength]='configInput.miniLength'\n    [maxlength]='configInput.maxLength'\n    resizetofitcontent\n    cdkTextareaAutosize\n  ></textarea>\n</mat-form-field>\n\n<mat-form-field *ngIf=\"configInput.type === 'select'\"  [style]=\"configInput.style\"  [formGroup]=\"inputForm\">\n  <mat-label>{{configInput.label}}</mat-label>\n  <select matNativeControl [required]='configInput.required'  [formControlName]=\"configInput.alias\">\n    <option *ngIf=\"configInput.startEmpty\" value=\"\">   ----- </option>\n    <option *ngFor=\"let option of configInput.setOptions\" [value]=\"option.id\"> {{option.value}}</option>\n  </select>\n</mat-form-field>\n\n<div class=\"check-default\" [style]=\"configInput.style\" *ngIf=\"configInput.type === 'checkbox'\" [formGroup]=\"inputForm\">\n  <input type=\"checkbox\"  [checked]=\"configInput.checked\"  [formControlName]=\"configInput.alias\">\n  <label  class=\"check-label\" for=\"scales\">Scales</label>\n</div>\n\n<div class=\"check-form\" *ngIf=\"configInput.type === 'searchInput'\"  [style]=\"configInput.style\">\n  <app-inputsearch\n  [label]='configInput.label'\n  [validate]='configInput.validated'\n  [preSelected]='configInput.valuePreselected'\n  [preSelectedComparer]=''\n  [allData]='configInput.dataOptions'\n  [itemValue]='configInput.valueData'\n  [itemResult]='configInput.showedData'\n  (sendValue)=\"eventValue($event)\">\n </app-inputsearch>\n</div>\n\n\n",
                styles: [".check-default{display:flex;margin:18px 0 0;width:200px}.check-label{margin-left:4%}.mat-form-field{width:100%}"]
            },] }
];
InputComponent.ctorParameters = () => [
    { type: FormBuilder }
];
InputComponent.propDecorators = {
    configInput: [{ type: Input }],
    eventInput: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9maWVsZHMvaW5wdXQvaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBWSxNQUFNLGdCQUFnQixDQUFDO0FBU3ZELE1BQU0sT0FBTyxjQUFjO0lBS3pCLFlBQW9CLEVBQWU7UUFBZixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBRnpCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBR3pDLENBQUM7SUFHRixRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxPQUFPO1FBQ0wsTUFBTSxjQUFjLEdBQVEsRUFBRSxDQUFBO1FBQzlCLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLElBQUcsRUFBRSxDQUFDLENBQUE7UUFDakYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFVO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDMUYsQ0FBQzs7O1lBakNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsNjdFQUFxQzs7YUFFdEM7OztZQVJRLFdBQVc7OzswQkFVakIsS0FBSzt5QkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29uZmlnSW5wdXQgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL0NvbmZpZ0lucHV0JztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjb25maWdJbnB1dDogQ29uZmlnSW5wdXRcblxuICBAT3V0cHV0KCkgZXZlbnRJbnB1dCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikge1xuICAgfVxuICBpbnB1dEZvcm0hOiBGb3JtR3JvdXA7XG4gIFxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRpRmIoKTtcbiAgICB0aGlzLmdldEZvcm1DaGFuZ2VzKCk7XG4gIH1cblxuICBpbml0aUZiKCkge1xuICAgIGNvbnN0IHNldENvbnRyb2xOYW1lOiBhbnkgPSB7fVxuICAgIHNldENvbnRyb2xOYW1lW3RoaXMuY29uZmlnSW5wdXQuYWxpYXMudG9TdHJpbmcoKV0gPSBbdGhpcy5jb25maWdJbnB1dC52YWx1ZSB8fCcnXVxuICAgIHRoaXMuaW5wdXRGb3JtID0gdGhpcy5mYi5ncm91cChzZXRDb250cm9sTmFtZSk7XG4gIH1cblxuICBnZXRGb3JtQ2hhbmdlcygpIHtcbiAgICB0aGlzLmlucHV0Rm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZXZlbnRJbnB1dC5lbWl0KHRoaXMuaW5wdXRGb3JtKTtcbiAgICB9KTtcbiAgfVxuXG4gIGV2ZW50VmFsdWUoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuZXZlbnRJbnB1dC5lbWl0KHthbGlhczogdGhpcy5jb25maWdJbnB1dC5hbGlhcywgdHlwZTogJ3NlYXJjaEZvcm0nLCB2YWx1ZTogZXZlbnR9KTtcbiAgfVxuXG59XG4iXX0=