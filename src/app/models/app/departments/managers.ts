export let tableModel:any = {
    "fields": [
        {
            "label": "Department Number",
            "id": "dept_no",
            "shown": false
        },
        {
            "label": "Department Name",
            "id": "Department Name", 
            "shown": true
        },
        {
            "label": "Employee Number",
            "id": "emp_no",
            "shown": false
        },
        {
            "label": "Employee Name",
            "id": "Employee Name",
            "shown": true,
            "sort": 'asc'
        },
        {
            "label": "Start Date",
            "id": "from_date",
            "shown": true
        },
        {
            "label": "End Date",
            "id": "to_date",
            "shown": true
        }
    ],
    "actions": {'add': true, 'edit': true, 'filter': true, 'download': true, 'delete': true, 'showLinkedRecords': true},
    "dynamicActions": [],
};

export let formModel:any = {
    "type": "object",
    "properties": {
        "dept_no": {
            "type": "string",
            "description": "Please select department name.",
            "enum":[]
        },
        "emp_no": {
            "type": "string",
            "description": "Please select employee name.",
            "enum":[]
        },
        "from_date": {
            "type": "string",
            "format": "date",
            "description": "Please enter the start date.",
        },
        "to_date": {
            "type": "string",
            "format": "date",
            "description": "Please enter the end date.",
        }
    },
}

export let formUIModel:any = {
    "type": "VerticalLayout",
    "label": "Department Manager Details",
    "elements": [
        {
            "type": "VerticalLayout",
            "elements": [
                {
                    "type": "Control",
                    "label": "Department Name",
                    "scope": "#/properties/dept_no"
                },
                {
                    "type": "Control",
                    "label": "Employee Name",
                    "scope": "#/properties/emp_no"
                }
            ]
        },
        {
            "type": "HorizontalLayout",
            "elements": [
                {
                    "type": "Control",
                    "label": "Start Date",
                    "scope": "#/properties/from_date"
                },
                {
                    "type": "Control",
                    "label": "End Date",
                    "scope": "#/properties/to_date"
                }
            ]
        }
    ]
}

export let filterData: any = {}

