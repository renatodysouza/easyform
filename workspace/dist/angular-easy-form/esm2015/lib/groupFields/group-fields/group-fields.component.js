import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
export class GroupFieldsComponent {
    constructor(translate) {
        this.translate = translate;
        this.eventGroupInput = new EventEmitter();
        this.fieldsGroup = {};
        this.translate.addLangs(['en', 'pt']);
        translate.setDefaultLang('pt');
        translate.use(this.setLang || localStorage.getItem('locale') || 'pt');
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
                template: "<div class=\"horizontal-group\" *ngIf=\"configGroup && configGroup.length > 0\">\n    <lib-input *ngFor=\"let field of configGroup\" class=\"input-dyn\" [applyLang]='setLang' [style]=\"field?.styleHorizontal || 'width:100%;'\"  [configInput]='field' (eventInput)=\"eventFields($event)\"></lib-input>\n</div>\n\n\n",
                styles: [".horizontal-group{display:flex;flex-direction:row}.input-dyn{margin-left:1%}"]
            },] }
];
GroupFieldsComponent.ctorParameters = () => [
    { type: TranslateService }
];
GroupFieldsComponent.propDecorators = {
    configGroup: [{ type: Input }],
    eventGroupInput: [{ type: Output }],
    setLang: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAtZmllbGRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLWVhc3ktZm9ybS9zcmMvIiwic291cmNlcyI6WyJsaWIvZ3JvdXBGaWVsZHMvZ3JvdXAtZmllbGRzL2dyb3VwLWZpZWxkcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQU92RCxNQUFNLE9BQU8sb0JBQW9CO0lBTS9CLFlBQW1CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBSnBDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUvQyxnQkFBVyxHQUFRLEVBQUUsQ0FBQztRQUdwQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVGLFFBQVE7SUFDUixDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQVU7UUFDcEIsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFlBQVksRUFBRTtZQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDNUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzdDO2FBQU07WUFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUUsQ0FBQztZQUM3RyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDN0M7SUFDSCxDQUFDOzs7WUE1QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLHFVQUE0Qzs7YUFFN0M7OztZQU5RLGdCQUFnQjs7OzBCQVF0QixLQUFLOzhCQUNMLE1BQU07c0JBQ04sS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWdyb3VwLWZpZWxkcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9ncm91cC1maWVsZHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ncm91cC1maWVsZHMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdyb3VwRmllbGRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY29uZmlnR3JvdXA6IGFueTtcbiAgQE91dHB1dCgpIGV2ZW50R3JvdXBJbnB1dCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgc2V0TGFuZzogYW55O1xuICBmaWVsZHNHcm91cDogYW55ID0ge307XG5cbiAgY29uc3RydWN0b3IocHVibGljIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSkge1xuICAgIHRoaXMudHJhbnNsYXRlLmFkZExhbmdzKFsnZW4nLCAncHQnXSk7XG4gICAgdHJhbnNsYXRlLnNldERlZmF1bHRMYW5nKCdwdCcpO1xuICAgIHRyYW5zbGF0ZS51c2UodGhpcy5zZXRMYW5nIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhbGUnKSB8fCAncHQnKTtcbiAgIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIGV2ZW50RmllbGRzKGV2ZW50OiBhbnkpIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ3NlYXJjaEZvcm0nKSB7XG4gICAgICB0aGlzLmZpZWxkc0dyb3VwW2V2ZW50LmFsaWFzXSA9IHt2YWx1ZTogZXZlbnQudmFsdWUsIGlzVmFsaWQ6IGV2ZW50LnZhbGlkIH07XG4gICAgICB0aGlzLmV2ZW50R3JvdXBJbnB1dC5lbWl0KHRoaXMuZmllbGRzR3JvdXApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpZWxkc0dyb3VwW09iamVjdC5rZXlzKGV2ZW50LnZhbHVlKVswXSB8fCBPYmplY3Qua2V5cyhldmVudClbMF1dID0gWyBldmVudC52YWx1ZSwgZXZlbnQudmFsaWQsIGV2ZW50IF07XG4gICAgICB0aGlzLmV2ZW50R3JvdXBJbnB1dC5lbWl0KHRoaXMuZmllbGRzR3JvdXApO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=