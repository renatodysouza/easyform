import { NgModule } from '@angular/core';
import { AngularEasyFormComponent } from './angular-easy-form.component';
import { InputComponent } from './fields/input/input.component';
import { GroupFieldsComponent } from './groupFields/group-fields/group-fields.component';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextFieldModule } from '@angular/cdk/text-field';
import { InputsearchComponent } from './inputsearch/inputsearch.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export const createTranslateLoader = (http) => {
    return new TranslateHttpLoader(http, '../src/assets/i18n/', '.json');
};
export class AngularEasyFormModule {
}
AngularEasyFormModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    AngularEasyFormComponent,
                    InputComponent,
                    GroupFieldsComponent,
                    InputsearchComponent
                ],
                imports: [
                    CommonModule,
                    BrowserModule,
                    BrowserAnimationsModule,
                    MatInputModule,
                    TextFieldModule,
                    ReactiveFormsModule,
                    MatFormFieldModule,
                    MatAutocompleteModule,
                    MatSelectModule,
                    MatFormFieldModule,
                    TranslateModule.forRoot({
                        loader: {
                            provide: TranslateLoader,
                            useFactory: createTranslateLoader,
                            deps: [HttpClient]
                        }
                    })
                ],
                exports: [AngularEasyFormComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1lYXN5LWZvcm0ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItZWFzeS1mb3JtL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLWVhc3ktZm9ybS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDekYsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzNFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXZFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNqRSxNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FBRyxDQUFDLElBQWdCLEVBQUUsRUFBRTtJQUN4RCxPQUFPLElBQUksbUJBQW1CLENBQUMsSUFBSSxFQUFFLHFCQUFxQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZFLENBQUMsQ0FBQztBQTZCRixNQUFNLE9BQU8scUJBQXFCOzs7WUEzQmpDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osd0JBQXdCO29CQUN2QixjQUFjO29CQUNkLG9CQUFvQjtvQkFDcEIsb0JBQW9CO2lCQUFDO2dCQUN4QixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixhQUFhO29CQUNiLHVCQUF1QjtvQkFDdkIsY0FBYztvQkFDZCxlQUFlO29CQUNmLG1CQUFtQjtvQkFDbkIsa0JBQWtCO29CQUNsQixxQkFBcUI7b0JBQ3JCLGVBQWU7b0JBQ2Ysa0JBQWtCO29CQUNsQixlQUFlLENBQUMsT0FBTyxDQUFDO3dCQUNwQixNQUFNLEVBQUU7NEJBQ0osT0FBTyxFQUFFLGVBQWU7NEJBQ3hCLFVBQVUsRUFBRSxxQkFBcUI7NEJBQ2pDLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQzt5QkFDckI7cUJBQ0osQ0FBQztpQkFDSDtnQkFDRCxPQUFPLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQzthQUNwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmd1bGFyRWFzeUZvcm1Db21wb25lbnQgfSBmcm9tICcuL2FuZ3VsYXItZWFzeS1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vZmllbGRzL2lucHV0L2lucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHcm91cEZpZWxkc0NvbXBvbmVudCB9IGZyb20gJy4vZ3JvdXBGaWVsZHMvZ3JvdXAtZmllbGRzL2dyb3VwLWZpZWxkcy5jb21wb25lbnQnO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge1RleHRGaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RleHQtZmllbGQnO1xuaW1wb3J0IHsgSW5wdXRzZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL2lucHV0c2VhcmNoL2lucHV0c2VhcmNoLmNvbXBvbmVudCc7XG5pbXBvcnQge01hdEF1dG9jb21wbGV0ZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcbmltcG9ydCB7TWF0U2VsZWN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTG9hZGVyLCBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IGZyb20gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBUcmFuc2xhdGVIdHRwTG9hZGVyIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvaHR0cC1sb2FkZXInO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVRyYW5zbGF0ZUxvYWRlciA9IChodHRwOiBIdHRwQ2xpZW50KSA9PiB7XG4gIHJldHVybiBuZXcgVHJhbnNsYXRlSHR0cExvYWRlcihodHRwLCAnLi4vc3JjL2Fzc2V0cy9pMThuLycsICcuanNvbicpO1xufTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQW5ndWxhckVhc3lGb3JtQ29tcG9uZW50LFxuICAgICBJbnB1dENvbXBvbmVudCwgXG4gICAgIEdyb3VwRmllbGRzQ29tcG9uZW50LFxuICAgICBJbnB1dHNlYXJjaENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBUZXh0RmllbGRNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgICBsb2FkZXI6IHtcbiAgICAgICAgICAgIHByb3ZpZGU6IFRyYW5zbGF0ZUxvYWRlcixcbiAgICAgICAgICAgIHVzZUZhY3Rvcnk6IGNyZWF0ZVRyYW5zbGF0ZUxvYWRlcixcbiAgICAgICAgICAgIGRlcHM6IFtIdHRwQ2xpZW50XVxuICAgICAgICB9XG4gICAgfSlcbiAgXSxcbiAgZXhwb3J0czogW0FuZ3VsYXJFYXN5Rm9ybUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhckVhc3lGb3JtTW9kdWxlIHsgfVxuXG4iXX0=