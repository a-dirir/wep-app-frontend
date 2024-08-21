import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer.base',
  templateUrl: './customer.base.component.html',
  styleUrls: ['./customer.base.component.css']
})
export class CustomerBaseComponent {
  crudInput:any

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.crudInput = this.route.snapshot;
  }

  onCrudOutput(event:any){
  }
}
