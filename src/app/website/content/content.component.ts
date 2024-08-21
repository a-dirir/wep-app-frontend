import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigatorService } from '../../services/navigator.service';
import { DataStoreService } from 'src/app/services/datastore.service';
import { angularMaterialRenderers } from '@jsonforms/angular-material';
import { Subscription } from 'rxjs';

import * as customerModel from '../../models/forms/app/content';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnDestroy {
  formModel: any = customerModel.formModel;
  formUIModel: any = customerModel.formUIModel;
  formData: any;
  renderers: any = angularMaterialRenderers;
  
  domains: any[];
  currentDomain: string;
  private domainTypeSubscription: Subscription;

  currentView: string = 'main';

  constructor(private navigator: NavigatorService, public datastore: DataStoreService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Subscribe to domainType changes
    this.domainTypeSubscription = this.datastore.domainType$.subscribe(() => {
      this.domains = this.datastore.getDomainData();      
      this.populateForm();
    });
  }

  populateForm() {
    if (this.domains == null) {
      return;
    }
    this.datastore.setDomainName(this.domains[0]['Name']);
    this.formModel.properties['Domain'].enum = this.domains.map(domain => domain['Name']);
      this.currentDomain = this.datastore.getDomainName();
      this.formData = {'Domain': this.currentDomain};
  }


  ngOnDestroy(): void {
    // Unsubscribe to prevent memory leaks
    if (this.domainTypeSubscription) {
      this.domainTypeSubscription.unsubscribe();
    }
  }

  selectCustomer(event: any) {
    this.currentDomain = event.Domain;
    this.datastore.setDomainName(this.currentDomain);
  }

  logout(): void {
    this.navigator.logout();
  }

  isAdmin(): boolean {
    let userInfo = this.datastore.get_user_info();

    if (userInfo == null) {
      return false;
    }

    if (userInfo['group'] == 'admin') {
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
