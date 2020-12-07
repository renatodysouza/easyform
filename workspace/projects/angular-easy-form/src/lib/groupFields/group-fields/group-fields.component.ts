import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-group-fields',
  templateUrl: './group-fields.component.html',
  styleUrls: ['./group-fields.component.css']
})
export class GroupFieldsComponent implements OnInit {
  @Input() configGroup: any;

  constructor() { }

  ngOnInit(): void {
  }

}
