import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAuthorComponent } from './add-edit-author.component';

describe('AddEditAuthorComponent', () => {
  let component: AddEditAuthorComponent;
  let fixture: ComponentFixture<AddEditAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
