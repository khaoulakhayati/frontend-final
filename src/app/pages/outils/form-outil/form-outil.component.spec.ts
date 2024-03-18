import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOutilComponent } from './form-outil.component';

describe('FormOutilComponent', () => {
  let component: FormOutilComponent;
  let fixture: ComponentFixture<FormOutilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormOutilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormOutilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
