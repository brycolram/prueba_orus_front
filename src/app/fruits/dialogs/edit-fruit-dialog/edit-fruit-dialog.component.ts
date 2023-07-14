import {Component, Input} from '@angular/core';
import {NbDialogRef} from "@nebular/theme";
import {FruitService} from "../../../services/fruit.service";

@Component({
  selector: 'app-edit-fruit-dialog',
  templateUrl: './edit-fruit-dialog.component.html',
  styleUrls: ['./edit-fruit-dialog.component.scss']
})
export class EditFruitDialogComponent {
  @Input() fruit: any;
  @Input() editMode: any;

  constructor(private fruitService: FruitService, protected dialogRef: NbDialogRef<EditFruitDialogComponent>) {
  }

  saveFruit(): void {
    if (this.editMode) {
      this.fruitService.updateFruit(this.fruit.id, this.fruit).subscribe(() => {
        this.dialogRef.close();
      });
    } else {
      this.fruitService.createFruit(this.fruit).subscribe(() => {
        this.dialogRef.close();
      });
    }
  }
}
