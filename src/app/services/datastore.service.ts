import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { mainRoutes, adminRoutes } from '../website/config/config';
import { RequestService } from './request.service';


// create a service to store data and share it between components
@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  userInfo: any = null;
  
  private _currentView: BehaviorSubject<any> = new BehaviorSubject<any>('main');
  
  mainRoutes: any[] = mainRoutes;


  constructor(public request: RequestService) {
    this._currentView.next('main');
  }

  setUserInfo(userInfo: any){
    this.userInfo = userInfo;
  }

  getUserInfo(){
    return this.userInfo;    
  }

  get currentView$() {
    return this._currentView.asObservable();
  }

  getRoutes() {
    return this.mainRoutes;
  }

  clear() {
    this.userInfo = null;
    this._currentView.next('main');
    this.mainRoutes = mainRoutes;
  }

  changeCurrentView(){
    if(this._currentView.getValue() == 'main'){
      this.mainRoutes = adminRoutes;
      this._currentView.next('admin');
    }else{
      this.mainRoutes = mainRoutes;
      this._currentView.next('main');
    }
  }

  getCurrentView(){
    return this._currentView.getValue();
  }
}
