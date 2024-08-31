// components
import { CrudTablePageComponent } from '../components/crud-table-page/crud-table-page.component';

// data models
import * as empployeesModel from '../models/app/employees/employees';
import * as titlesModel from '../models/app/employees/titles';
import * as salariesModel from '../models/app/employees/salaries';
import * as leavesBalancesModel from '../models/app/employees/leaves/balances';
import * as leavesHistoryModel from '../models/app/employees/leaves/history';



export const EmployessRoutes = [
    { 
        path: '',  component: CrudTablePageComponent,
        data: {pageTitle: 'Employess', service: 'Employees', controller: 'Employees', dataModel: empployeesModel}
    },

    { 
        path: 'titles',  component: CrudTablePageComponent,
        data: {pageTitle: 'Employess Titles', service: 'Employees', controller: 'Titles', dataModel: titlesModel}
    },
          
    { 
        path: 'salaries',  component: CrudTablePageComponent, 
        data:  {pageTitle: 'Employess Salary', service: 'Employees', controller: 'Salaries', dataModel: salariesModel}
    },

    { 
        path: 'leaves/balances',  component: CrudTablePageComponent, 
        data:  {pageTitle: 'Employees Leaves', service: 'Employees', controller: 'LeaveBalances',  dataModel: leavesBalancesModel}
    },

    { 
        path: 'leaves/history',  component: CrudTablePageComponent, 
        data:  {pageTitle: 'Employees Leaves History', service: 'Employees', controller: 'LeaveHistory',  dataModel: leavesHistoryModel}
    },

  
]
