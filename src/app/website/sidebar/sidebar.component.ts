import { Component, OnInit } from '@angular/core';
import { Observable,Subject, Subscription } from 'rxjs';
import { NavigatorService } from '../../services/navigator.service';
import { DataStoreService } from 'src/app/services/datastore.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  usergroup: any;
  routes: any = [];
  currentRoute: any;
  expandedUrls: any = [];

  private currentViewSubscription: Subscription;

  constructor(private navigator: NavigatorService, public datastore: DataStoreService) {
    this.usergroup = this.datastore.get_user_info()['group'];
    this.routes = this.datastore.getRoutes();
    this.currentRoute = this.navigator.getCurrentRoute();
   }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Subscribe to domainType changes
    this.currentViewSubscription = this.datastore.currentView$.subscribe(() => {
      this.currentRoute = this.navigator.getCurrentRoute();
      this.routes = this.datastore.getRoutes();
    });
  }

  primaryRouteClicked(primaryRoute: any, active: boolean, domain: string) {
    if (!active){
      return;
    }
    this.datastore.changeDomainType(domain);
    this.navigator.primaryClicked(primaryRoute);
    this.routes = this.datastore.getRoutes();
    this.currentRoute = this.navigator.getCurrentRoute();
  }

  secondaryRouteClicked(secondaryRoute: string, primaryRoute:string, active: boolean, domain: string)  {
    this.expandeSecondaryRoute(secondaryRoute, primaryRoute);
    if (!active){
      return;
    }

    this.datastore.changeDomainType(domain);
    this.navigator.secondaryClicked(secondaryRoute, primaryRoute);
    this.currentRoute = this.navigator.getCurrentRoute();
  }

  expandeSecondaryRoute(secondaryRoute: string, primaryRoute:string)  {
    if (this.expandedUrls.includes(primaryRoute + secondaryRoute)) {
      this.expandedUrls = this.expandedUrls.filter((url: string) => url !== primaryRoute + secondaryRoute);
    } else {
      this.expandedUrls.push(primaryRoute + secondaryRoute);
    }
    
  }

  tertiaryRouteClicked(event:any, tertiaryRoute: string, secondaryRoute: string, active: boolean, domain: string) {
    if (!active){
      return;
    }
    event.stopPropagation();
    this.datastore.changeDomainType(domain);
    this.navigator.tertiaryClicked(tertiaryRoute, secondaryRoute);
    this.currentRoute = this.navigator.getCurrentRoute();
  }

  isExpanded(secondaryRoute: string, primaryRoute: string) {
    return this.expandedUrls.includes(primaryRoute + secondaryRoute);
  }

}
