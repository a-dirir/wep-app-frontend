import { Component, OnInit, AfterViewInit, ViewChild, Input, Output, EventEmitter} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { RequestService } from 'src/app/services/request.service';
import { TableComponent } from '../table/table.component';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { AlertComponent } from '../alert/alert.component';
import { MultiTablesComponent } from '../multi-tables/multi-tables.component';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit{
  @Input() crudInput: any;
  @Output() crudOutput = new EventEmitter<any>();
  @ViewChild(TableComponent) table:any;

  pageTitle: any;
  service: any;
  controller: any;
  tableModel: any;
  formModel: any;
  formUIModel: any;
  filter: any;

  data: any;
  originalData: any;
  cols: any;
  selctedRow: any;

  options: any = {};
  

  constructor(public request: RequestService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.pageTitle = this.crudInput.data['pageTitle'];
    this.service = this.crudInput.data['service'];
    this.controller = this.crudInput.data['controller'];
    this.tableModel = this.crudInput.data['dataModel'].tableModel;
    this.formModel = this.crudInput.data['dataModel'].formModel;
    this.formUIModel = this.crudInput.data['dataModel'].formUIModel;
    this.filter = this.crudInput.data['dataModel'].filterData || {};
    this.getData();
  }

  onTableOutput(event:any){
    let action = event.action;
    this.selctedRow = this.table.selection.selected[0];
    if(action == 'refresh'){
      this.getData();
    }
    else if(action == 'add'){
      this.openEditDialog("Create New ", {}, 'add');
    }
    else if(action == 'edit'){
      this.openEditDialog("Edit Existing ", event.data, 'edit');
    }
    else if(action == 'filter'){
      this.openFilterDialog();
    }
    else if(action == 'clearFilter'){
      this.filter = {};
      this.applyFilter();
    }
    else if(action == 'download'){
      let filteredData = this.getFilteredData();
      this.saveAsCSV(filteredData);
    }
    else if(action == 'delete'){
      this.confirmDelete(event.data);

    }else if(action == 'showLinkedRecords'){
      this.showLinkedRecords(event.data);
    }
    else{
      this.crudOutput.emit(event);
    }
  }


  updateIndex(){
     // add index key for each row
     this.originalData.forEach((row:any, index:number) => {
      row['position_123456789'] = index + 1;
    });
  }

  mapOptions(formData: any){
    for (let field in formData){
      if(this.options[field]){
        // find the key of the value in the options
        formData[field] = this.options[field][formData[field]]
      }
    }

    return formData;
  }

  remapOptions(formData: any){
    for (let field in formData){
      if(this.options[field]){
        // find the key of the value in the options
        formData[field] = Object.keys(this.options[field]).find(key => this.options[field][key] === formData[field]);
      }
    }

    return formData;
  }

  async getData(){
    let message = {
      "access": {
        "action": `${this.service}:${this.controller}:list`,
        "resource": "*",
    },
      'data': {}
    }

    try{
      let response = await this.request.sendRequest(message)

      this.originalData = response['msg']['data'];
      this.options = response['msg']['options'];
      this.updateIndex();
      this.applyFilter();      
    }
    catch(error){
      this.table.setData([]);
      this.alert('error', error);
    }
  }

  openEditDialog(formTitle:any, formData:any = {}, mode:any = 'add'){
    formData = this.mapOptions(formData); 
    const dialogRef = this.dialog.open(DynamicFormComponent, {
      width: 'auto',
      height: 'auto',
      data: {
        title: `${formTitle} ${this.pageTitle}`,
        formModel: this.formModel,
        formUIModel: this.formUIModel,
        tableModels: this.tableModel,
        formData: formData,
        options: this.options,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        result = this.remapOptions(result);
        if (mode == 'edit'){
          this.updateRow(result);
        }
        else{
          this.createRow(result);
        }
      }
    });
  }

  openFilterDialog() {
    let formTitle = 'Advanced Filtering For ';
    const dialogRef = this.dialog.open(DynamicFormComponent, {
      width: 'auto',
      height: 'auto',
      data: {
        title: `${formTitle} ${this.pageTitle}`,
        formModel: this.formModel,
        formUIModel: this.formUIModel,
        tableModels: this.tableModel,
        formData: this.filter,
        options: this.options,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        result = this.remapOptions(result);
        this.filter = result;
        this.applyFilter();
      }
    });
  }

  async createRow(formData: any){
    let message = {
      "access": {
        "action": `${this.service}:${this.controller}:create`,
        "resource": "*",
      },
      'data': {
        'input_data': formData
      }
    }

    try{
      let response = await this.request.sendRequest(message)
      let newData = response['msg']['data']['New Record'];

      this.alert('success',
        `${this.pageTitle} created successfully`, 
        [newData], this.tableModel.fields.map((field:any) => (field.label)));

      this.getData();
    }
    catch(error){
      this.alert('error', error);
    }
    
  }

  async updateRow(formData: any){
    let oldData = this.remapOptions(this.selctedRow);

    let message = {
      "access": {
        "action": `${this.service}:${this.controller}:update`,
        "resource": "*",
      },
      'data': {
        'index_data': oldData,
        'input_data': formData
      }
    }

    try{
      let response = await this.request.sendRequest(message)

      let oldData = response['msg']['data']['Old Record'];
      let newData = response['msg']['data']['New Record'];
      
      this.alert('success', 
        `${this.pageTitle} updated successfully`, 
        [{'Version': 'Old', ...oldData}, {'Version': 'New', ...newData}], 
        ['Version', ...this.tableModel.fields.map((field:any) => (field.label))]);
      
      this.getData();
    }
    catch(error){
      this.alert('error', error);
    }
    
  }

  confirmDelete(data: any): void {
    let message = `Are you sure you want to delete below data?`;

    let modifiedData: any = {};
    for(let key in data){
      let field = this.tableModel.fields.find((field:any) => field.id == key);
      if (field == undefined){
        continue;
      }
      modifiedData[field.label] = data[key];
    }

    const dialogRef = this.dialog.open(AlertComponent, {
      width: 'auto',
      data: { 
        type: 'confirm',
        message:  message,
        row: [modifiedData],
        col: this.tableModel.fields.map((field:any) => (field.label))
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.deleteRow(data);
      }
    });
  }

  async deleteRow(data:any){
    let message = {
      "access": {
        "action": `${this.service}:${this.controller}:delete`,
        "resource": "*",
      },
      'data': {
        'index_data': data
      }
    }

    try{
      let response = await this.request.sendRequest(message)
      let deletedData = response['msg']['data']['Deleted Records'];
      deletedData = this.mapOptions(deletedData);

      this.alert('success', 
        `${this.pageTitle} deleted successfully`, 
        [data], 
        this.tableModel.fields.map((field:any) => (field.label))
      );

      this.getData();
    }
    catch(error){
      this.alert('error', error);
    }
    
  }

  alert(type: string, message: any, rows: any = null, col: any = null): void {
    if (rows != null){
      var modifiedRows: any = [];
      for( let row of rows){
        let modifiedData: any = {};
        for(let key in row){
          let field = this.tableModel.fields.find((field:any) => field.id == key);
          if (field == undefined){
            modifiedData[key] = row[key]
          }else{
            modifiedData[field.label] = row[key];
          }
          
        }
        modifiedRows.push(modifiedData);
      }
    }else{
      var modifiedRows: any = null;
    }

    const dialogRef = this.dialog.open(AlertComponent, {
      width: 'auto',
      data: { 
        type: type,
        message:  message,
        row: modifiedRows,
        col: col
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {});
  }

  saveAsCSV(data: any){{
    //save the data into csv file for download
    let csvContent = "data:text/csv;charset=utf-8,";
    let csvData = data;
    
    // get the keys from id in tableModel.fields
    let keys:[] = this.tableModel.fields.map((field:any) => field.id);

    csvContent += keys.join(",") + "\n";
    csvData.forEach((row: any) => {
      let values = keys.map(key => {
        // trim the value to remove any spaces
        if(typeof row[key] == 'string'){
          return row[key].trim();
        }
        return row[key];
      });
      csvContent += values.join(",") + "\n";
    });

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${this.pageTitle}.csv`);
    document.body.appendChild(link); // Required for FF
    link.click(); // This will download the data file named "my_data.csv".
  }}

  getFilteredData(){
    let filter = this.filter;
    let filteredData = this.originalData.filter((row:any) => {
      for(let field in filter){
        if(row[field] != filter[field] && filter[field] != ''){
          return false;
        }
      }
      return true;
    });

    return filteredData;
  }

  applyFilter() {
    this.data = this.getFilteredData();
    this.table.setData(this.data);
  }

  async showLinkedRecords(data: any) {
    let message = {
      "access": {
        "action": `Common:RecordsLinker:list`,
        "resource": `${this.service}:${this.controller}`,
      },
      'data': {
        'index_data': data
      }
    }

    try{
      let response = await this.request.sendRequest(message)

      response = response['msg']

      const dialogRef = this.dialog.open(MultiTablesComponent, {
        width: 'auto',
        height: 'auto',
        data: {
          title: `${this.pageTitle} Linked Records`,
          data: response['data'],
          tablesSequence: response['tables_sequence'],
          columnsOrder: response['columns_order'],
        },
      });

      dialogRef.afterClosed().subscribe(result => {});

    }
    catch(error){
      this.alert('error', error);
    }
  }


}
