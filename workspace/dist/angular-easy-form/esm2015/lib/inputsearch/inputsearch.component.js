import { Component, Input, ViewEncapsulation, Output, EventEmitter, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
export class InputsearchComponent {
    constructor() {
        this.allData = [];
        this.preSelected = '';
        this.sendValue = new EventEmitter();
        this.sendKeyEvent = new EventEmitter();
        this.focusField = false;
        this.myControl = new FormControl();
        this.allComplete = [];
        this.callNumber = 0;
        this.callOne = 0;
    }
    ngOnInit() {
        this.allComplete = this.allData || [];
        this.allComplete.map((res) => {
            const str = res[this.itemResult].toLowerCase();
            if (res[this.preSelectedComparer] === this.preSelected) {
                this.myControl.setValue(str.toUpperCase());
                this.filter(this.preSelected);
                return;
            }
        });
        this.myControl.valueChanges.subscribe(value => {
            if (this.globalTrigger) {
                this.globalTrigger.openPanel();
            }
            if (value === '') {
                this.sendValue.emit({ id: '', name: this.label });
            }
            if (value === '' && this.callNumber === 0) {
                this.allComplete = this.allData;
                this.callNumber = 1;
            }
            this.filter(value);
        });
    }
    ngOnChanges(changes) {
        this.allComplete = changes.allData.currentValue;
    }
    onKey(event) {
        this.sendKeyEvent.emit({ eventSent: event, field: this.myControl });
    }
    filter(value) {
        const filterValue = typeof value === 'string' ? value.toLowerCase() : value;
        const newResult = [];
        this.allData.map((option) => {
            const result = typeof option[this.itemResult] === 'string' ?
                option[this.itemResult].toLowerCase() : option[this.itemResult];
            if (result.includes(filterValue)) {
                this.valuSelectedInit = option.id;
                newResult.push(option);
            }
        });
        if (newResult.length > 1 && this.callNumber === 0) {
            setTimeout(() => {
                this.autoTrigger.openPanel();
            }, 200);
            this.callNumber = 1;
        }
        else {
            if (this.label === 'Delivery Address' && this.callOne === 0) {
                this.selected(this.valuSelectedInit, this.label);
                this.callOne = 1;
            }
        }
        this.allComplete = newResult;
    }
    eventClick($event, trigger) {
        this.globalTrigger = trigger;
        trigger.openPanel();
    }
    selected(id, label) {
        if (!id) {
            return;
        }
        this.sendValue.emit({ id: id, name: this.label });
    }
}
InputsearchComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'app-inputsearch',
                template: "<div class='group-input'>\n    <label *ngIf=\"label\" >{{label}}</label>\n    <mat-form-field  class=\"form-group\" [style.background-color]=\"myControl.status === 'INVALID'  && validate ? 'rgb(232, 154, 154)' : ''\">\n            <input class=\"multipleSelect\" type=\"text\" [matAutocomplete]=\"auto\" required\n            (keyup)=\"onKey($event)\"\n            aria-label=\"Number\"\n            matInput\n            #trigger=\"matAutocompleteTrigger\"\n            (click)='eventClick($event,trigger)'\n                   [formControl]=\"myControl\"\n                   [matAutocomplete]=\"auto\">\n            <mat-autocomplete #auto=\"matAutocomplete\"  showPanel=\"true\" #selectInp\n            >\n              <mat-option  *ngFor=\"let item of allComplete\" style=\"display: block\" (click)='selected(item[itemValue], label); $event.stopPropagation()' [value]=\"item[itemResult]\">\n                {{item[itemResult]}}\n              </mat-option>\n            </mat-autocomplete>\n      </mat-form-field>\n</div>\n",
                encapsulation: ViewEncapsulation.ShadowDom,
                styles: [".border-input{border:1px solid grey!important}.group-input{display:flex;flex-direction:column}label{margin-bottom:8px}.mat-form-field-appearance-legacy .mat-form-field-underline{height:0!important}.mat-input-element{padding-left:0}.mat-form-field-appearance-legacy .mat-form-field-infix{border:1px solid #dcdcdc;border-radius:4px 5px;margin-top:0;padding:8px 0 8px 9px}.mat-form-field-infix{width:100%}"]
            },] }
];
InputsearchComponent.ctorParameters = () => [];
InputsearchComponent.propDecorators = {
    nameField: [{ type: ViewChild, args: ['selectInp',] }],
    autoTrigger: [{ type: ViewChild, args: [MatAutocompleteTrigger, { static: true },] }],
    allData: [{ type: Input }],
    searchDefault: [{ type: Input }],
    preSelected: [{ type: Input }],
    preSelectedComparer: [{ type: Input }],
    label: [{ type: Input }],
    itemValue: [{ type: Input }],
    itemResult: [{ type: Input }],
    sendValue: [{ type: Output }],
    sendKeyEvent: [{ type: Output }],
    validate: [{ type: Input }],
    readOnly: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXRzZWFyY2guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItZWFzeS1mb3JtL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9pbnB1dHNlYXJjaC9pbnB1dHNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNILFNBQVMsRUFBVSxLQUFLLEVBQ3hCLGlCQUFpQixFQUNqQixNQUFNLEVBQUUsWUFBWSxFQUNwQixTQUFTLEVBQWMsdUJBQXVCLEVBQ2pELE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQVN4RSxNQUFNLE9BQU8sb0JBQW9CO0lBc0I3QjtRQW5CUyxZQUFPLEdBQVEsRUFBRSxDQUFDO1FBRWxCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBS2hCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9CLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUc1QyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGNBQVMsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBRTlCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBRWpCLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixZQUFPLEdBQUcsQ0FBQyxDQUFDO0lBSVosQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDOUIsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMvQyxJQUFJLEdBQUcsQ0FBQyxJQUFJ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QUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO2FBQ3BCO1NBQ0o7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztJQUdqQyxDQUFDO0lBRUQsVUFBVSxDQUFDLE1BQVcsRUFBRSxPQUFZO1FBQ2hDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsUUFBUSxDQUFDLEVBQU8sRUFBRSxLQUFhO1FBQzNCLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDTCxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7OztZQXhHSixTQUFTLFNBQUM7Z0JBQ1AsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLGdoQ0FBMkM7Z0JBRTNDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxTQUFTOzthQUM3Qzs7Ozt3QkFFSSxTQUFTLFNBQUMsV0FBVzswQkFDckIsU0FBUyxTQUFDLHNCQUFzQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtzQkFDbEQsS0FBSzs0QkFDTCxLQUFLOzBCQUNMLEtBQUs7a0NBQ0wsS0FBSztvQkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxNQUFNOzJCQUNOLE1BQU07dUJBQ04sS0FBSzt1QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsXG4gICAgVmlld0VuY2Fwc3VsYXRpb24sXG4gICAgT3V0cHV0LCBFdmVudEVtaXR0ZXIsXG4gICAgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBNYXRBdXRvY29tcGxldGVUcmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcblxuQENvbXBvbmVudCh7XG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgc2VsZWN0b3I6ICdhcHAtaW5wdXRzZWFyY2gnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9pbnB1dHNlYXJjaC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vaW5wdXRzZWFyY2guY29tcG9uZW50LnNjc3MnXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5TaGFkb3dEb21cbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRzZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gICAgQFZpZXdDaGlsZCgnc2VsZWN0SW5wJykgbmFtZUZpZWxkOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoTWF0QXV0b2NvbXBsZXRlVHJpZ2dlciwgeyBzdGF0aWM6IHRydWUgfSkgYXV0b1RyaWdnZXI6IE1hdEF1dG9jb21wbGV0ZVRyaWdnZXI7XG4gICAgQElucHV0KCkgYWxsRGF0YTogYW55ID0gW107XG4gICAgQElucHV0KCkgc2VhcmNoRGVmYXVsdDogYW55O1xuICAgIEBJbnB1dCgpIHByZVNlbGVjdGVkID0gJyc7XG4gICAgQElucHV0KCkgcHJlU2VsZWN0ZWRDb21wYXJlcjogYW55O1xuICAgIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gICAgQElucHV0KCkgaXRlbVZhbHVlOiBhbnk7XG4gICAgQElucHV0KCkgaXRlbVJlc3VsdDogYW55O1xuICAgIEBPdXRwdXQoKSBzZW5kVmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIHNlbmRLZXlFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBASW5wdXQoKSB2YWxpZGF0ZTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSByZWFkT25seTogYm9vbGVhbjtcbiAgICBmb2N1c0ZpZWxkID0gZmFsc2U7XG4gICAgbXlDb250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4gICAgZmlsdGVyZWRPcHRpb25zOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcbiAgICBhbGxDb21wbGV0ZSA9IFtdO1xuICAgIGdsb2JhbFRyaWdnZXI6IGFueTtcbiAgICBjYWxsTnVtYmVyID0gMDtcbiAgICBjYWxsT25lID0gMDtcbiAgICB2YWx1U2VsZWN0ZWRJbml0OiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hbGxDb21wbGV0ZSA9IHRoaXMuYWxsRGF0YSB8fCBbXTtcbiAgICAgICAgdGhpcy5hbGxDb21wbGV0ZS5tYXAoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdHIgPSByZXNbdGhpcy5pdGVtUmVzdWx0XS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKHJlc1t0aGlzLnByZVNlbGVjdGVkQ29tcGFyZXJdID09PSB0aGlzLnByZVNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5teUNvbnRyb2wuc2V0VmFsdWUoc3RyLnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyKHRoaXMucHJlU2VsZWN0ZWQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5teUNvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nbG9iYWxUcmlnZ2VyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nbG9iYWxUcmlnZ2VyLm9wZW5QYW5lbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VuZFZhbHVlLmVtaXQoeyBpZDogJycsIG5hbWU6IHRoaXMubGFiZWwgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09ICcnICYmIHRoaXMuY2FsbE51bWJlciA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxsQ29tcGxldGUgPSB0aGlzLmFsbERhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsTnVtYmVyID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmlsdGVyKHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICB0aGlzLmFsbENvbXBsZXRlID0gY2hhbmdlcy5hbGxEYXRhLmN1cnJlbnRWYWx1ZTtcbiAgICB9XG5cbiAgICBvbktleShldmVudDogYW55KSB7XG4gICAgICAgIHRoaXMuc2VuZEtleUV2ZW50LmVtaXQoe2V2ZW50U2VudDogZXZlbnQsIGZpZWxkOiB0aGlzLm15Q29udHJvbH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZmlsdGVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZmlsdGVyVmFsdWUgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUudG9Mb3dlckNhc2UoKSA6IHZhbHVlO1xuICAgICAgICBjb25zdCBuZXdSZXN1bHQ6IGFueSA9IFtdO1xuICAgICAgICB0aGlzLmFsbERhdGEubWFwKChvcHRpb246IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdHlwZW9mIG9wdGlvblt0aGlzLml0ZW1SZXN1bHRdID09PSAnc3RyaW5nJyA/XG4gICAgICAgICAgICAgICAgb3B0aW9uW3RoaXMuaXRlbVJlc3VsdF0udG9Mb3dlckNhc2UoKSA6IG9wdGlvblt0aGlzLml0ZW1SZXN1bHRdO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5pbmNsdWRlcyhmaWx0ZXJWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVTZWxlY3RlZEluaXQgPSBvcHRpb24uaWQ7XG4gICAgICAgICAgICAgICAgbmV3UmVzdWx0LnB1c2gob3B0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChuZXdSZXN1bHQubGVuZ3RoID4gMSAmJiB0aGlzLmNhbGxOdW1iZXIgPT09IDApIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0b1RyaWdnZXIub3BlblBhbmVsKCk7XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgdGhpcy5jYWxsTnVtYmVyID0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxhYmVsID09PSAnRGVsaXZlcnkgQWRkcmVzcycgJiYgdGhpcy5jYWxsT25lID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCh0aGlzLnZhbHVTZWxlY3RlZEluaXQsIHRoaXMubGFiZWwpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsbE9uZSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hbGxDb21wbGV0ZSA9IG5ld1Jlc3VsdDtcblxuXG4gICAgfVxuXG4gICAgZXZlbnRDbGljaygkZXZlbnQ6IGFueSwgdHJpZ2dlcjogYW55KSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsVHJpZ2dlciA9IHRyaWdnZXI7XG4gICAgICAgIHRyaWdnZXIub3BlblBhbmVsKCk7XG4gICAgfVxuXG4gICAgc2VsZWN0ZWQoaWQ6IGFueSwgbGFiZWw6IHN0cmluZykge1xuICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZW5kVmFsdWUuZW1pdCh7IGlkOiBpZCwgbmFtZTogdGhpcy5sYWJlbCB9KTtcbiAgICB9XG5cbn1cbiJdfQ==