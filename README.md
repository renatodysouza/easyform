# Angular-Easy-Forms

Permit create forms in Angular easier and fast.


## Get Started

### Compatibility

### NPM 

`npm install angular-easy-forms --save`


## Usage

```ts
 import { AngularEasyFormModule } from 'angular-easy-form'; 
    @NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        AngularEasyFormModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
    })
export class AppModule { } 

```

In your component's template  file "app.component.html" you have add tag lib-angular-easy-form

```html 
    <lib-angular-easy-form
     [masterConfig]='configForm' 
     (eventsForm)="eventForm($event)"></lib-angular-easy-form>"
```

The configForm is passed all configuration form. You should create a method to get events of form.


```ts
    eventForm(event: any) {
        // get events
    }
```


