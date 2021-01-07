import { CheckBoxTags } from '../interfaces/CheckBoxTags';
import { DateTags } from '../interfaces/DateTags';
import { NumberTags } from '../interfaces/NumberTags';
import { SearchInputTags } from '../interfaces/SearchInputTags';
import { SelectTags } from '../interfaces/Select';
import { TextAreaTags } from '../interfaces/TexAreaTags';
import { TextTags } from '../interfaces/TexTags';
export declare class Fields {
    allFields: any;
    text(settings: TextTags): void;
    number(settings: NumberTags): void;
    textArea(settings: TextAreaTags): void;
    date(settings: DateTags): void;
    select(settings: SelectTags): void;
    checkbox(settings: CheckBoxTags): void;
    searchInput(settings: SearchInputTags): void;
    getFields(): any;
}
