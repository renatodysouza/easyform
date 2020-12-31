import { CheckBoxTags } from './CheckBoxTags';
import { DateTags } from './DateTags';
import { NumberTags } from './NumberTags';
import { SearchInputTags } from './SearchInputTags';
import { SelectTags } from './Select';
import { TextAreaTags } from './TexAreaTags';
import { TextTags } from './TexTags';

export interface Fields {
    text(settings: TextTags): void;
    select(settings: SelectTags): void;
    date(settings: DateTags): void;
    textArea(settings: TextAreaTags): void;
    number(settings: NumberTags): void;
    checkbox(settings: CheckBoxTags): void;
    searchInput(settings: SearchInputTags): void;
}

export interface FormOptions {
    matriz: Array<any>;
    field(): Fields;
    build(): any;
}

export interface ThemeConfig {
    formOptions(): FormOptions;
    populateGroup(populate: any): any;
}
