import {Component} from '@angular/core';
import {FruitService} from "../services/fruit.service";
import {NbDialogService, NbToastrService} from "@nebular/theme";
import {OrdersService} from "../services/orders.service";
import {EditFruitDialogComponent} from "../fruits/dialogs/edit-fruit-dialog/edit-fruit-dialog.component";
import {CreateOrderDialogComponent} from "./dialogs/create-order-dialog/create-order-dialog.component";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  orders: any[] = [];
  currentPage = 1;
  itemsPerPage = 5;
  OrdeSelected: any;
  showOrder: boolean = false;

  constructor(private orderService: OrdersService, private toastrService: NbToastrService, private dialogService: NbDialogService,
  ) {
  }

  ngOnInit() {
    this.loadOrders();

  }

  loadOrders(): void {
    this.orderService.getOrders()
      .subscribe(
        data => {
          this.orders = data.data;
        },
        error => {
          this.toastrService.danger('Error al cargar las frutas', 'Error');
        }
      );
  }
  openCreateModal(): void {
    const dialogRef= this.dialogService.open(CreateOrderDialogComponent, {
      context: {
      }
    });
    dialogRef.onClose.subscribe((created: boolean) => {
      if (created) {
        this.loadOrders();
      }
    });
  }
  showOrderSelected(order: any): void {
    this.OrdeSelected = order;
    this.showOrder = true;
  }
}
