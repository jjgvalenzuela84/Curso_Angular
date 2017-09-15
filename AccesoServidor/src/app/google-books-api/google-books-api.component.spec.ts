import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleBooksApiComponent } from './google-books-api.component';

describe('GoogleBooksApiComponent', () => {
  let component: GoogleBooksApiComponent;
  let fixture: ComponentFixture<GoogleBooksApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleBooksApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleBooksApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
