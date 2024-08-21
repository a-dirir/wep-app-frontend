import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  showTable: boolean = true
  selectionDisabled: boolean = false

  @Input() tableInput: any
  @Output() tableOutput: any = new EventEmitter<any>();

  dataSource: MatTableDataSource<any>;
  selection = new SelectionModel<any>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  id: string = ''
  data: any = []
  actions: any = {}
  dynamicActions: any = []
  fields: any = {}
  cols: string[] = [];
  colsPartial: any = [];


  constructor() {
   }

  ngOnInit(): void {
    this.id = 'Simple-CRUD-Table';
    this.actions = this.tableInput['actions']
    this.dynamicActions = this.tableInput['dynamicActions']
    this.fields = this.tableInput['fields'];
  }

  setData(data:any){
    if(data.length == 0){
      this.showTable = false;
      return
    }

    this.showTable = true;
    this.data = data;

    // get rows where shown property is true
    this.colsPartial = this.fields.filter((row:any) => {
      return row['shown'] == true;
    });

    // get name field from rows
    this.cols = this.colsPartial.map((row:any) => {
      return row['id'];
    });

    // add select column at the beginning of cols
    this.cols.unshift('select_123456789');

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.data);

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  refresh(){
    this.tableOutput.emit({
      id: this.id,
      action: 'refresh',
      data: null
    });
  }
  
  add(){
    this.tableOutput.emit({
      id: this.id,
      action: 'add',
      data: null
    });
  }

  edit(){
    // get selected rows
    let selected_rows = this.selection.selected;
    
    // check if any rows are selected
    if (selected_rows.length != 1){
      alert('Please select one row to edit.');
      return;
    }
    
    this.tableOutput.emit({
      id: this.id,
      action: 'edit',
      data: selected_rows[0]
    });

    this.selection.clear();
  }

  filter(){
    this.tableOutput.emit({
      id: this.id,
      action: 'filter',
      data: null
    });
  }

  clearFilter(event: any){
    event.preventDefault()
    this.tableOutput.emit({
      id: this.id,
      action: 'clearFilter',
      data: null
    });
  }

  download(){
    this.tableOutput.emit({
      id: this.id,
      action: 'download',
      data: null
    });
  }

  showLinkedServices(){
    // get selected rows
    let selected_rows = this.selection.selected;
    
    // check if any rows are selected
    if (selected_rows.length != 1){
      alert('Please select one row to show linked services.');
      return;
    }

    this.tableOutput.emit({
      id: this.id,
      action: 'showLinkedServices',
      data: selected_rows[0]
    });

    this.selection.clear();
  }

  deleteRow(){
     // get selected rows
     let selected_rows = this.selection.selected;

    // check if any rows are selected
    if (selected_rows.length != 1){
      alert('select one row only');
      return;
    }

    this.tableOutput.emit({
      id: this.id,
      action: 'delete',
      data: selected_rows[0]
    });

    this.selection.clear();
  }

  runDynamicAction(action:any){
    let selected_rows = this.selection.selected;
    
    // check if any rows are selected
    if (selected_rows.length != 1){
      alert('Please select one row.');
      return;
    }

    this.tableOutput.emit({
      id: this.id,
      action: action,
      data: selected_rows[0]
    });

    this.selection.clear();
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }


}
