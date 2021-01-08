import { FieldsAllTags } from "./FieldsAll";

export interface SearchInputTags extends FieldsAllTags {
    dataOptions: Array<any>;
    placeholder?: string;
    valuePreselected?: string;
    validate?: boolean;
    valueData?: string;
    showedData?: string;
}
