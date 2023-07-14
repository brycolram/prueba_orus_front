import {Component} from '@angular/core';
import {NbDialogService, NbSortDirection, NbSortRequest, NbToastrService} from '@nebular/theme';
import {FruitService} from "../services/fruit.service";
import {DeleteFruitDialogComponent} from "./dialogs/delete-fruit-dialog/delete-fruit-dialog.component";
import {EditFruitDialogComponent} from "./dialogs/edit-fruit-dialog/edit-fruit-dialog.component";

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})


export class FruitsComponent {
  fruits: any[] = [];
  currentPage = 1;
  itemsPerPage = 5;
  searchText: string = '';

  constructor(private fruitService: FruitService, private toastrService: NbToastrService, private dialogService: NbDialogService,
  ) {
  }

  ngOnInit() {
    this.loadFruits();

  }


  loadFruits(): void {
    this.fruitService.getFruits()
      .subscribe(
        data => {
          this.fruits = data.data;
        },
        error => {
          this.toastrService.danger('Error al cargar las frutas', 'Error');
        }
      );
  }

  openCreateModal(): void {
    this.dialogService.open(EditFruitDialogComponent, {
      context: {
        editMode: false,
        fruit: {}
      }
    });
  }

  openEditModal(fruit: any): void {
    this.dialogService.open(EditFruitDialogComponent, {
      context: {
        editMode: true,
        fruit
      }
    });
  }

  deleteFruit(fruit: any): void {
    const dialogRef = this.dialogService.open(DeleteFruitDialogComponent, {
      context: {fruit: {...fruit}}
    });

    dialogRef.onClose.subscribe((confirm: boolean) => {
      if (confirm) {
        this.fruitService.deleteFruit(fruit).subscribe(
          () => {
            this.toastrService.success('Fruta eliminada exitosamente', 'Éxito');
            this.loadFruits();
          },
          error => {
            this.toastrService.danger('Error al eliminar la fruta', 'Error');
          }
        );
        console.log('Fruta eliminada:', fruit);
      }
    });
  }

}
