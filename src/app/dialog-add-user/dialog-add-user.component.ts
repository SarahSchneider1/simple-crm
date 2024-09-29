import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms'; // Für [(ngModel)] benötigt
import { MatFormFieldModule } from '@angular/material/form-field'; // Für Material FormField
import { MatInputModule } from '@angular/material/input'; // Für MatInput
import { MatButtonModule } from '@angular/material/button'; // Für MatButton
import { MatDialogModule } from '@angular/material/dialog'; // Für Dialogmodule
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule, 
    MatDialogModule, 
    FormsModule,
    MatDatepickerModule
  ]
})
export class DialogAddUserComponent {
  animal: string = '';  // Variable für das Lieblings-Tier

  constructor(
    public dialogRef: MatDialogRef<DialogAddUserComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: { name: string }
  ) {}

  // Methode, um den Dialog zu schließen
  onNoClick(): void {
    this.dialogRef.close();
  }
}
