export interface ConfigInput {
    type: string;
    alias: string;
    label?: string;
    disable?: boolean;
    setOptions?: Array<any>;
    placeholder?: string;
    startEmpty?: boolean;
    value?: any;
    style?: string;
    required?: boolean;
    checked?: boolean;
    dataOptions?: any;
    valuePreselected?: any;
    valueData?: any;
    showedData?: any;
    validated?: boolean;
}
