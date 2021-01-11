import { FieldsAllTags } from "./FieldsAll";

export interface DateTags extends FieldsAllTags {
    placeholder?: string;
    max?: number;
    min?: number;
    step?: number;
    format?: string;
}
