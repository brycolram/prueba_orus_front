import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FruitsRoutingModule } from './fruits-routing.module';
import { FruitsComponent } from './fruits.component';
import {
  NbButtonModule,
  NbCardModule,
  NbDialogModule, NbIconModule,
  NbInputModule, NbLayoutModule,
  NbSearchModule, NbTooltipModule,
  NbTreeGridModule
} from "@nebular/theme";
import { NgxPaginationModule } from 'ngx-pagination'
import { EditFruitDialogComponent } from './dialogs/edit-fruit-dialog/edit-fruit-dialog.component';
import {FormsModule} from "@angular/forms";
import { DeleteFruitDialogComponent } from './dialogs/delete-fruit-dialog/delete-fruit-dialog.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    FruitsComponent,
    EditFruitDialogComponent,
    DeleteFruitDialogComponent
  ],
  imports: [
    CommonModule,
    FruitsRoutingModule,
    NbDialogModule.forRoot(),
    NbInputModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    NbCardModule,
    NbTreeGridModule,
    NbSearchModule,
    FormsModule,
    NbButtonModule,
    NbTooltipModule,
    NbIconModule,
    NbLayoutModule,
  ]
})
export class FruitsModule { }
