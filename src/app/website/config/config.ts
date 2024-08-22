export let mainRoutes: any[] = [
    {
        "name": "Customers",
        "url": "customers",
        "icon": "bx bxs-user-account",
        "access": ["*"],
        "domain": "Global",
        "active": false,
        "children": [
            {
                "name": "Clients",
                "url": "customers/clients",
                "icon": "bx bx-loader-circle",
                "access": ["*"],
                "domain": "Global",
                "active": true,
                "children": [
                    {
                        "name": "Sub Clients",
                        "url": "customers/clients/sub_clients",
                        "icon": "bx bx-loader-circle",
                        "access": ["*"],
                        "domain": "Global",
                        "active": true,
                        "children": []
                    },
                    {
                        "name": "Contacts",
                        "url": "customers/clients/contacts",
                        "icon": "bx bx-loader-circle",
                        "access": ["*"],
                        "domain": "Global",
                        "active": true,
                        "children": []
                    },
                    {
                        "name": "MS Focus Points",
                        "url": "customers/clients/focal_points",
                        "icon": "bx bxs-user",
                        "domain": "Global",
                        "active": true,
                        "access": ["*"],
                        "children": []
                    },
                    {
                        "name": "Account Managers",
                        "url": "customers/clients/account_managers",
                        "icon": "bx bxs-user",
                        "domain": "Global",
                        "active": true,
                        "access": ["*"],
                        "children": []
                    },
                    {
                        "name": "Synthetic URLs",
                        "url": "customers/clients/synthetics",
                        "icon": "bx bx-loader-circle",
                        "access": ["*"],
                        "domain": "Global",
                        "active": true,
                        "children": []
                    },
                ]
            },
            
            {
                "name": "Accounts",
                "url": "customers/account",
                "icon": "bx bx-loader-circle",
                "access": ["*"],
                "domain": "Global",
                "active": false,
                "children": [
                    {
                        "name": "AWS Accounts",
                        "url": "customers/accounts/aws",
                        "icon": "bx bx-loader-circle",
                        "access": ["*"],
                        "domain": "Global",
                        "active": true,
                        "children": []
                    },
                    {
                        "name": "Azure Accounts",
                        "url": "customers/accounts/azure",
                        "icon": "bx bx-loader-circle",
                        "access": ["*"],
                        "domain": "Global",
                        "active": true,
                        "children": []
                    },
                    {
                        "name": "M365 Accounts",
                        "url": "customers/accounts/m365",
                        "icon": "bx bx-loader-circle",
                        "access": ["*"],
                        "domain": "Global",
                        "active": true,
                        "children": []
                    },
                ]
            },

            {
                "name": "Opporunities",
                "url": "customers/opportunity",
                "icon": "bx bx-loader-circle",
                "access": ["*"],
                "domain": "Global",
                "active": true,
                "children": [
                    {
                        "name": "AWS Opportunities",
                        "url": "customers/opportunity/aws",
                        "icon": "bx bx-loader-circle",
                        "access": ["*"],
                        "domain": "Global",
                        "active": true,
                        "children": []
                    },
                    {
                        "name": "Azure Opportunities",
                        "url": "customers/opportunity/azure",
                        "icon": "bx bx-loader-circle",
                        "access": ["*"],
                        "domain": "Global",
                        "active": true,
                        "children": []
                    },
                    {
                        "name": "M365 Opportunities",
                        "url": "customers/opportunity/m365",
                        "icon": "bx bx-loader-circle",
                        "access": ["*"],
                        "domain": "Global",
                        "active": true,
                        "children": []
                    },
                ]
            },

            {
                "name": "Products",
                "url": "customers/products",
                "icon": "bx bx-loader-circle",
                "access": ["*"],
                "domain": "Global",
                "active": true,
                "children": []
            },

            {
                "name": "Addons",
                "url": "customers/addons",
                "icon": "bx bx-loader-circle",
                "access": ["*"],
                "domain": "Global",
                "active": true,
                "children": []
            }
        ]
    },
    
]



export let adminRoutes: any[] = [
    {
        "name": "IAM",
        "url": "admin/iam",
        "icon": "bx bxs-user-account",
        "access": ["admin"],
        "domain": "Global",
        "active": false,
        "children": [
            {
                "name": "Users",
                "url": "admin/iam/users",
                "icon": "bx bxs-user",
                "domain": "Global",
                "active": true,
                "access": ["*"],
                "children": []
            },
        ]        
    }
]
