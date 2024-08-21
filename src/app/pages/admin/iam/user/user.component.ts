import { Component  } from '@angular/core';

import { RequestService } from 'src/app/services/request.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from 'src/app/components/alert/alert.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  crudInput:any

  constructor(private route: ActivatedRoute, public request: RequestService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.crudInput = this.route.snapshot;
  }

  onCrudOutput(event:any){
    let action = event.action;
    let data = event.data;

    if (action == 'Generate Credentials'){
      this.generateCredentials(data);
    }
  }

  async generateCredentials(data: any) {
    let message = {
      'access': {
        'action': `IAM:User:generateCredentials`,
        'resource': ['*'],
        'customer': ['*']
      },
      'data': data
    }

    try{
      let response = await this.request.sendRequest(message)

      let credentials = response['msg']['data'];

      this.saveAsCSV([credentials], data['name']);
    }
    catch(error){
      this.alert('error', error);
    }
  }

  saveAsCSV(data: any, username: any){{
    //save the data into csv file for download
    let csvContent = "data:text/csv;charset=utf-8,";
    let csvData = data;
    
    // get the keys from data
    let keys = Object.keys(csvData[0]);

    csvContent += keys.join(",") + "\n";
    csvData.forEach((row: any) => {
      let values = keys.map(key => {
        // trim the value to remove any spaces
        if(typeof row[key] == 'string'){
          return row[key].trim();
        }
        return row[key];
      });
      csvContent += values.join(",") + "\n";
    });

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${username}-Credential.csv`);
    document.body.appendChild(link); // Required for FF
    link.click(); // This will download the data file named "my_data.csv".
  }}

  alert(type: string, message: any): void {
    const dialogRef = this.dialog.open(AlertComponent, {
      width: 'auto',
      data: { 
        type: type,
        message:  message,
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {});
  }
}
