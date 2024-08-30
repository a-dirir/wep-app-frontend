import { Component, Inject} from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { angularMaterialRenderers } from '@jsonforms/angular-material';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent{

  title: any;
  formModel: any;
  formUIModel: any;
  formData: any;
  renderers: any

  options: any


  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any, private dialogRef: MatDialogRef<DynamicFormComponent>, private dateAdapter: DateAdapter<any>) {
    this.dateAdapter.setLocale('en-GB'); // or any other locale
    this.title = dialogData.title;
    this.formModel = dialogData.formModel;
    this.formUIModel = dialogData.formUIModel;
    this.options = dialogData.options;
    this.renderers = angularMaterialRenderers;

    this.populateOptions(this.options);

    this.formData = dialogData.formData;
   }

   populateOptions(options: any){
    for(let field in this.formModel['properties']){

      if(options[field]){
        let field_options = [];
        for(let key in options[field]){
          field_options.push(options[field][key]);
        }
        this.formModel['properties'][field]['enum'] = field_options
      }
    }
  }

  onFormChange(event: any) {
    event = this.addOneDayToDate(event);
    this.formData = event;
  }

  addOneDayToDate(event: any){
    for (let field in event) {
      // Check if there is a format property in the field
      if (this.formModel['properties'][field] !== undefined) {
        if (this.formModel['properties'][field].format !== undefined) {
          if (this.formModel['properties'][field].format === 'date') {
            // Check if event[field] is a valid date
            let eventDate = new Date(event[field]);
            let fromDataDate = new Date(this.formData[field]);
            
            // if formDataDate is undefined or not equal to eventDate, add one day to eventDate
            if(fromDataDate === undefined || fromDataDate.getDate() !== eventDate.getDate()){
              eventDate.setDate(eventDate.getDate() + 1);
            }
            // Update the event[field] with the new date
            event[field] = eventDate.toISOString().split('T')[0];
          }
        }
      }
    }

    return event;
  }
  
  closeDialogWithData(): void {
    this.dialogRef.close(this.formData);
  }

  

}
