import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

import { RequestService } from './request.service';
import { DataStoreService } from './datastore.service';

// create a service to handle routing between components and pages in the application
@Injectable({
  providedIn: 'root'
})
export class NavigatorService {
    currentRoute: any = {"primary": "employees", "secondary": "", "tertiary": "" };


    constructor(private router: Router, public request: RequestService, public datastore: DataStoreService) {
        this.checkStatus();
    }

    getCurrentRoute() {
        return this.currentRoute;
    }

    async checkStatus() {
        if (this.datastore.getUserInfo() != null){
            return true;
        }

        try{
            let response = await this.request.sendRequest({},{}, 'status', 'POST')
            this.datastore.setUserInfo(response['msg']['userInfo']);
            this.performRouting();
            return true;
      
          }
          catch(error){
            this.datastore.clear();
            return false;
          }
    }

    logout() {
        try{
            this.request.sendRequest({}, {}, 'logout', 'POST').then((response: any) => {
                this.datastore.clear()
                // use window location to redirect to login page
                this.router.navigate(['login']);
            });
        }
        catch(error){
            this.datastore.clear()
            // use window location to redirect to login page
            this.router.navigate(['login']);
        }
        
    }

    primaryClicked(primary: string) {
        this.currentRoute["primary"] = primary;
        this.currentRoute["secondary"] = "";
        this.currentRoute["tertiary"] = "";

        this.performRouting();
    }

    secondaryClicked(secondary: string, primary: string) {
        this.currentRoute["secondary"] = secondary;
        this.currentRoute["tertiary"] = "";
        this.currentRoute["primary"] = primary;

        this.performRouting();
    }

    tertiaryClicked(tertiary: string, secondary: string) {
        this.currentRoute["tertiary"] = tertiary;
        this.currentRoute["secondary"] = secondary;

        this.performRouting();
    }

    performRouting() {
        if (this.currentRoute['tertiary'] != ""){
            this.router.navigate([this.currentRoute['tertiary']]);
        }

        else if (this.currentRoute['secondary'] != ""){
            this.router.navigate([this.currentRoute['secondary']]);
        }

        else if (this.currentRoute['primary'] != ""){
            this.router.navigate([this.currentRoute['primary']]);
        }
    }

    changeCurrentView() {
        if(this.datastore.getCurrentView() == 'admin'){
            this.currentRoute = {"primary": "admin/iam", "secondary": "admin/iam/users", "tertiary": "" };
        }
        else{
            this.currentRoute = {"primary": "employees", "secondary": "", "tertiary": "" };
        }
        this.performRouting();
    }
}
