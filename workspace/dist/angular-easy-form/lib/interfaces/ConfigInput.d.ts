import { FieldsAllTags } from "./FieldsAll";
export interface ConfigInput extends FieldsAllTags {
    setOptions?: Array<any>;
    placeholder?: string;
    startEmpty?: boolean;
    checked?: boolean;
    dataOptions?: any;
    valuePreselected?: any;
    valueData?: any;
    showedData?: any;
    validated?: boolean;
    miniLength?: number;
    maxLength?: number;
    pattern?: any;
    format?: string;
}
