# Angular-Easy-Forms

  

Permit create forms in Angular easier and fast.

  
  

## Get Started

  

### Compatibility

  

### NPM

  

`npm install angular-easy-forms --save`

  
  

## Usage

  

```ts

  

// add import AngularEasyFormModule

import { AngularEasyFormModule } from  'angular-easy-form';

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

export  class  AppModule { }


```
 

In your component's template file "app.component.html" you have add tag lib-angular-easy-form

  ```html

<lib-angular-easy-form

[masterConfig]='configForm'

(eventsForm)="eventForm($event)"></lib-angular-easy-form>"

```

  

The configForm is passed all configuration form. You should create a method to get events of form.
```ts

eventForm(event: any) {

// get events(events:any)

}

```




| Parameter   |  Description  |  Type  |  Example | 
| ------------------- | ------------------- | ------------------- | ------------------- |
|  title |  Title of main form | string  | { title: 'my title' } |
|  style |  Style of main form | string | { style: 'background-color: red;' } |
|  fields |  Fields define the fields and parameters | array |  see above complete example |



 ```javascript
 
 configForm = {
    style: 'background-color: red;',
    fields: [
      [
        { type: 'text', alias: 'f1', label: 'Field I', disable: false, placeholder: '',
          value: '', style: '', required: true
        },
        { type: 'number', alias: 'f2', label: 'Field II', disable: false, placeholder: '',
        value: '', style: '', required: false
        },
        { type: 'date', alias: 'f3', label: 'Field III', disable: false, placeholder: '',
        value: '', style: '', required: false
        },
      ],

      [
        { type: 'select', alias: 'f4',
         setOptions: [ {id: 1, value: 'home'}, {id: 2, value: 'ball'}],
         label: 'Can select ', disable: false, startEmpty: true,
          value: '', style: '', required: true
        },
        { type: 'number', alias: 'f5', label: 'teste', disable: false, placeholder: '',
        value: '', style: '', required: false
        },
        { type: 'date', alias: 'f6', label: 'teste', disable: false, placeholder: '',
        value: '', style: '', required: false
        },
      ],

      [
        { type: 'textarea', alias: 'f7', label: 'teste', disable: false, placeholder: '',
        value: '', style: '', required: false
        },

        { type: 'checkbox', alias: 'f8', label: 'teste', checked: false,
          style: '', required: false
        },
       { type: 'searchInput', alias: 'f9', label: '', dataOptions:[{id:"cat", value:"cat"}, {id:"dog", value:"dog"}], validate: false, 
        valuePreselected: '', valueData: 'id', showedData: 'value', style: ''}, 
        
      ],

    ]

     ![alt tag](https://github.com/renatodysouza/easyform/blob/main/form.PNG)



```