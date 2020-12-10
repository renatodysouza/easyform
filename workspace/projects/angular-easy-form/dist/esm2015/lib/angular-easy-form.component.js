import { Output } from '@angular/core';
import { Component, EventEmitter, Input } from '@angular/core';
export class AngularEasyFormComponent {
    constructor() {
        this.eventsForm = new EventEmitter();
        this.allFields = {};
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        // this.easyFormService.setConfig(changes.masterConfig.currentValue());
    }
    eventGroupFields(event) {
        this.allFields = Object.assign(this.allFields, event);
        this.eventsForm.emit(this.allFields);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1lYXN5LWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLWVhc3ktZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXlCLE1BQU0sZUFBZSxDQUFDO0FBUXRGLE1BQU0sT0FBTyx3QkFBd0I7SUFLbkM7UUFIVSxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMxQyxjQUFTLEdBQVEsRUFBRSxDQUFDO0lBRUosQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyx1RUFBdUU7SUFDekUsQ0FBQztJQUVELGdCQUFnQixDQUFDLEtBQVU7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ3RDLENBQUM7OztZQXRCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsME9BQWlEO3lCQUN4QyxtQ0FBbUM7YUFDN0M7Ozs7MkJBRUUsS0FBSzt5QkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi9pbnRlcmZhY2VzL0NvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1hbmd1bGFyLWVhc3ktZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbmd1bGFyLWVhc3ktZm9ybS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogWycuL2FuZ3VsYXItZWFzeS1mb3JtLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyRWFzeUZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBtYXN0ZXJDb25maWc6IENvbmZpZztcbiAgQE91dHB1dCgpIGV2ZW50c0Zvcm0gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGFsbEZpZWxkczogYW55ID0ge307XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAvLyB0aGlzLmVhc3lGb3JtU2VydmljZS5zZXRDb25maWcoY2hhbmdlcy5tYXN0ZXJDb25maWcuY3VycmVudFZhbHVlKCkpO1xuICB9XG5cbiAgZXZlbnRHcm91cEZpZWxkcyhldmVudDogYW55KSB7XG4gICAgdGhpcy5hbGxGaWVsZHMgPSBPYmplY3QuYXNzaWduKHRoaXMuYWxsRmllbGRzLCBldmVudCk7XG4gICAgdGhpcy5ldmVudHNGb3JtLmVtaXQodGhpcy5hbGxGaWVsZHMpXG4gIH1cblxufVxuIl19