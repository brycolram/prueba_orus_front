import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFruitDialogComponent } from './edit-fruit-dialog.component';

describe('EditFruitDialogComponent', () => {
  let component: EditFruitDialogComponent;
  let fixture: ComponentFixture<EditFruitDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFruitDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFruitDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
