import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { angularMaterialRenderers } from '@jsonforms/angular-material';
import {formModel, formUIModel} from '../../../models/forms/app/login/login';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { RequestService } from 'src/app/services/request.service';
import { DataStoreService } from 'src/app/services/datastore.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formModel: any = formModel;
  formUIModel: any = formUIModel;
  formData: any = {"name": "", "password": ""};
  renderers: any = angularMaterialRenderers;

  constructor(public request: RequestService, private router: Router,
    public dialog: MatDialog,  public datastore: DataStoreService) {}

  onFormChange(event: any) {
    this.formData = event;
  }

  onSubmit(){
    this.submiteData();
 
  }

  async submiteData(){
    let headers = {
      'username': this.formData['Name'],
      'password': this.formData['Password'] 
    }

    try{
      let response = await this.request.sendRequest({}, headers, 'login', 'POST')
      console.log(response);
      let user_info = response['msg']['user_info'];
      this.datastore.set_user_info(user_info);
      this.datastore.changeDomainType('Global');
      this.router.navigate(['customers/clients']);
      return true;

    }
    catch(error){
      this.alert('error', 'Login to COC Internal Portal Failed');
      return false;
    }
  }

  alert(type: string, message: any): void {
    const dialogRef = this.dialog.open(AlertComponent, {
      width: '500px',
      data: { type: type, message: message }
    });
  
    dialogRef.afterClosed().subscribe(result => {});
  }

}
