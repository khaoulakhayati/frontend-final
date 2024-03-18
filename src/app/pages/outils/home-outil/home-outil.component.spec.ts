import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOutilComponent } from './home-outil.component';

describe('HomeOutilComponent', () => {
  let component: HomeOutilComponent;
  let fixture: ComponentFixture<HomeOutilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeOutilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeOutilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
