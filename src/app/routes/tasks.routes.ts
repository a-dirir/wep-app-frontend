// components
import { CrudTablePageComponent } from '../components/crud-table-page/crud-table-page.component';

// data models
import * as tasksModel from '../models/app/tasks/tasks';
import * as tasksHistoryModel from '../models/app/tasks/history';


export const TasksRoutes = [

    { 
        path: '',  component: CrudTablePageComponent,
        data: {pageTitle: 'Tasks', service: 'Tasks', controller: 'Tasks', dataModel: tasksModel}
    },
          
    { 
        path: 'history',  component: CrudTablePageComponent, 
        data:  {pageTitle: 'Tasks History', service: 'Tasks', controller: 'TaskHistory', dataModel: tasksHistoryModel}
    },
   
]
