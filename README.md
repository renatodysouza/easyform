
<h1 align="center">Angular Easy Form</h1>

<p align="center">
  <a href="https://app.circleci.com/pipelines/github/renatodysouza/easyform">
    <img src="https://img.shields.io/circleci/build/github/renatodysouza/easyform/master.svg?logo=circleci&logoColor=fff&label=CircleCI" alt="CI status" />
  </a>&nbsp;

  <a href="https://github.com/renatodysouza/easyform/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg"  />
  </a>&nbsp;
</p>

*warning - this version is release, not use it in production

Permit create forms in Angular easier and fast.



## Get Started

  

 

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
(eventsForm)="eventForm($event)">
</lib-angular-easy-form>

```  

The configForm is passed all configuration form. You should create a method to get events of form.
```ts

eventForm(event: any) {

// get events(events:any)

}

```

| Parameter   |  Description  |  Type  |  Example | 
| ------------------- | ------------------- | ------------------- | ------------------- |
|  style |  Style of main form | string | { style: 'background-color: red;' } |
|  fields |  Fields define the fields and parameters | array |  see above complete example |
|  type |  Type of the field | string |  text, email, date, number, checkbox , textarea, searchInput |
|  alias |  Unique identificator of the field | string |  --- |
|  label |  Label of field | string |  If not exist lable only show input field |
|  disable |  Disable of input | boolean |  if true the input became disabled |
|  placeholder |  Show text in imput | string | only util when input permit placeholder |
|  value |  Set default value in field | string |  ---- |
|  required |  Set if the field is requided | boolean  |  buy default is false|
|  maxLength |  Set size of field  | number  |   maxLength: 5 |
|  miniLength |  Set size of field  | number  |   miniLength: 5 |
|  pattern |  Set regex in field  | any  |   pattern:'[a-zA-Z ]*' |



 ### Example of configForm

  * Type and alias are mandatory

 ```typescript
    import { options } from 'angular-easy-form';
    
     export class YourComponent implements OnInit, AfterViewInit {
        ngOnInit() {
          const formCreator = options.formOptions();
          formCreator.matriz = [2];

          formCreator.field().text({
            type: 'text', alias: 'f1', label: 'Teste 1', disable: false, placeholder: 'oi',
            value: '', style: '', required: true
          });
          formCreator.field().text({
            type: 'text', alias: 'f2', label: 'Teste 2', disable: false, placeholder: 'oi',
            value: '', style: '', required: true
          });
          this.setConfig = formCreator.build();
      }
    

```

## The form automatically rendering



![alt tag](https://github.com/renatodysouza/easyform/blob/master/form.PNG)


### Events

The event object return ken with alias of field and value. Contain to if the field is valid and formGroup instance


 ```javascript
     f1: {
        formGroup: FormGroup,
        isValid: true,
        value: {f1: "yourValue"}

    }

```

## Compatible with Angular Ivy

  has not been processed correctly by ngcc, or is not compatible with Angular Ivy


  Resolve this:

  ```json
  package.json
    content_copy
    {
      "scripts": {
        "postinstall": "ngcc"
      }
    }

```

```node

  npm run postinstall


 ```

### License


This project is licensed under the terms of the [MIT license](/LICENSE).