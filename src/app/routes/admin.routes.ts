// components
import { UserComponent } from '../pages/admin/iam/user/user.component';

// data models
import * as userModel from '../models/admin/authorization/user';


export const AdminRoutes = [
    { 
        path: 'iam/users',  component: UserComponent,
        data: {pageTitle: 'IAM Users', title: 'IAM Users', service: 'IAM', controller: 'User', dataModel: userModel}
    
    },
          
]
