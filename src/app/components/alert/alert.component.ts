import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';


// create a component to display an alert dialog
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<any>) {
  }

  getTitleColor(): string {
    switch (this.data.type) {
      case 'info':
        return '#2196F3'; // Blue
      case 'success':
        return '#4CAF50'; // Green
      case 'error':
        return '#F44336'; // Red
      case 'confirm':
        return '#F44336'; // Red
      default:
        return '#000000'; // Default color
    }
  }

  closeDialogWithData(): void {
    this.dialogRef.close({ confirmed: true });
  }

  
  
}
