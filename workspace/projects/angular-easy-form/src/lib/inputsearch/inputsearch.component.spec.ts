import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InputsearchComponent } from './inputsearch.component';

xdescribe('InputsearchComponent', () => {
  let component: InputsearchComponent;
  let fixture: ComponentFixture<InputsearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InputsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
