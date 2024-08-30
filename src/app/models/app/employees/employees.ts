export let tableModel:any = {
    "fields": [
        {
            "label": "Employee Number",
            "id": "emp_no",
            "shown": true
        },
        {
            "label": "Employee Name",
            "id": "name",
            "shown": true,
            "sort": 'asc'
        },
        {
            "label": "Gender",
            "id": "gender",
            "shown": true,
        },
        {
            "label": "Birth Date",
            "id": "birth_date",
            "shown": true,
        },
        {
            "label": "Hire Date",
            "id": "hire_date",
            "shown": true,
        }

    ],
    "actions": {'add': true, 'edit': true, 'filter': true, 'download': true, 'delete': true, 'showLinkedRecords': true},
    "dynamicActions": [],
};

export let formModel:any = {
    "type": "object",
    "properties": {
        "name": {
        "type": "string",
        "description": "Please enter employess name."
        },
        "gender": {
            "type": "string",
            "description": "Please choose gender.",
            "enum": ["Male", "Female"]
        },
        "birth_date": {
            "type": "string",
            "format": "date",
            "description": "Please enter birth date.",
        },
        "hire_date": {
            "type": "string",
            "format": "date",
            "description": "Please enter hire date.",
        },      
    },
}

export let formUIModel:any = {
    "type": "VerticalLayout",
    "label": "Employee",
    "elements": [
        {
            "type": "VerticalLayout",
            "elements": [
            {
                "type": "Control",
                "label": "Employee Name",
                "scope": "#/properties/name"
            },
            {
                "type": "Control",
                "label": "Gender",
                "scope": "#/properties/gender"
            },
            ]
        },
        {
            "type": "HorizontalLayout",
            "elements": [
            {
                "type": "Control",
                "label": "Birth Date",
                "scope": "#/properties/birth_date"
            },
            {
                "type": "Control",
                "label": "Hire Date",
                "scope": "#/properties/hire_date"
            },
            ]
        },
    ]
}

export let filterData: any = {}
