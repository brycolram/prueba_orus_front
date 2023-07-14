import {Component} from '@angular/core';
import {FruitService} from "../../../services/fruit.service";
import {NbDialogRef, NbToastrService} from "@nebular/theme";
import {OrdersService} from "../../../services/orders.service";

@Component({
  selector: 'app-create-order-dialog',
  templateUrl: './create-order-dialog.component.html',
  styleUrls: ['./create-order-dialog.component.scss']
})
export class CreateOrderDialogComponent {
  fruits: any[] = [];
  listFruitsForSelected: any[] = [];
  selectedFruit: any;

  constructor(private fruitService: FruitService, private orderService: OrdersService, private toastrService: NbToastrService, protected dialogRef: NbDialogRef<CreateOrderDialogComponent>) {
  }

  ngOnInit() {
    this.loadFruits();

  }

  loadFruits(): void {
    this.fruitService.getFruits()
      .subscribe(
        data => {
          this.listFruitsForSelected = data.data;
          // console.log(this.listFruitsForSelected[1])
          if (data.data.size > 0)
            this.selectedFruit = this.listFruitsForSelected[1]
        },
        error => {
          this.toastrService.danger('Error al cargar las frutas', 'Error');
        }
      );
  }

  addFruit(): void {
    console.log("type", typeof (this.selectedFruit))
    if (typeof (this.selectedFruit) === "object") {
      const duplicateFruit = this.fruits.find(fruit => fruit.id === this.selectedFruit.id);

      if (!duplicateFruit) {
        this.fruits.push({...this.selectedFruit, quantity: 1});
      }
    }
  }

  removeFruit(index: number): void {
    this.fruits.splice(index, 1);
  }

  fruitSelected(selected: any): void {

    this.fruitSelected = selected
  }

  submitForm(): void {
    this.orderService.createOrder({"fruits":this.fruits}).subscribe(
      (response: any) => {
        console.log("response",response)
        if(response.success) {
          this.dialogRef.close(true);
          this.toastrService.success('Orden creada', 'Éxito: ' + response.message);
        }else{
          this.toastrService.danger(response.message, 'Error');
        }
      },
      (error: any) => {
        this.toastrService.danger('Error al crear la orden', 'Error');
      }
    );
  }
}
