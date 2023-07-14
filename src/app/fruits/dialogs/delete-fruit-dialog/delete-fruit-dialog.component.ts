import {Component, Input} from '@angular/core';
import {NbDialogRef} from "@nebular/theme";

@Component({
  selector: 'app-delete-fruit-dialog',
  templateUrl: './delete-fruit-dialog.component.html',
  styleUrls: ['./delete-fruit-dialog.component.scss']
})
export class DeleteFruitDialogComponent {
  @Input() fruit: any;

  constructor(protected dialogRef: NbDialogRef<DeleteFruitDialogComponent>) {}

  confirm(): void {
    this.dialogRef.close(true);
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}
