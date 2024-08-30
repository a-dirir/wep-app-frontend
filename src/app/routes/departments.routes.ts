// components
import { CrudTablePageComponent } from '../components/crud-table-page/crud-table-page.component';

// data models
import * as departmentsModel from '../models/app/departments/departments';
import * as departmentStaffsModel from '../models/app/departments/staffs';
import * as departmentManagersModel from '../models/app/departments/managers';


export const DepartmentsRoutes = [

    { 
        path: '',  component: CrudTablePageComponent,
        data: {pageTitle: 'Departments', service: 'Departments', controller: 'Departments', dataModel: departmentsModel}
    },
          
    { 
        path: 'staffs',  component: CrudTablePageComponent, 
        data:  {pageTitle: 'Department Staffs', service: 'Departments', controller: 'DepartmentEmployees', dataModel: departmentStaffsModel}
    },

    { 
        path: 'managers',  component: CrudTablePageComponent, 
        data:  {pageTitle: 'Department Managers', service: 'Departments', controller: 'DepartmentManagers',  dataModel: departmentManagersModel}
    },

    ]
