import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOutilComponent } from './search-outil.component';

describe('SearchOutilComponent', () => {
  let component: SearchOutilComponent;
  let fixture: ComponentFixture<SearchOutilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchOutilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchOutilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
