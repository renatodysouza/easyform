import { Output } from '@angular/core';
import { Component, EventEmitter, Input } from '@angular/core';
import { Config } from './config/config';
import { Fields } from './config/fields';
export class AngularEasyFormComponent {
    constructor(themConfig) {
        this.themConfig = themConfig;
        this.eventsForm = new EventEmitter();
        this.allFields = {};
        this.valueEvent = {};
        this.otherEvents = {};
        this.masterConfig = {};
        this.showGroups = false;
    }
    // tslint:disable-next-line: typedef
    ngOnInit() {
        this.populateGroup();
    }
    formOptions() {
        return this.themConfig;
    }
    // tslint:disable-next-line: typedef
    eventGroupFields(event) {
        this.agregateResult(event);
        this.valueEvent = {
            otherEvents: this.allFields,
            values: Object.assign(this.otherEvents, event[Object.keys(event)[0].toString()][0])
        };
        this.eventsForm.emit(this.valueEvent);
    }
    agregateResult(event) {
        this.allFields = Object.assign(this.allFields, event);
    }
    populateGroup() {
        this.masterConfig.fields = this.setFieldsConfig;
        this.showGroups = this.setFieldsConfig ? true : false;
    }
}
AngularEasyFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-angular-easy-form',
                template: "<div *ngIf=\"showGroups\">\r\n    <lib-group-fields *ngFor=\"let horizontalFields of masterConfig.fields\"\r\n     [style]='masterConfig.style' \r\n     [configGroup]='horizontalFields'\r\n     (eventGroupInput) ='eventGroupFields($event)'\r\n     ></lib-group-fields>\r\n</div>\r\n",
                styles: ['./angular-easy-form.component.css']
            },] }
];
AngularEasyFormComponent.ctorParameters = () => [
    { type: Config }
];
AngularEasyFormComponent.propDecorators = {
    eventsForm: [{ type: Output }],
    setFieldsConfig: [{ type: Input }]
};
export const options = new AngularEasyFormComponent(new Config(new Fields()));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1lYXN5LWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItZWFzeS1mb3JtL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLWVhc3ktZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXlCLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFTekMsTUFBTSxPQUFPLHdCQUF3QjtJQVVuQyxZQUFvQixVQUFrQjtRQUFsQixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBVDVCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRzFDLGNBQVMsR0FBUSxFQUFFLENBQUM7UUFDcEIsZUFBVSxHQUFRLEVBQUUsQ0FBQztRQUNyQixnQkFBVyxHQUFRLEVBQUUsQ0FBQztRQUN0QixpQkFBWSxHQUFRLEVBQUcsQ0FBQztRQUN4QixlQUFVLEdBQUcsS0FBSyxDQUFDO0lBSW5CLENBQUM7SUFFRCxvQ0FBb0M7SUFDcEMsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBRUQsb0NBQW9DO0lBQ3BDLGdCQUFnQixDQUFDLEtBQVU7UUFDekIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ2hCLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUztZQUMzQixNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEYsQ0FBQztRQUNGLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsY0FBYyxDQUFDLEtBQVU7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQ2hELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDeEQsQ0FBQzs7O1lBN0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxzU0FBaUQ7eUJBQ3hDLG1DQUFtQzthQUM3Qzs7O1lBVFEsTUFBTTs7O3lCQVdaLE1BQU07OEJBQ04sS0FBSzs7QUEwQ1IsTUFBTSxDQUFDLE1BQU0sT0FBTyxHQUFHLElBQUksd0JBQXdCLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuL2NvbmZpZy9jb25maWcnO1xuaW1wb3J0IHsgRmllbGRzIH0gZnJvbSAnLi9jb25maWcvZmllbGRzJztcbmltcG9ydCB7IEZvcm1PcHRpb25zIH0gZnJvbSAnLi9pbnRlcmZhY2VzL0Zvcm1PcHRpb25zJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYW5ndWxhci1lYXN5LWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vYW5ndWxhci1lYXN5LWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFsnLi9hbmd1bGFyLWVhc3ktZm9ybS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhckVhc3lGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQE91dHB1dCgpIGV2ZW50c0Zvcm0gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIHNldEZpZWxkc0NvbmZpZzogYW55O1xuICBzZXRDb25maWc6IGFueTtcbiAgYWxsRmllbGRzOiBhbnkgPSB7fTtcbiAgdmFsdWVFdmVudDogYW55ID0ge307XG4gIG90aGVyRXZlbnRzOiBhbnkgPSB7fTtcbiAgbWFzdGVyQ29uZmlnOiBhbnkgPSB7IH07XG4gIHNob3dHcm91cHMgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRoZW1Db25maWc6IENvbmZpZykge1xuXG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHR5cGVkZWZcbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wb3B1bGF0ZUdyb3VwKCk7XG4gIH1cblxuICBmb3JtT3B0aW9ucygpOiBDb25maWcge1xuICAgIHJldHVybiB0aGlzLnRoZW1Db25maWc7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHR5cGVkZWZcbiAgZXZlbnRHcm91cEZpZWxkcyhldmVudDogYW55KSB7XG4gICAgdGhpcy5hZ3JlZ2F0ZVJlc3VsdChldmVudCk7XG4gICAgdGhpcy52YWx1ZUV2ZW50ID0ge1xuICAgICAgb3RoZXJFdmVudHM6IHRoaXMuYWxsRmllbGRzLFxuICAgICAgdmFsdWVzOiBPYmplY3QuYXNzaWduKHRoaXMub3RoZXJFdmVudHMsIGV2ZW50W09iamVjdC5rZXlzKGV2ZW50KVswXS50b1N0cmluZygpXVswXSlcbiAgICB9O1xuICAgIHRoaXMuZXZlbnRzRm9ybS5lbWl0KHRoaXMudmFsdWVFdmVudCk7XG4gIH1cblxuICBhZ3JlZ2F0ZVJlc3VsdChldmVudDogYW55KSB7XG4gICAgdGhpcy5hbGxGaWVsZHMgPSBPYmplY3QuYXNzaWduKHRoaXMuYWxsRmllbGRzLCBldmVudCk7XG4gIH1cblxuICBwb3B1bGF0ZUdyb3VwKCkge1xuICAgIHRoaXMubWFzdGVyQ29uZmlnLmZpZWxkcyA9IHRoaXMuc2V0RmllbGRzQ29uZmlnO1xuICAgIHRoaXMuc2hvd0dyb3VwcyA9IHRoaXMuc2V0RmllbGRzQ29uZmlnID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbn1cblxuZXhwb3J0IGNvbnN0IG9wdGlvbnMgPSBuZXcgQW5ndWxhckVhc3lGb3JtQ29tcG9uZW50KG5ldyBDb25maWcobmV3IEZpZWxkcygpKSk7XG5cbiJdfQ==