import { Component, EventEmitter, Input, Output } from '@angular/core';
export class GroupFieldsComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAtZmllbGRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLWVhc3ktZm9ybS9zcmMvIiwic291cmNlcyI6WyJsaWIvZ3JvdXBGaWVsZHMvZ3JvdXAtZmllbGRzL2dyb3VwLWZpZWxkcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sb0JBQW9CO0lBSy9CO1FBSFUsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9DLGdCQUFXLEdBQVEsRUFBRSxDQUFDO0lBRU4sQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFVO1FBQ3BCLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxZQUFZLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzVFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM3QzthQUFNO1lBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBRSxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFFLENBQUM7WUFDN0csSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQzs7O1lBdkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QiwwUEFBNEM7O2FBRTdDOzs7OzBCQUVFLEtBQUs7OEJBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWdyb3VwLWZpZWxkcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9ncm91cC1maWVsZHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ncm91cC1maWVsZHMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdyb3VwRmllbGRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY29uZmlnR3JvdXA6IGFueTtcbiAgQE91dHB1dCgpIGV2ZW50R3JvdXBJbnB1dCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZmllbGRzR3JvdXA6IGFueSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBldmVudEZpZWxkcyhldmVudDogYW55KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdzZWFyY2hGb3JtJykge1xuICAgICAgdGhpcy5maWVsZHNHcm91cFtldmVudC5hbGlhc10gPSB7dmFsdWU6IGV2ZW50LnZhbHVlLCBpc1ZhbGlkOiBldmVudC52YWxpZCB9O1xuICAgICAgdGhpcy5ldmVudEdyb3VwSW5wdXQuZW1pdCh0aGlzLmZpZWxkc0dyb3VwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maWVsZHNHcm91cFtPYmplY3Qua2V5cyhldmVudC52YWx1ZSlbMF0gfHwgT2JqZWN0LmtleXMoZXZlbnQpWzBdXSA9IFsgZXZlbnQudmFsdWUsIGV2ZW50LnZhbGlkLCBldmVudCBdO1xuICAgICAgdGhpcy5ldmVudEdyb3VwSW5wdXQuZW1pdCh0aGlzLmZpZWxkc0dyb3VwKTtcbiAgICB9XG4gIH1cblxufVxuIl19