import { Output } from '@angular/core';
import { Component, EventEmitter, Input } from '@angular/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Config } from './config/config';
import { Fields } from './config/fields';
// @dynamic
export function HttpLoaderFactory(http) {
    const transl = new TranslateHttpLoader(http, './src/assets/i18n/', '.json');
    return transl;
}
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
    setLanguage(lang) {
        this.lang = lang;
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
        this.masterConfig.lang = this.lang;
        this.showGroups = this.setFieldsConfig ? true : false;
    }
}
AngularEasyFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-angular-easy-form',
                template: "<div *ngIf=\"showGroups\">\r\n    <lib-group-fields *ngFor=\"let horizontalFields of masterConfig.fields\"\r\n     [style]='masterConfig.style' \r\n     [configGroup]='horizontalFields'\r\n     [setLang]=' masterConfig.lang'\r\n     (eventGroupInput) ='eventGroupFields($event)'\r\n     ></lib-group-fields>\r\n</div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1lYXN5LWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItZWFzeS1mb3JtL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLWVhc3ktZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXlCLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekMsV0FBVztBQUNYLE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxJQUFnQjtJQUNoRCxNQUFNLE1BQU0sR0FBRyxJQUFJLG1CQUFtQixDQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM1RSxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBT0QsTUFBTSxPQUFPLHdCQUF3QjtJQVduQyxZQUFvQixVQUFrQjtRQUFsQixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBVjVCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRzFDLGNBQVMsR0FBUSxFQUFFLENBQUM7UUFDcEIsZUFBVSxHQUFRLEVBQUUsQ0FBQztRQUNyQixnQkFBVyxHQUFRLEVBQUUsQ0FBQztRQUN0QixpQkFBWSxHQUFRLEVBQUcsQ0FBQztRQUN4QixlQUFVLEdBQUcsS0FBSyxDQUFDO0lBS25CLENBQUM7SUFFRCxXQUFXLENBQUMsSUFBWTtRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQsb0NBQW9DO0lBQ3BDLFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUVELG9DQUFvQztJQUNwQyxnQkFBZ0IsQ0FBQyxLQUFVO1FBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRztZQUNoQixXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDM0IsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BGLENBQUM7UUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELGNBQWMsQ0FBQyxLQUFVO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUNoRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDeEQsQ0FBQzs7O1lBbkRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyw2VUFBaUQ7eUJBQ3hDLG1DQUFtQzthQUM3Qzs7O1lBYlEsTUFBTTs7O3lCQWVaLE1BQU07OEJBQ04sS0FBSzs7QUFnRFIsTUFBTSxDQUFDLE1BQU0sT0FBTyxHQUFHLElBQUksd0JBQXdCLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlSHR0cExvYWRlciB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2h0dHAtbG9hZGVyJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vY29uZmlnL2NvbmZpZyc7XG5pbXBvcnQgeyBGaWVsZHMgfSBmcm9tICcuL2NvbmZpZy9maWVsZHMnO1xuXG4vLyBAZHluYW1pY1xuZXhwb3J0IGZ1bmN0aW9uIEh0dHBMb2FkZXJGYWN0b3J5KGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgY29uc3QgdHJhbnNsID0gbmV3IFRyYW5zbGF0ZUh0dHBMb2FkZXIoaHR0cCwgJy4vc3JjL2Fzc2V0cy9pMThuLycsICcuanNvbicpO1xuICByZXR1cm4gdHJhbnNsO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYW5ndWxhci1lYXN5LWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vYW5ndWxhci1lYXN5LWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFsnLi9hbmd1bGFyLWVhc3ktZm9ybS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhckVhc3lGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQE91dHB1dCgpIGV2ZW50c0Zvcm0gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIHNldEZpZWxkc0NvbmZpZzogYW55O1xuICBzZXRDb25maWc6IGFueTtcbiAgYWxsRmllbGRzOiBhbnkgPSB7fTtcbiAgdmFsdWVFdmVudDogYW55ID0ge307XG4gIG90aGVyRXZlbnRzOiBhbnkgPSB7fTtcbiAgbWFzdGVyQ29uZmlnOiBhbnkgPSB7IH07XG4gIHNob3dHcm91cHMgPSBmYWxzZTtcbiAgbGFuZyE6c3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGhlbUNvbmZpZzogQ29uZmlnKSB7XG5cbiAgfVxuXG4gIHNldExhbmd1YWdlKGxhbmc6IHN0cmluZykge1xuICAgIHRoaXMubGFuZyA9IGxhbmc7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHR5cGVkZWZcbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wb3B1bGF0ZUdyb3VwKCk7XG4gIH1cblxuICBmb3JtT3B0aW9ucygpOiBDb25maWcge1xuICAgIHJldHVybiB0aGlzLnRoZW1Db25maWc7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHR5cGVkZWZcbiAgZXZlbnRHcm91cEZpZWxkcyhldmVudDogYW55KSB7XG4gICAgdGhpcy5hZ3JlZ2F0ZVJlc3VsdChldmVudCk7XG4gICAgdGhpcy52YWx1ZUV2ZW50ID0ge1xuICAgICAgb3RoZXJFdmVudHM6IHRoaXMuYWxsRmllbGRzLFxuICAgICAgdmFsdWVzOiBPYmplY3QuYXNzaWduKHRoaXMub3RoZXJFdmVudHMsIGV2ZW50W09iamVjdC5rZXlzKGV2ZW50KVswXS50b1N0cmluZygpXVswXSlcbiAgICB9O1xuICAgIHRoaXMuZXZlbnRzRm9ybS5lbWl0KHRoaXMudmFsdWVFdmVudCk7XG4gIH1cblxuICBhZ3JlZ2F0ZVJlc3VsdChldmVudDogYW55KSB7XG4gICAgdGhpcy5hbGxGaWVsZHMgPSBPYmplY3QuYXNzaWduKHRoaXMuYWxsRmllbGRzLCBldmVudCk7XG4gIH1cblxuICBwb3B1bGF0ZUdyb3VwKCkge1xuICAgIHRoaXMubWFzdGVyQ29uZmlnLmZpZWxkcyA9IHRoaXMuc2V0RmllbGRzQ29uZmlnO1xuICAgIHRoaXMubWFzdGVyQ29uZmlnLmxhbmcgPSB0aGlzLmxhbmc7XG4gICAgdGhpcy5zaG93R3JvdXBzID0gdGhpcy5zZXRGaWVsZHNDb25maWcgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxufVxuXG5leHBvcnQgY29uc3Qgb3B0aW9ucyA9IG5ldyBBbmd1bGFyRWFzeUZvcm1Db21wb25lbnQobmV3IENvbmZpZyhuZXcgRmllbGRzKCkpKTtcblxuIl19