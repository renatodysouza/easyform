import { FieldsAllTags } from "./FieldsAll";

export interface SelectTags extends FieldsAllTags {
    setOptions: Array<any>;
    startEmpty: boolean;
}
