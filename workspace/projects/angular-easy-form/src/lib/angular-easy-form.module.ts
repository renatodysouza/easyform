import { NgModule } from '@angular/core';
import { AngularEasyFormComponent } from './angular-easy-form.component';
import { InputComponent } from './fields/input/input.component';
import { GroupFieldsComponent } from './groupFields/group-fields/group-fields.component';
import {MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TextFieldModule} from '@angular/cdk/text-field';
import { InputsearchComponent } from './inputsearch/inputsearch.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export const createTranslateLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http, '../src/assets/i18n/', '.json');
};

@NgModule({
  declarations: [
    AngularEasyFormComponent,
     InputComponent, 
     GroupFieldsComponent,
     InputsearchComponent],
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
})
export class AngularEasyFormModule { }

