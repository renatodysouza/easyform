import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularEasyFormComponent } from './angular-easy-form.component';

describe('AngularEasyFormComponent', () => {
  let component: AngularEasyFormComponent;
  let fixture: ComponentFixture<AngularEasyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularEasyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularEasyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
