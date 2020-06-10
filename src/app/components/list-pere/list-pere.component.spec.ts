import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPereComponent } from './list-pere.component';

describe('ListPereComponent', () => {
  let component: ListPereComponent;
  let fixture: ComponentFixture<ListPereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
