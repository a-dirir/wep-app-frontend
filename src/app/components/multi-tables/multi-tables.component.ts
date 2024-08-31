import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';


// class to display multiple tables in a dialog
@Component({
  selector: 'app-multi-tables',
  templateUrl: './multi-tables.component.html',
  styleUrls: ['./multi-tables.component.css']
})
export class MultiTablesComponent {

    title: any;
    tablesSequence: any;
    dataRecords: any;
    columnsOrder: any;

    constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any, private dialogRef: MatDialogRef<MultiTablesComponent>) {
      this.title = dialogData.title;
      this.tablesSequence = dialogData.tablesSequence;
      this.dataRecords = dialogData.data;
      this.columnsOrder = dialogData.columnsOrder;
    }

    closeDialogWithData(): void {
      this.dialogRef.close({});
    }

}
