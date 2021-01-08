import { Fields } from './fields';
export declare class Config {
    fields: Fields;
    styleGlobal: any;
    config: any;
    fieldsClass: Fields;
    fieldsBuilded: Array<any>;
    matriz: Array<number>;
    fieldsIteration: Array<any>;
    constructor(fields: Fields);
    generateMatriz(): void;
    decreaseFields(): any[];
    buildingFields(quantityOfFields: number): any[];
    field(): Fields;
    build(): any[];
}
