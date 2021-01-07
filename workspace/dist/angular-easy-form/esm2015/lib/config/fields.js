import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class Fields {
    constructor() {
        this.allFields = [];
    }
    text(settings) {
        this.allFields.push(settings);
    }
    number(settings) {
        this.allFields.push(settings);
    }
    textArea(settings) {
        this.allFields.push(settings);
    }
    date(settings) {
        this.allFields.push(settings);
    }
    select(settings) {
        this.allFields.push(settings);
    }
    checkbox(settings) {
        this.allFields.push(settings);
    }
    searchInput(settings) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItZWFzeS1mb3JtL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb25maWcvZmllbGRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBYTNDLE1BQU0sT0FBTyxNQUFNO0lBSG5CO1FBSUUsY0FBUyxHQUFRLEVBQUUsQ0FBQztLQWlDckI7SUEvQkMsSUFBSSxDQUFDLFFBQWtCO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxNQUFNLENBQUMsUUFBb0I7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELFFBQVEsQ0FBQyxRQUFzQjtRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsSUFBSSxDQUFDLFFBQWtCO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxNQUFNLENBQUMsUUFBb0I7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELFFBQVEsQ0FBQyxRQUFzQjtRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsV0FBVyxDQUFDLFFBQXlCO1FBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7WUFwQ0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDaGVja0JveFRhZ3MgfSBmcm9tICcuLi9pbnRlcmZhY2VzL0NoZWNrQm94VGFncyc7XHJcbmltcG9ydCB7IERhdGVUYWdzIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9EYXRlVGFncyc7XHJcbmltcG9ydCB7IE51bWJlclRhZ3MgfSBmcm9tICcuLi9pbnRlcmZhY2VzL051bWJlclRhZ3MnO1xyXG5pbXBvcnQgeyBTZWFyY2hJbnB1dFRhZ3MgfSBmcm9tICcuLi9pbnRlcmZhY2VzL1NlYXJjaElucHV0VGFncyc7XHJcbmltcG9ydCB7IFNlbGVjdFRhZ3MgfSBmcm9tICcuLi9pbnRlcmZhY2VzL1NlbGVjdCc7XHJcbmltcG9ydCB7IFRleHRBcmVhVGFncyB9IGZyb20gJy4uL2ludGVyZmFjZXMvVGV4QXJlYVRhZ3MnO1xyXG5pbXBvcnQgeyBUZXh0VGFncyB9IGZyb20gJy4uL2ludGVyZmFjZXMvVGV4VGFncyc7XHJcblxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRmllbGRzIHtcclxuICBhbGxGaWVsZHM6IGFueSA9IFtdO1xyXG5cclxuICB0ZXh0KHNldHRpbmdzOiBUZXh0VGFncykge1xyXG4gICAgdGhpcy5hbGxGaWVsZHMucHVzaChzZXR0aW5ncyk7XHJcbiAgfVxyXG5cclxuICBudW1iZXIoc2V0dGluZ3M6IE51bWJlclRhZ3MpIHtcclxuICAgIHRoaXMuYWxsRmllbGRzLnB1c2goc2V0dGluZ3MpO1xyXG4gIH1cclxuXHJcbiAgdGV4dEFyZWEoc2V0dGluZ3M6IFRleHRBcmVhVGFncykge1xyXG4gICAgdGhpcy5hbGxGaWVsZHMucHVzaChzZXR0aW5ncyk7XHJcbiAgfVxyXG5cclxuICBkYXRlKHNldHRpbmdzOiBEYXRlVGFncykge1xyXG4gICAgdGhpcy5hbGxGaWVsZHMucHVzaChzZXR0aW5ncyk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3Qoc2V0dGluZ3M6IFNlbGVjdFRhZ3MpIHtcclxuICAgIHRoaXMuYWxsRmllbGRzLnB1c2goc2V0dGluZ3MpO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tib3goc2V0dGluZ3M6IENoZWNrQm94VGFncykge1xyXG4gICAgdGhpcy5hbGxGaWVsZHMucHVzaChzZXR0aW5ncyk7XHJcbiAgfVxyXG5cclxuICBzZWFyY2hJbnB1dChzZXR0aW5nczogU2VhcmNoSW5wdXRUYWdzKSB7XHJcbiAgICB0aGlzLmFsbEZpZWxkcy5wdXNoKHNldHRpbmdzKTtcclxuICB9XHJcblxyXG4gIGdldEZpZWxkcygpIHtcclxuICAgIHJldHVybiB0aGlzLmFsbEZpZWxkcztcclxuICB9XHJcbn1cclxuIl19