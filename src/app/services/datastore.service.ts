import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { mainRoutes, adminRoutes } from '../website/config/config';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  user_info: any = null;
  domainData: any = {};
  private _currentDomainName: BehaviorSubject<any> = new BehaviorSubject<any>('CurrentDomainName');
  private _currentDomainType: BehaviorSubject<any> = new BehaviorSubject<any>('CurrentDomainType');

  private _currentView: BehaviorSubject<any> = new BehaviorSubject<any>('main');
  
  mainRoutes: any[] = mainRoutes;


  constructor(public request: RequestService) {
    this._currentView.next('main');
  }

  set_user_info(user_info: any){
    this.user_info = user_info;
  }

  get_user_info(){
    return this.user_info;
  }

  getDomainData() {
    const currentDomainType = this._currentDomainType.getValue();
    if (currentDomainType === 'Global'){
      return null;
    }

    // Check if domainData is already loaded
    if (currentDomainType in this.domainData){
      return this.domainData[currentDomainType];
    } else {
      // Load domainData
      this.loadDomainData();
      return this.domainData[currentDomainType];
    }
  }

  async loadDomainData() {
    const currentDomainType = this._currentDomainType.getValue();

    let message = {
      'access': {
        'action': 'IAM:DomainView:list',
        'resource': ['*'],
        'customer': ['*']
      },
      'data': {
        'domain_name': currentDomainType
      }
    }

    try {
      let response = await this.request.sendRequest(message);
      // Add new key to domainData
      this.domainData[currentDomainType] = response['msg']['data'];
      this._currentDomainType.next(currentDomainType);
    } catch (error) {
      this.domainData[currentDomainType] = null;
      this._currentDomainType.next('Global');
    }
  }

  getDomainName() {
    return this._currentDomainName.getValue();
  }

  setDomainName(domainName: string) {
    this._currentDomainName.next(domainName);
  }

  changeDomainType(domainType: string) {
    this._currentDomainType.next(domainType);
  }

  get currentDomain$() {
    return this._currentDomainName.asObservable();
  }

  get domainType$() {
    return this._currentDomainType.asObservable(); 
  }

  get currentView$() {
    return this._currentView.asObservable();
  }

  getRoutes() {
    return this.mainRoutes;
  }

  clear() {
    this.user_info = null;
    this.domainData = {};
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
