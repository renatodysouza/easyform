import { Injectable } from '@angular/core';
import { Fields } from './fields';
import * as i0 from "@angular/core";
import * as i1 from "./fields";
export class Config {
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
Config.ɵprov = i0.ɵɵdefineInjectable({ factory: function Config_Factory() { return new Config(i0.ɵɵinject(i1.Fields)); }, token: Config, providedIn: "root" });
Config.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
Config.ctorParameters = () => [
    { type: Fields }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItZWFzeS1mb3JtL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb25maWcvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQzs7O0FBT2xDLE1BQU0sT0FBTyxNQUFNO0lBUWpCLFlBQW1CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSmpDLGtCQUFhLEdBQWUsRUFBRSxDQUFDO1FBSzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUc7WUFDWixLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVc7U0FDeEIsQ0FBQztJQUNKLENBQUM7SUFFRCxjQUFjO1FBQ1osSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZGLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsY0FBYyxDQUFDLGdCQUF3QjtRQUNyQyxNQUFNLFdBQVcsR0FBZSxFQUFFLENBQUM7UUFDbkMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUN2QyxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRztZQUM3QyxJQUFJLGdCQUFnQixHQUFHLEtBQUssRUFBRTtnQkFDNUIsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNwQztZQUNELEtBQUssRUFBRSxDQUFDO1NBQ1Q7UUFDRCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBRUQsS0FBSztRQUNILE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM1RCxDQUFDOzs7O1lBakRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBTlEsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmllbGRzIH0gZnJvbSAnLi9maWVsZHMnO1xyXG5cclxuXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb25maWcge1xyXG4gIHN0eWxlR2xvYmFsOiBhbnk7XHJcbiAgY29uZmlnOiBhbnk7XHJcbiAgZmllbGRzQ2xhc3M7XHJcbiAgZmllbGRzQnVpbGRlZDogQXJyYXk8YW55PiA9IFtdO1xyXG4gIG1hdHJpeiE6IEFycmF5PG51bWJlcj47XHJcbiAgZmllbGRzSXRlcmF0aW9uITogQXJyYXk8YW55PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGZpZWxkczogRmllbGRzKSB7XHJcbiAgICB0aGlzLmZpZWxkc0NsYXNzID0gZmllbGRzO1xyXG4gICAgdGhpcy5jb25maWcgPSB7XHJcbiAgICAgIHN0eWxlOiB0aGlzLnN0eWxlR2xvYmFsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVNYXRyaXooKSB7XHJcbiAgICB0aGlzLmRlY3JlYXNlRmllbGRzKCk7XHJcbiAgICB0aGlzLm1hdHJpei5tYXAobnVtYiA9PiB7XHJcbiAgICAgIHRoaXMuZmllbGRzQnVpbGRlZC5wdXNoKHRoaXMuYnVpbGRpbmdGaWVsZHMobnVtYikpO1xyXG4gICAgICB0aGlzLmZpZWxkc0l0ZXJhdGlvbiA9IHRoaXMuZmllbGRzSXRlcmF0aW9uLnNsaWNlKG51bWIsIHRoaXMuZmllbGRzSXRlcmF0aW9uLmxlbmd0aCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlY3JlYXNlRmllbGRzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZmllbGRzSXRlcmF0aW9uID0gWy4uLnRoaXMuZmllbGRzQ2xhc3MuZ2V0RmllbGRzKCldO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRpbmdGaWVsZHMocXVhbnRpdHlPZkZpZWxkczogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBmaWVsZHNCdWlsZDogQXJyYXk8YW55PiA9IFtdO1xyXG4gICAgY29uc3QgYWxsRmllbGRzID0gdGhpcy5maWVsZHNJdGVyYXRpb247XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYWxsRmllbGRzLmxlbmd0aDspIHtcclxuICAgICAgaWYgKHF1YW50aXR5T2ZGaWVsZHMgPiBpbmRleCkge1xyXG4gICAgICAgIGZpZWxkc0J1aWxkLnB1c2goYWxsRmllbGRzW2luZGV4XSk7XHJcbiAgICAgIH1cclxuICAgICAgaW5kZXgrKztcclxuICAgIH1cclxuICAgIHJldHVybiBmaWVsZHNCdWlsZDtcclxuICB9XHJcblxyXG4gIGZpZWxkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZmllbGRzQ2xhc3M7XHJcbiAgfVxyXG5cclxuICBidWlsZCgpIHtcclxuICAgIHRoaXMuZ2VuZXJhdGVNYXRyaXooKTtcclxuICAgIHJldHVybiB0aGlzLmZpZWxkc0J1aWxkZWQgfHwgdGhpcy5maWVsZHNDbGFzcy5nZXRGaWVsZHMoKTtcclxuICB9XHJcbn1cclxuIl19