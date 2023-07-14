import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrdersRoutingModule} from './orders-routing.module';
import {OrdersComponent} from './orders.component';
import {
  NbButtonModule,
  NbCardModule,
  NbDialogModule,
  NbIconModule,
  NbInputModule, NbSelectWithAutocompleteModule,
  NbTooltipModule
} from "@nebular/theme";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {NgxPaginationModule} from "ngx-pagination";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateOrderDialogComponent } from './dialogs/create-order-dialog/create-order-dialog.component';


@NgModule({
  declarations: [
    OrdersComponent,
    CreateOrderDialogComponent
  ],
  imports: [
    CommonModule,
    NbDialogModule.forRoot(),
    OrdersRoutingModule,
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbTooltipModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    NbInputModule,
    FormsModule,
    NbSelectWithAutocompleteModule
  ]
})
export class OrdersModule {
}
