export interface SelectTags {
    type: string;
    alias: string;
    setOptions: Array<any>;
    label?: string;
    disable?: boolean;
    startEmpty: boolean;
    value?: any;
    style?: string;
    required?: boolean;
}
