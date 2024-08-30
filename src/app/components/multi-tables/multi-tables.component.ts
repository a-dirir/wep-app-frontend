import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-multi-tables',
  templateUrl: './multi-tables.component.html',
  styleUrls: ['./multi-tables.component.css']
})
export class MultiTablesComponent {

    title: any;
    tables_sequence: any;
    data_records: any;
    columns_order: any;

    constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any, private dialogRef: MatDialogRef<MultiTablesComponent>) {
      this.title = dialogData.title;
      this.tables_sequence = dialogData.tablesSequence;
      this.data_records = dialogData.data;
      this.columns_order = dialogData.columnsOrder;
    }

    closeDialogWithData(): void {
      this.dialogRef.close({});
    }

}
