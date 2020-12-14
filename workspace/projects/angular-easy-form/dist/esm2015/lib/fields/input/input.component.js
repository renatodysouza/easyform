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
                template: "<mat-form-field \n*ngIf=\"configInput.type !== 'textarea' &&\n configInput.type !== 'select' &&\n configInput.type !== 'checkbox' && \n configInput.type !== 'searchInput'\"\n \n [style]=\"configInput.style\"  [formGroup]=\"inputForm\">\n  <mat-label>{{configInput.label}}</mat-label>\n  <input [type]=\"configInput.type\"\n   matInput [placeholder]=\"configInput.placeholder\"\n   [value]=\"configInput.value\" \n   [minlength]='configInput.miniLength'\n   [maxlength]='configInput.maxLength'\n   [pattern] = 'configInput.pattern'\n   [disabled]='configInput.disable'\n   [required]= 'configInput.required'\n   [formControlName]=\"configInput.alias\" >\n</mat-form-field>\n\n<mat-form-field *ngIf=\"configInput.type === 'textarea'\" [style]=\"configInput.style\"   [formGroup]=\"inputForm\">\n  <mat-label>{{configInput.label}}</mat-label>\n  <textarea matInput  [value]=\"configInput.value\" \n    [disabled]='configInput.disable'\n    [required]= 'configInput.required'\n    [formControlName]=\"configInput.alias\"\n    [pattern] = 'configInput.pattern'\n    [minlength]='configInput.miniLength'\n    [maxlength]='configInput.maxLength'\n    [disabled]='configInput.disable'\n    resizetofitcontent\n    cdkTextareaAutosize\n  ></textarea>\n</mat-form-field>\n\n<mat-form-field *ngIf=\"configInput.type === 'select'\"  [style]=\"configInput.style\"  [formGroup]=\"inputForm\">\n  <mat-label>{{configInput.label}}</mat-label>\n  <select matNativeControl [required]='configInput.required'  [formControlName]=\"configInput.alias\">\n    <option *ngIf=\"configInput.startEmpty\" value=\"\">   ----- </option>\n    <option *ngFor=\"let option of configInput.setOptions\" [value]=\"option.id\"> {{option.value}}</option>\n  </select>\n</mat-form-field>\n\n<div class=\"check-default\" [style]=\"configInput.style\" *ngIf=\"configInput.type === 'checkbox'\" [formGroup]=\"inputForm\">\n  <input type=\"checkbox\"  [checked]=\"configInput.checked\"  [disabled]='configInput.disable'  [formControlName]=\"configInput.alias\">\n  <label  class=\"check-label\" for=\"scales\">{{configInput.label}}</label>\n</div>\n\n<div class=\"check-form\" *ngIf=\"configInput.type === 'searchInput'\"  [style]=\"configInput.style\">\n  <app-inputsearch\n  [label]='configInput.label'\n  [validate]='configInput.validated'\n  [preSelected]='configInput.valuePreselected'\n  [preSelectedComparer]=''\n  [allData]='configInput.dataOptions'\n  [itemValue]='configInput.valueData'\n  [itemResult]='configInput.showedData'\n  (sendValue)=\"eventValue($event)\">\n </app-inputsearch>\n</div>\n\n\n",
                styles: [".check-default{align-items:baseline;display:flex;margin:18px 0 0}.check-label{margin-left:10%}.mat-form-field{width:100%}"]
            },] }
];
InputComponent.ctorParameters = () => [
    { type: FormBuilder }
];
InputComponent.propDecorators = {
    configInput: [{ type: Input }],
    eventInput: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9maWVsZHMvaW5wdXQvaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBU3hELE1BQU0sT0FBTyxjQUFjO0lBS3pCLFlBQW9CLEVBQWU7UUFBZixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBRnpCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRzFDLENBQUM7SUFHRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxPQUFPO1FBQ0wsTUFBTSxjQUFjLEdBQVEsRUFBRSxDQUFBO1FBQzlCLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUE7UUFDbEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBVTtRQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzVGLENBQUM7OztZQWxDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLG9oRkFBcUM7O2FBRXRDOzs7WUFSUSxXQUFXOzs7MEJBVWpCLEtBQUs7eUJBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb25maWdJbnB1dCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvQ29uZmlnSW5wdXQnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2lucHV0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNvbmZpZ0lucHV0OiBDb25maWdJbnB1dFxuXG4gIEBPdXRwdXQoKSBldmVudElucHV0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyKSB7XG4gIH1cbiAgaW5wdXRGb3JtITogRm9ybUdyb3VwO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdGlGYigpO1xuICAgIHRoaXMuZ2V0Rm9ybUNoYW5nZXMoKTtcbiAgfVxuXG4gIGluaXRpRmIoKSB7XG4gICAgY29uc3Qgc2V0Q29udHJvbE5hbWU6IGFueSA9IHt9XG4gICAgc2V0Q29udHJvbE5hbWVbdGhpcy5jb25maWdJbnB1dC5hbGlhcy50b1N0cmluZygpXSA9IFt0aGlzLmNvbmZpZ0lucHV0LnZhbHVlIHx8ICcnXVxuICAgIHRoaXMuaW5wdXRGb3JtID0gdGhpcy5mYi5ncm91cChzZXRDb250cm9sTmFtZSk7XG4gICAgdGhpcy5ldmVudElucHV0LmVtaXQodGhpcy5pbnB1dEZvcm0pO1xuICB9XG5cbiAgZ2V0Rm9ybUNoYW5nZXMoKSB7XG4gICAgdGhpcy5pbnB1dEZvcm0udmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmV2ZW50SW5wdXQuZW1pdCh0aGlzLmlucHV0Rm9ybSk7XG4gICAgfSk7XG4gIH1cblxuICBldmVudFZhbHVlKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLmV2ZW50SW5wdXQuZW1pdCh7IGFsaWFzOiB0aGlzLmNvbmZpZ0lucHV0LmFsaWFzLCB0eXBlOiAnc2VhcmNoRm9ybScsIHZhbHVlOiBldmVudCB9KTtcbiAgfVxuXG59XG4iXX0=