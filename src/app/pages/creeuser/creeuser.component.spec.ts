import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreeuserComponent } from './creeuser.component';

describe('CreeuserComponent', () => {
  let component: CreeuserComponent;
  let fixture: ComponentFixture<CreeuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreeuserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreeuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
