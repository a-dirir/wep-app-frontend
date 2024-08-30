import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
    this.usergroup = this.datastore.getUserInfo()['group'];
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

  ngOnDestroy() {
    // Unsubscribe from domainType changes
    this.currentViewSubscription.unsubscribe();
  }

  primaryRouteClicked(primaryRoute: any, active: boolean) {
    if (!active){
      return;
    }
    this.navigator.primaryClicked(primaryRoute);
    this.routes = this.datastore.getRoutes();
    this.currentRoute = this.navigator.getCurrentRoute();
  }

  secondaryRouteClicked(secondaryRoute: string, primaryRoute:string, active: boolean)  {
    this.expandeSecondaryRoute(secondaryRoute, primaryRoute);
    if (!active){
      return;
    }

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

  tertiaryRouteClicked(event:any, tertiaryRoute: string, secondaryRoute: string, active: boolean) {
    if (!active){
      return;
    }
    event.stopPropagation();
    this.navigator.tertiaryClicked(tertiaryRoute, secondaryRoute);
    this.currentRoute = this.navigator.getCurrentRoute();
  }

  isExpanded(secondaryRoute: string, primaryRoute: string) {
    return this.expandedUrls.includes(primaryRoute + secondaryRoute);
  }

}
