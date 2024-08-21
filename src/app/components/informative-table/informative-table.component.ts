import { Component, Input, ViewChild, ViewChildren, QueryList, AfterViewInit, OnChanges, SimpleChanges} from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

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
      } else {
      }
      // Handle the change in data
    }

  }

  formatData(data: any) {
    let new_data = []
    if (data.length <= 4) {
      return data;
    }

    // push only first two rows, one row showing ... for each key, and the last two rows
    new_data.push(data[0]);
    
    let row:any = {}
    for (let key of this.cols) {
      row[key] = '...';
    }
    new_data.push(row);

    new_data.push(data[data.length - 2-1]);

    return new_data;
  }


}
