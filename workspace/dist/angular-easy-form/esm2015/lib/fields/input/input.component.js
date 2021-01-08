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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItZWFzeS1mb3JtL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9maWVsZHMvaW5wdXQvaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBU3hELE1BQU0sT0FBTyxjQUFjO0lBS3pCLFlBQW9CLEVBQWU7UUFBZixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBRnpCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRzFDLENBQUM7SUFHRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxPQUFPO1FBQ0wsTUFBTSxjQUFjLEdBQVEsRUFBRSxDQUFDO1FBQy9CLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLElBQUksRUFBRTtnQkFDeEYsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxJQUFJLEtBQUssRUFBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBVTtRQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzVGLENBQUM7OztZQW5DRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLGluRkFBcUM7O2FBRXRDOzs7WUFSUSxXQUFXOzs7MEJBVWpCLEtBQUs7eUJBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb25maWdJbnB1dCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvQ29uZmlnSW5wdXQnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2lucHV0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNvbmZpZ0lucHV0ITogQ29uZmlnSW5wdXQ7XG5cbiAgQE91dHB1dCgpIGV2ZW50SW5wdXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHtcbiAgfVxuICBpbnB1dEZvcm0hOiBGb3JtR3JvdXA7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0aUZiKCk7XG4gICAgdGhpcy5nZXRGb3JtQ2hhbmdlcygpO1xuICB9XG5cbiAgaW5pdGlGYigpIHtcbiAgICBjb25zdCBzZXRDb250cm9sTmFtZTogYW55ID0ge307XG4gICAgc2V0Q29udHJvbE5hbWVbdGhpcy5jb25maWdJbnB1dC5hbGlhcy50b1N0cmluZygpXSA9IFt7dmFsdWU6IHRoaXMuY29uZmlnSW5wdXQudmFsdWUgfHwgJycsXG4gICAgIGRpc2FibGVkOiB0aGlzLmNvbmZpZ0lucHV0LmRpc2FibGUgfHwgZmFsc2V9XTtcbiAgICB0aGlzLmlucHV0Rm9ybSA9IHRoaXMuZmIuZ3JvdXAoc2V0Q29udHJvbE5hbWUpO1xuICAgIHRoaXMuZXZlbnRJbnB1dC5lbWl0KHRoaXMuaW5wdXRGb3JtKTtcbiAgfVxuXG4gIGdldEZvcm1DaGFuZ2VzKCkge1xuICAgIHRoaXMuaW5wdXRGb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5ldmVudElucHV0LmVtaXQodGhpcy5pbnB1dEZvcm0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXZlbnRWYWx1ZShldmVudDogYW55KSB7XG4gICAgdGhpcy5ldmVudElucHV0LmVtaXQoeyBhbGlhczogdGhpcy5jb25maWdJbnB1dC5hbGlhcywgdHlwZTogJ3NlYXJjaEZvcm0nLCB2YWx1ZTogZXZlbnQgfSk7XG4gIH1cblxufVxuIl19