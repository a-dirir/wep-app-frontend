import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crud-table-page',
  templateUrl: './crud-table-page.component.html',
  styleUrls: ['./crud-table-page.component.css']
})
export class CrudTablePageComponent {
  crudInput:any

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.crudInput = this.route.snapshot;
  }

  onCrudOutput(event:any){
  }
}
