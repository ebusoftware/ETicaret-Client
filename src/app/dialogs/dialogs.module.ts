import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteDialogsComponent } from './delete-dialogs/delete-dialogs.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';



@NgModule({
  declarations: [
    DeleteDialogsComponent,
    DeleteDialogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DialogsModule { }
