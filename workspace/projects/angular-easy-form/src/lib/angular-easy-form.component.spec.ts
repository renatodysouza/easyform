import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularEasyFormComponent } from './angular-easy-form.component';
import { ThemeConfig } from './config/config';

class ThemConfigMock {

}

describe('AngularEasyFormComponent', () => {
  let component: AngularEasyFormComponent;
  let fixture: ComponentFixture<AngularEasyFormComponent>;
  let themeConfigMock: ThemConfigMock;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularEasyFormComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: ThemConfigMock, useValue: themeConfigMock },

      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularEasyFormComponent);
    themeConfigMock = new ThemConfigMock();
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should formOptions() return themeConfigMock ', () => {
    expect(component.formOptions()).toBeInstanceOf(ThemeConfig);
  });

  it('should agregateResult is called when eventGroupFields is called', () => {
    const spy = spyOn(component, 'agregateResult');
    component.eventGroupFields(['mock']);
    expect(spy).toHaveBeenCalled();
  });

  it('should allFields return same object when agregateResult is called', () => {
    component.agregateResult({field1: {value: 'mock', isValid: true}});
    expect(component.allFields).toEqual({field1: {value: 'mock', isValid: true}});
  });

  it('should masterConfig.fields return same object when populateGroup is called', () => {
    component.populateGroup([{field1: {value: 'mock', isValid: true}}]);
    expect(component.masterConfig.fields).toEqual([{field1: {value: 'mock', isValid: true}}]);
  });

  it('should showGroups equal true when populateGroup is called', () => {
    component.populateGroup([{field1: {value: 'mock', isValid: true}}]);
    expect(component.showGroups).toBeTruthy();
  });

});
