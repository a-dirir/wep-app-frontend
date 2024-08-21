import { CustomerBaseComponent } from '../pages/app/customers/customer.base/customer.base.component';

// data models
import * as clientModel from '../models/forms/app/customers/client/clients';
import * as subClientModel from '../models/forms/app/customers/client/sub_clients';
import * as contactModel from '../models/forms/app/customers/client/contacts';
import * as focalPointModel from '../models/forms/app/customers/client/focal_points';
import * as accountManagerModel from '../models/forms/app/customers/client/account_managers';
import * as syntheticModel from '../models/forms/app/customers/client/synthetics';

import * as awsAccountModel from '../models/forms/app/customers/accounts/aws';
import * as azureAccountModel from '../models/forms/app/customers/accounts/azure';
import * as m365AccountModel from '../models/forms/app/customers/accounts/m365';

import * as opportunityModel from '../models/forms/app/customers/opportunity/opportunity';
import * as awsOpportunityModel from '../models/forms/app/customers/opportunity/aws';
import * as azureOpportunityModel from '../models/forms/app/customers/opportunity/azure';
import * as m365OpportunityModel from '../models/forms/app/customers/opportunity/m365';

import * as productModel from '../models/forms/app/customers/products';
import * as addonModel from '../models/forms/app/customers/addons';


export const CustomerRoutes = [

    { 
        path: 'clients',  component: CustomerBaseComponent,
        data: {pageTitle: 'MS Clients', endpoint: 'Client', dataModel: clientModel}
    },
          
    { 
        path: 'clients/sub_clients',  component: CustomerBaseComponent, 
        data:  {pageTitle: 'MS Sub Clients', endpoint: 'SubClient', dataModel: subClientModel}
    },

    { 
        path: 'clients/contacts',  component: CustomerBaseComponent, 
        data:  {pageTitle: 'Customer Contacts', endpoint: 'Contact',  dataModel: contactModel}
    },

    { 
        path: 'clients/focal_points',  component: CustomerBaseComponent, 
        data:  {pageTitle: 'MS Focal Points', endpoint: 'FocalPoint',  dataModel: focalPointModel}
    },

    { 
        path: 'clients/account_managers',  component: CustomerBaseComponent, 
        data:  {pageTitle: 'MS Account Managers', endpoint: 'AccountManager', dataModel: accountManagerModel}
    },

    { 
        path: 'clients/synthetics',  component: CustomerBaseComponent, 
        data:  {pageTitle: 'Synthetic URLs', endpoint: 'Synthetic', dataModel: syntheticModel}
    },
    
    { 
        path: 'accounts/aws',  component: CustomerBaseComponent, 
        data:  {pageTitle: 'AWS Accounts',endpoint: 'AwsAccount',  dataModel: awsAccountModel}
    },

    { 
        path: 'accounts/azure',  component: CustomerBaseComponent, 
        data: {pageTitle: 'Azure Subscriptions', endpoint: 'AzureAccount', dataModel: azureAccountModel}
    },

    { 
        path: 'accounts/m365',  component: CustomerBaseComponent,  
        data: {pageTitle: 'M365 Subscriptions', endpoint: 'M365Account', dataModel: m365AccountModel}
    },

    { 
        path: 'opportunity',  component: CustomerBaseComponent, 
        data:  {pageTitle: 'MS Opportunities', endpoint: 'Opportunity', dataModel: opportunityModel}
    },

    { 
        path: 'opportunity/aws',  component: CustomerBaseComponent,  
        data:  {pageTitle: 'AWS Opportunities', endpoint: 'AWSOpportunity', dataModel: awsOpportunityModel}
    },

    { 
        path: 'opportunity/azure',  component: CustomerBaseComponent,  
        data:  {pageTitle: 'Azure Opportunities', endpoint: 'AzureOpportunity', dataModel:azureOpportunityModel}
    },
    
    { 
        path: 'opportunity/m365',  component: CustomerBaseComponent,  
        data:  {pageTitle: 'M365 Opportunities',endpoint: 'M365Opportunity', dataModel: m365OpportunityModel}
    },

    { 
        path: 'products',  component: CustomerBaseComponent,  
        data:  {pageTitle: 'MS Products', endpoint: 'Product', dataModel: productModel}
    },

    { 
        path: 'addons',  component: CustomerBaseComponent, 
        data:  {pageTitle: 'MS Addons',endpoint: 'Addon', dataModel: addonModel}
    },
    ]
