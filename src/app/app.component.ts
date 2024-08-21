import { Component } from '@angular/core';
import { DataStoreService } from './services/datastore.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public datastore: DataStoreService) {
  }
}
