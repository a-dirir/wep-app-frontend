// This file contains the configuration for the website, including the routes for the main and admin views.

export let mainRoutes: any[] = [
    {
        "name": "Employees",
        "url": "employees",
        "icon": "bx bxs-user-account",
        "access": ["*"],
        "active": true,
        "children": [
            {
                "name": "Titles",
                "url": "employees/titles",
                "icon": "bx bx-loader-circle",
                "access": ["*"],
                "active": true,
                "children": []
            },
            {
                "name": "Salaries",
                "url": "employees/salaries",
                "icon": "bx bx-loader-circle",
                "access": ["*"],
                "active": true,
                "children": []
            },
            {
                "name": "Leaves",
                "url": "employees/leaves",
                "icon": "bx bx-loader-circle",
                "access": ["*"],
                "active": false,
                "children": [
                    {
                        "name": "Balances",
                        "url": "employees/leaves/balances",
                        "icon": "bx bx-loader-circle",
                        "access": ["*"],
                        "active": true,
                        "children": []
                    },
                    {
                        "name": "History",
                        "url": "employees/leaves/history",
                        "icon": "bx bx-loader-circle",
                        "access": ["*"],
                        "active": true,
                        "children": []
                    },
                ]
            },
        ]
    },
    {
        "name": "Departments",
        "url": "departments",
        "icon": "bx bx-building-house",
        "access": ["*"],
        "active": true,
        "children": [
            {
                "name": "Staffs",
                "url": "departments/staffs",
                "icon": "bx bx-loader-circle",
                "access": ["*"],
                "active": true,
                "children": []
            },
            {
                "name": "Managers",
                "url": "departments/managers",
                "icon": "bx bx-loader-circle",
                "access": ["*"],
                "active": true,
                "children": []
            },
        ]
    },
    {
        "name": "Tasks",
        "url": "tasks",
        "icon": "bx bx-task",
        "access": ["*"],
        "active": true,
        "children": [
            {
                "name": "History",
                "url": "tasks/history",
                "icon": "bx bx-loader-circle",
                "access": ["*"],
                "active": true,
                "children": []
            },
        ]
    },
    
]

export let adminRoutes: any[] = [
    {
        "name": "IAM",
        "url": "admin/iam",
        "icon": "bx bxs-user-account",
        "access": ["root"],
        "domain": "Global",
        "active": false,
        "children": [
            {
                "name": "Users",
                "url": "admin/iam/users",
                "icon": "bx bxs-user",
                "active": true,
                "access": ["root"],
                "children": []
            },
        ]        
    }
]
