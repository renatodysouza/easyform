import { FieldsAllTags } from "./FieldsAll";
export interface NumberTags extends FieldsAllTags {
    placeholder?: string;
    style?: string;
    max?: number;
    min?: number;
    step?: number;
}
