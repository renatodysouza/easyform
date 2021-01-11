import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class Fields {
    constructor() {
        this.allFields = [];
    }
    text(settings) {
        settings.type = 'text';
        this.allFields.push(settings);
    }
    number(settings) {
        settings.type = 'number';
        this.allFields.push(settings);
    }
    textArea(settings) {
        settings.type = 'textArea';
        this.allFields.push(settings);
    }
    date(settings) {
        settings.type = 'date';
        this.allFields.push(settings);
    }
    select(settings) {
        settings.type = 'select';
        this.allFields.push(settings);
    }
    checkbox(settings) {
        settings.type = 'checkbox';
        this.allFields.push(settings);
    }
    searchInput(settings) {
        settings.type = 'searchInput';
        this.allFields.push(settings);
    }
    getFields() {
        return this.allFields;
    }
}
Fields.ɵprov = i0.ɵɵdefineInjectable({ factory: function Fields_Factory() { return new Fields(); }, token: Fields, providedIn: "root" });
Fields.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItZWFzeS1mb3JtL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb25maWcvZmllbGRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBYTNDLE1BQU0sT0FBTyxNQUFNO0lBSG5CO1FBSUUsY0FBUyxHQUFRLEVBQUUsQ0FBQztLQXdDckI7SUF0Q0MsSUFBSSxDQUFDLFFBQWtCO1FBQ3JCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxNQUFNLENBQUMsUUFBb0I7UUFDekIsUUFBUSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELFFBQVEsQ0FBQyxRQUFzQjtRQUM3QixRQUFRLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsSUFBSSxDQUFDLFFBQWtCO1FBQ3JCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxNQUFNLENBQUMsUUFBb0I7UUFDekIsUUFBUSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELFFBQVEsQ0FBQyxRQUFzQjtRQUM3QixRQUFRLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsV0FBVyxDQUFDLFFBQXlCO1FBQ25DLFFBQVEsQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7WUEzQ0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDaGVja0JveFRhZ3MgfSBmcm9tICcuLi9pbnRlcmZhY2VzL0NoZWNrQm94VGFncyc7XHJcbmltcG9ydCB7IERhdGVUYWdzIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9EYXRlVGFncyc7XHJcbmltcG9ydCB7IE51bWJlclRhZ3MgfSBmcm9tICcuLi9pbnRlcmZhY2VzL051bWJlclRhZ3MnO1xyXG5pbXBvcnQgeyBTZWFyY2hJbnB1dFRhZ3MgfSBmcm9tICcuLi9pbnRlcmZhY2VzL1NlYXJjaElucHV0VGFncyc7XHJcbmltcG9ydCB7IFNlbGVjdFRhZ3MgfSBmcm9tICcuLi9pbnRlcmZhY2VzL1NlbGVjdCc7XHJcbmltcG9ydCB7IFRleHRBcmVhVGFncyB9IGZyb20gJy4uL2ludGVyZmFjZXMvVGV4QXJlYVRhZ3MnO1xyXG5pbXBvcnQgeyBUZXh0VGFncyB9IGZyb20gJy4uL2ludGVyZmFjZXMvVGV4VGFncyc7XHJcblxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRmllbGRzIHtcclxuICBhbGxGaWVsZHM6IGFueSA9IFtdO1xyXG5cclxuICB0ZXh0KHNldHRpbmdzOiBUZXh0VGFncykge1xyXG4gICAgc2V0dGluZ3MudHlwZSA9ICd0ZXh0JztcclxuICAgIHRoaXMuYWxsRmllbGRzLnB1c2goc2V0dGluZ3MpO1xyXG4gIH1cclxuXHJcbiAgbnVtYmVyKHNldHRpbmdzOiBOdW1iZXJUYWdzKSB7XHJcbiAgICBzZXR0aW5ncy50eXBlID0gJ251bWJlcic7XHJcbiAgICB0aGlzLmFsbEZpZWxkcy5wdXNoKHNldHRpbmdzKTtcclxuICB9XHJcblxyXG4gIHRleHRBcmVhKHNldHRpbmdzOiBUZXh0QXJlYVRhZ3MpIHtcclxuICAgIHNldHRpbmdzLnR5cGUgPSAndGV4dEFyZWEnO1xyXG4gICAgdGhpcy5hbGxGaWVsZHMucHVzaChzZXR0aW5ncyk7XHJcbiAgfVxyXG5cclxuICBkYXRlKHNldHRpbmdzOiBEYXRlVGFncykge1xyXG4gICAgc2V0dGluZ3MudHlwZSA9ICdkYXRlJztcclxuICAgIHRoaXMuYWxsRmllbGRzLnB1c2goc2V0dGluZ3MpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0KHNldHRpbmdzOiBTZWxlY3RUYWdzKSB7XHJcbiAgICBzZXR0aW5ncy50eXBlID0gJ3NlbGVjdCc7XHJcbiAgICB0aGlzLmFsbEZpZWxkcy5wdXNoKHNldHRpbmdzKTtcclxuICB9XHJcblxyXG4gIGNoZWNrYm94KHNldHRpbmdzOiBDaGVja0JveFRhZ3MpIHtcclxuICAgIHNldHRpbmdzLnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gICAgdGhpcy5hbGxGaWVsZHMucHVzaChzZXR0aW5ncyk7XHJcbiAgfVxyXG5cclxuICBzZWFyY2hJbnB1dChzZXR0aW5nczogU2VhcmNoSW5wdXRUYWdzKSB7XHJcbiAgICBzZXR0aW5ncy50eXBlID0gJ3NlYXJjaElucHV0JztcclxuICAgIHRoaXMuYWxsRmllbGRzLnB1c2goc2V0dGluZ3MpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RmllbGRzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYWxsRmllbGRzO1xyXG4gIH1cclxufVxyXG4iXX0=