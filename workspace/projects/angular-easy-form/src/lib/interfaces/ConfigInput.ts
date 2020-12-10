

export interface ConfigInput {
    type: string,
    alias: string,
    label?: string,
    setOptions: Array<any>,
    startEmpty?: boolean,
    disable?: boolean,
    placeholder?: string,
    value?: any,
    style?: string
    required?: boolean,
    checked?: boolean,
    dataOptions: any,
    valuePreselected?: any,
    valueData?: any,
    showedData?: any,
    validated?: boolean
  }