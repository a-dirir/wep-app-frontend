// data models
import * as userModel from '../models/forms/admin/authorization/user';

import { UserComponent } from '../pages/admin/iam/user/user.component';


export const AdminRoutes = [
    { 
        path: 'iam/users',  component: UserComponent,
        data: {pageTitle: 'IAM Users', title: 'IAM Users', service: 'IAM', controller: 'User', dataModel: userModel}
    
    },
          
]
