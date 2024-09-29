import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTooltipModule, MatDialogModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']  // styleUrls korrigiert
})
export class UserComponent {
  constructor(public dialog: MatDialog) { }  // MatDialog richtig geschrieben

  openDialog() {
   this.dialog.open(DialogAddUserComponent);
  }
}
