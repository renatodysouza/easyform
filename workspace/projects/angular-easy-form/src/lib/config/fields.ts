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
    this.allFields.push(settings);
  }

  number(settings: NumberTags) {
    this.allFields.push(settings);
  }

  textArea(settings: TextAreaTags) {
    this.allFields.push(settings);
  }

  date(settings: DateTags) {
    this.allFields.push(settings);
  }

  select(settings: SelectTags) {
    this.allFields.push(settings);
  }

  checkbox(settings: CheckBoxTags) {
    this.allFields.push(settings);
  }

  searchInput(settings: SearchInputTags) {
    this.allFields.push(settings);
  }

  getFields() {
    return this.allFields;
  }
}
