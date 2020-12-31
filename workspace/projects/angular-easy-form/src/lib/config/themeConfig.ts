import { Injectable } from '@angular/core';
import { Fields } from './fields';



@Injectable({
  providedIn: 'root'
})
export class ThemeConfig {
  styleGlobal: any;
  config: any;
  fieldsClass;
  fieldsBuilded: Array<any> = [];
  matriz!: Array<number>;
  fieldsIteration!: Array<any>;

  constructor(public fields: Fields) {
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

  buildingFields(quantityOfFields: number) {
    const fieldsBuild: Array<any> = [];
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
