import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

// angular material modules
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule} from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

// jsonforms modules & services
import { JsonFormsModule } from '@jsonforms/angular';
import { JsonFormsAngularMaterialModule } from '@jsonforms/angular-material';
import { JsonFormsAngularService } from '@jsonforms/angular';

// custom services
import { NavigatorService } from './services/navigator.service';
import { RequestService } from './services/request.service';
import { DataStoreService } from './services/datastore.service';


// main page components
import { AppComponent } from './app.component';
import { SidebarComponent } from './website/sidebar/sidebar.component';
import { ContentComponent } from './website/content/content.component';

// reusable components
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { TableComponent } from './components/table/table.component';
import { AlertComponent } from './components/alert/alert.component';
import { MultiTablesComponent } from './components/multi-tables/multi-tables.component';
import { InformativeTableComponent } from './components/informative-table/informative-table.component';
import { CrudComponent } from './components/crud/crud.component';
import { CrudTablePageComponent } from './components/crud-table-page/crud-table-page.component';

// custom pages components
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/admin/iam/user/user.component';



@NgModule({
  declarations: [
    //main website components
    AppComponent,
    SidebarComponent,
    ContentComponent,

    //reusable components
    TableComponent,
    DynamicFormComponent,

    //admin pages components
    AlertComponent,
    MultiTablesComponent,
    InformativeTableComponent,
    LoginComponent,
    UserComponent,
    CrudComponent,
    CrudTablePageComponent

  
  ],
  imports: [
    //angular modules
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,

    //material modules
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatSelectModule,
    MatNativeDateModule,
    MatListModule,
    MatTabsModule,
    MatGridListModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatTooltipModule,

    //jsonforms modules
    JsonFormsModule,
    JsonFormsAngularMaterialModule,

    //other modules
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  providers: [
    NavigatorService,
    RequestService,
    JsonFormsAngularService,
    DataStoreService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

