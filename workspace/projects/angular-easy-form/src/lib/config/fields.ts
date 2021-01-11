import { Injectable } from '@angular/core';
import { CheckBoxTags } from '../interfaces/CheckBoxTags';
import { DateTags } from '../interfaces/DateTags';
import { NumberTags } from '../interfaces/NumberTags';
import { SearchInputTags } from '../interfaces/SearchInputTags';
import { SelectTags } from '../interfaces/Select';
import { TextAreaTags } from '../interfaces/TexAreaTags';
import { TextTags } from '../interfaces/TexTags';


@Injectable({
  providedIn: 'root'
})
export class Fields {
  allFields: any = [];

  text(settings: TextTags) {
    settings.type = 'text';
    this.allFields.push(settings);
  }

  number(settings: NumberTags) {
    settings.type = 'number';
    this.allFields.push(settings);
  }

  textArea(settings: TextAreaTags) {
    settings.type = 'textArea';
    this.allFields.push(settings);
  }

  date(settings: DateTags) {
    settings.type = 'date';
    this.allFields.push(settings);
  }

  select(settings: SelectTags) {
    settings.type = 'select';
    this.allFields.push(settings);
  }

  checkbox(settings: CheckBoxTags) {
    settings.type = 'checkbox';
    this.allFields.push(settings);
  }

  searchInput(settings: SearchInputTags) {
    settings.type = 'searchInput';
    this.allFields.push(settings);
  }

  getFields() {
    return this.allFields;
  }
}
