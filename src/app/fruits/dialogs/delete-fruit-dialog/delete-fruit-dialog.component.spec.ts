import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFruitDialogComponent } from './delete-fruit-dialog.component';

describe('DeleteFruitDialogComponent', () => {
  let component: DeleteFruitDialogComponent;
  let fixture: ComponentFixture<DeleteFruitDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteFruitDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteFruitDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
