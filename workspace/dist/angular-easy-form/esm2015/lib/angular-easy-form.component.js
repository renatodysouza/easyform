import { Output } from '@angular/core';
import { Component, EventEmitter } from '@angular/core';
import { ThemeConfig } from './config/themeConfig';
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
    populateGroup(groupFields) {
        this.masterConfig.fields = groupFields;
        this.showGroups = groupFields ? true : false;
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
    { type: ThemeConfig }
];
AngularEasyFormComponent.propDecorators = {
    eventsForm: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1lYXN5LWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItZWFzeS1mb3JtL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLWVhc3ktZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBZ0MsTUFBTSxlQUFlLENBQUM7QUFDdEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBU25ELE1BQU0sT0FBTyx3QkFBd0I7SUFTbkMsWUFBb0IsVUFBdUI7UUFBdkIsZUFBVSxHQUFWLFVBQVUsQ0FBYTtRQVBqQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMxQyxjQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLGVBQVUsR0FBUSxFQUFFLENBQUM7UUFDckIsZ0JBQVcsR0FBUSxFQUFFLENBQUM7UUFDdEIsaUJBQVksR0FBUSxFQUFHLENBQUM7UUFDeEIsZUFBVSxHQUFHLEtBQUssQ0FBQztJQUluQixDQUFDO0lBRUQsb0NBQW9DO0lBQ3BDLFFBQVE7SUFDUixDQUFDO0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBRUQsb0NBQW9DO0lBQ3BDLGdCQUFnQixDQUFDLEtBQVU7UUFDekIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ2hCLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUztZQUMzQixNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEYsQ0FBQztRQUNGLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsY0FBYyxDQUFDLEtBQVU7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELGFBQWEsQ0FBQyxXQUF1QjtRQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUM7UUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQy9DLENBQUM7OztZQTNDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsc1NBQWlEO3lCQUN4QyxtQ0FBbUM7YUFDN0M7OztZQVJRLFdBQVc7Ozt5QkFXakIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRoZW1lQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvdGhlbWVDb25maWcnO1xuaW1wb3J0IHsgRm9ybU9wdGlvbnMgfSBmcm9tICcuL2ludGVyZmFjZXMvRm9ybU9wdGlvbnMnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1hbmd1bGFyLWVhc3ktZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbmd1bGFyLWVhc3ktZm9ybS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogWycuL2FuZ3VsYXItZWFzeS1mb3JtLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyRWFzeUZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBzZXRDb25maWc6IGFueTtcbiAgQE91dHB1dCgpIGV2ZW50c0Zvcm0gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGFsbEZpZWxkczogYW55ID0ge307XG4gIHZhbHVlRXZlbnQ6IGFueSA9IHt9O1xuICBvdGhlckV2ZW50czogYW55ID0ge307XG4gIG1hc3RlckNvbmZpZzogYW55ID0geyB9O1xuICBzaG93R3JvdXBzID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0aGVtQ29uZmlnOiBUaGVtZUNvbmZpZykge1xuXG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHR5cGVkZWZcbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBmb3JtT3B0aW9ucygpOiBUaGVtZUNvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMudGhlbUNvbmZpZztcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdHlwZWRlZlxuICBldmVudEdyb3VwRmllbGRzKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLmFncmVnYXRlUmVzdWx0KGV2ZW50KTtcbiAgICB0aGlzLnZhbHVlRXZlbnQgPSB7XG4gICAgICBvdGhlckV2ZW50czogdGhpcy5hbGxGaWVsZHMsXG4gICAgICB2YWx1ZXM6IE9iamVjdC5hc3NpZ24odGhpcy5vdGhlckV2ZW50cywgZXZlbnRbT2JqZWN0LmtleXMoZXZlbnQpWzBdLnRvU3RyaW5nKCldWzBdKVxuICAgIH07XG4gICAgdGhpcy5ldmVudHNGb3JtLmVtaXQodGhpcy52YWx1ZUV2ZW50KTtcbiAgfVxuXG4gIGFncmVnYXRlUmVzdWx0KGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLmFsbEZpZWxkcyA9IE9iamVjdC5hc3NpZ24odGhpcy5hbGxGaWVsZHMsIGV2ZW50KTtcbiAgfVxuXG4gIHBvcHVsYXRlR3JvdXAoZ3JvdXBGaWVsZHM6IEFycmF5PGFueT4pIHtcbiAgICB0aGlzLm1hc3RlckNvbmZpZy5maWVsZHMgPSBncm91cEZpZWxkcztcbiAgICB0aGlzLnNob3dHcm91cHMgPSBncm91cEZpZWxkcyA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG59XG4iXX0=