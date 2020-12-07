import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { AngularEasyFormService } from './angular-easy-form.service';

@Component({
  selector: 'lib-angular-easy-form',
  templateUrl: './angular-easy-form.component.html',
  styles: ['./angular-easy-form.component.css']
})
export class AngularEasyFormComponent implements OnInit {
  @Input() masterConfig: any;
  mockConfig = {
    style: 'background-color: red;',
    fields: [
      [
        { type: 'text', alias: 'f1', label: 'teste', disable: false, placeholder: '',
          value: '', style: '', required: false
        },
        { type: 'number', alias: 'f2', label: 'teste', disable: false, placeholder: '',
        value: '', style: '', required: false
        },
        { type: 'date', alias: 'f3', label: 'teste', disable: false, placeholder: '',
        value: '', style: '', required: false
        },
      ],

      [
        { type: 'select', alias: 'objs',
         setOptions: [ {id: 1, value: 'home'}, {id: 2, value: 'ball'}],
         label: 'Can select ', disable: false, startEmpty: true,
          value: '', style: '', required: true
        },
        { type: 'number', alias: 'f5', label: 'teste', disable: false, placeholder: '',
        value: '', style: '', required: false
        },
        { type: 'date', alias: 'f6', label: 'teste', disable: false, placeholder: '',
        value: '', style: '', required: false
        },
      ],

      [
        { type: 'textarea', alias: 'note', label: 'teste', disable: false, placeholder: '',
        value: '', style: 'width:570px;', required: false
        },
        
      ],

    ]
    
    
    
    
    
  }
  constructor(private easyFormService: AngularEasyFormService) { }

  ngOnInit(): void {
    // mock


  }

  ngOnChanges(changes: SimpleChanges): void {

    // this.easyFormService.setConfig(changes.masterConfig.currentValue());
  }

}
