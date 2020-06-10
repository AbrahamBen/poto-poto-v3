import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMereComponent } from './list-mere.component';

describe('ListMereComponent', () => {
  let component: ListMereComponent;
  let fixture: ComponentFixture<ListMereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
