import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigatorService } from '../../services/navigator.service';
import { DataStoreService } from 'src/app/services/datastore.service';
import { angularMaterialRenderers } from '@jsonforms/angular-material';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnDestroy {
  currentView: string = 'main';

  constructor(private navigator: NavigatorService, public datastore: DataStoreService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {}

  logout(): void {
    this.navigator.logout();
  }

  isAdmin(): boolean {
    let userInfo = this.datastore.getUserInfo();

    if (userInfo == null) {
      return false;
    }

    if (userInfo['group'] == 'root') {
      return true;
    }

    return false;
  }

  changeCurrentView(): void {
    this.datastore.changeCurrentView();
    this.navigator.changeCurrentView();
  }

  getCurrentView(): string {
    return this.datastore.getCurrentView();
  }



}
