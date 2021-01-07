import { Injectable } from '@angular/core';
import { Fields } from './fields';
import * as i0 from "@angular/core";
import * as i1 from "./fields";
export class ThemeConfig {
    constructor(fields) {
        this.fields = fields;
        this.fieldsBuilded = [];
        this.fieldsClass = fields;
        this.config = {
            style: this.styleGlobal
        };
    }
    generateMatriz() {
        this.decreaseFields();
        this.matriz.map(numb => {
            this.fieldsBuilded.push(this.buildingFields(numb));
            this.fieldsIteration = this.fieldsIteration.slice(numb, this.fieldsIteration.length);
        });
    }
    decreaseFields() {
        return this.fieldsIteration = [...this.fieldsClass.getFields()];
    }
    buildingFields(quantityOfFields) {
        const fieldsBuild = [];
        const allFields = this.fieldsIteration;
        for (let index = 0; index < allFields.length;) {
            if (quantityOfFields > index) {
                fieldsBuild.push(allFields[index]);
            }
            index++;
        }
        return fieldsBuild;
    }
    field() {
        return this.fieldsClass;
    }
    build() {
        this.generateMatriz();
        return this.fieldsBuilded || this.fieldsClass.getFields();
    }
}
ThemeConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function ThemeConfig_Factory() { return new ThemeConfig(i0.ɵɵinject(i1.Fields)); }, token: ThemeConfig, providedIn: "root" });
ThemeConfig.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
ThemeConfig.ctorParameters = () => [
    { type: Fields }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWVDb25maWcuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1lYXN5LWZvcm0vc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy90aGVtZUNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7OztBQU9sQyxNQUFNLE9BQU8sV0FBVztJQVF0QixZQUFtQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUpqQyxrQkFBYSxHQUFlLEVBQUUsQ0FBQztRQUs3QixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHO1lBQ1osS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXO1NBQ3hCLENBQUM7SUFDSixDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2RixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELGNBQWMsQ0FBQyxnQkFBd0I7UUFDckMsTUFBTSxXQUFXLEdBQWUsRUFBRSxDQUFDO1FBQ25DLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDdkMsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUc7WUFDN0MsSUFBSSxnQkFBZ0IsR0FBRyxLQUFLLEVBQUU7Z0JBQzVCLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDcEM7WUFDRCxLQUFLLEVBQUUsQ0FBQztTQUNUO1FBQ0QsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVELEtBQUs7UUFDSCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsT0FBTyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDNUQsQ0FBQzs7OztZQWpERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQU5RLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpZWxkcyB9IGZyb20gJy4vZmllbGRzJztcclxuXHJcblxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGhlbWVDb25maWcge1xyXG4gIHN0eWxlR2xvYmFsOiBhbnk7XHJcbiAgY29uZmlnOiBhbnk7XHJcbiAgZmllbGRzQ2xhc3M7XHJcbiAgZmllbGRzQnVpbGRlZDogQXJyYXk8YW55PiA9IFtdO1xyXG4gIG1hdHJpeiE6IEFycmF5PG51bWJlcj47XHJcbiAgZmllbGRzSXRlcmF0aW9uITogQXJyYXk8YW55PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGZpZWxkczogRmllbGRzKSB7XHJcbiAgICB0aGlzLmZpZWxkc0NsYXNzID0gZmllbGRzO1xyXG4gICAgdGhpcy5jb25maWcgPSB7XHJcbiAgICAgIHN0eWxlOiB0aGlzLnN0eWxlR2xvYmFsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVNYXRyaXooKSB7XHJcbiAgICB0aGlzLmRlY3JlYXNlRmllbGRzKCk7XHJcbiAgICB0aGlzLm1hdHJpei5tYXAobnVtYiA9PiB7XHJcbiAgICAgIHRoaXMuZmllbGRzQnVpbGRlZC5wdXNoKHRoaXMuYnVpbGRpbmdGaWVsZHMobnVtYikpO1xyXG4gICAgICB0aGlzLmZpZWxkc0l0ZXJhdGlvbiA9IHRoaXMuZmllbGRzSXRlcmF0aW9uLnNsaWNlKG51bWIsIHRoaXMuZmllbGRzSXRlcmF0aW9uLmxlbmd0aCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlY3JlYXNlRmllbGRzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZmllbGRzSXRlcmF0aW9uID0gWy4uLnRoaXMuZmllbGRzQ2xhc3MuZ2V0RmllbGRzKCldO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRpbmdGaWVsZHMocXVhbnRpdHlPZkZpZWxkczogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBmaWVsZHNCdWlsZDogQXJyYXk8YW55PiA9IFtdO1xyXG4gICAgY29uc3QgYWxsRmllbGRzID0gdGhpcy5maWVsZHNJdGVyYXRpb247XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYWxsRmllbGRzLmxlbmd0aDspIHtcclxuICAgICAgaWYgKHF1YW50aXR5T2ZGaWVsZHMgPiBpbmRleCkge1xyXG4gICAgICAgIGZpZWxkc0J1aWxkLnB1c2goYWxsRmllbGRzW2luZGV4XSk7XHJcbiAgICAgIH1cclxuICAgICAgaW5kZXgrKztcclxuICAgIH1cclxuICAgIHJldHVybiBmaWVsZHNCdWlsZDtcclxuICB9XHJcblxyXG4gIGZpZWxkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZmllbGRzQ2xhc3M7XHJcbiAgfVxyXG5cclxuICBidWlsZCgpIHtcclxuICAgIHRoaXMuZ2VuZXJhdGVNYXRyaXooKTtcclxuICAgIHJldHVybiB0aGlzLmZpZWxkc0J1aWxkZWQgfHwgdGhpcy5maWVsZHNDbGFzcy5nZXRGaWVsZHMoKTtcclxuICB9XHJcbn1cclxuIl19