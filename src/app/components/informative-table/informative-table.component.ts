import { Component, Input, ViewChild, ViewChildren, QueryList, AfterViewInit, OnChanges, SimpleChanges} from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

// create a component to display an informative table
@Component({
  selector: 'app-informative-table',
  templateUrl: './informative-table.component.html',
  styleUrls: ['./informative-table.component.css']
})
export class InformativeTableComponent {
  @Input() data: any
  @Input() cols: any

  dataSource: MatTableDataSource<any>;
  @ViewChildren(MatPaginator) paginator: QueryList<MatPaginator>;
  @ViewChildren(MatSort) sort: QueryList<MatSort>;

  ngAfterViewInit() {
    // Check if paginator and sort arrays are not empty
    if (this.paginator && this.paginator.length > 0 && this.sort && this.sort.length > 0) {
      this.dataSource.paginator = this.paginator.toArray()[0];
      this.dataSource.sort = this.sort.toArray()[0];
    } else {
    }
  }
  

  ngOnChanges(changes: any) {
    if (changes.data) {
      this.dataSource = new MatTableDataSource(this.data);
      
      // Check if paginator and sort arrays are not empty
      if (this.paginator && this.paginator.length > 0 && this.sort && this.sort.length > 0) {
        this.dataSource.paginator = this.paginator.toArray()[0];
        this.dataSource.sort = this.sort.toArray()[0];
      } 
    }

  }

}
