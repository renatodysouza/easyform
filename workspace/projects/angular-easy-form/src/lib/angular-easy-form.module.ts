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

@NgModule({
  declarations: [AngularEasyFormComponent, InputComponent, GroupFieldsComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    TextFieldModule,
    ReactiveFormsModule,
    MatFormFieldModule
    
  ],
  exports: [AngularEasyFormComponent]
})
export class AngularEasyFormModule { }
