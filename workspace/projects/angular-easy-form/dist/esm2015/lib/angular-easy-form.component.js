import { Output } from '@angular/core';
import { Component, EventEmitter, Input } from '@angular/core';
export class AngularEasyFormComponent {
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
AngularEasyFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-angular-easy-form',
                template: "<lib-group-fields *ngFor=\"let horizontalFields of masterConfig.fields\"\r\n [style]='masterConfig.style' \r\n [configGroup]='horizontalFields'\r\n (eventGroupInput) ='eventGroupFields($event)'\r\n ></lib-group-fields>\r\n",
                styles: ['./angular-easy-form.component.css']
            },] }
];
AngularEasyFormComponent.ctorParameters = () => [];
AngularEasyFormComponent.propDecorators = {
    masterConfig: [{ type: Input }],
    eventsForm: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1lYXN5LWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLWVhc3ktZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXlCLE1BQU0sZUFBZSxDQUFDO0FBUXRGLE1BQU0sT0FBTyx3QkFBd0I7SUFPbkM7UUFMVSxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMxQyxjQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLGVBQVUsR0FBUSxFQUFFLENBQUM7UUFDckIsZ0JBQVcsR0FBUSxFQUFFLENBQUM7SUFFTixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLHVFQUF1RTtJQUN6RSxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsS0FBVTtRQUN6QixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQUUsT0FBTTtTQUFFO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxVQUFVLEdBQUc7WUFDaEIsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQzNCLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwRixDQUFBO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7OztZQTdCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsME9BQWlEO3lCQUN4QyxtQ0FBbUM7YUFDN0M7Ozs7MkJBRUUsS0FBSzt5QkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi9pbnRlcmZhY2VzL0NvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1hbmd1bGFyLWVhc3ktZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbmd1bGFyLWVhc3ktZm9ybS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogWycuL2FuZ3VsYXItZWFzeS1mb3JtLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyRWFzeUZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBtYXN0ZXJDb25maWc6IENvbmZpZztcbiAgQE91dHB1dCgpIGV2ZW50c0Zvcm0gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGFsbEZpZWxkczogYW55ID0ge307XG4gIHZhbHVlRXZlbnQ6IGFueSA9IHt9O1xuICBvdGhlckV2ZW50czogYW55ID0ge307XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAvLyB0aGlzLmVhc3lGb3JtU2VydmljZS5zZXRDb25maWcoY2hhbmdlcy5tYXN0ZXJDb25maWcuY3VycmVudFZhbHVlKCkpO1xuICB9XG5cbiAgZXZlbnRHcm91cEZpZWxkcyhldmVudDogYW55KSB7XG4gICAgaWYgKCFldmVudCkgeyByZXR1cm4gfVxuICAgIHRoaXMuYWxsRmllbGRzID0gT2JqZWN0LmFzc2lnbih0aGlzLmFsbEZpZWxkcywgZXZlbnQpO1xuICAgIHRoaXMudmFsdWVFdmVudCA9IHtcbiAgICAgIG90aGVyRXZlbnRzOiB0aGlzLmFsbEZpZWxkcyxcbiAgICAgIHZhbHVlczogT2JqZWN0LmFzc2lnbih0aGlzLm90aGVyRXZlbnRzLCBldmVudFtPYmplY3Qua2V5cyhldmVudClbMF0udG9TdHJpbmcoKV1bMF0pXG4gICAgfVxuICAgIHRoaXMuZXZlbnRzRm9ybS5lbWl0KHRoaXMudmFsdWVFdmVudClcbiAgfVxufVxuIl19