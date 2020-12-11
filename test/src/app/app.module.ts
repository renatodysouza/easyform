import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { DialPadModule } from 'dial-pad';
/* import { AngularEasyFormModule } from 'angular-easy-form';
 */

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DialPadModule,
 /*    AngularEasyFormModule, */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

