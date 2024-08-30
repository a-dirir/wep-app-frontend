export let tableModel:any = {
    "fields": [
        {
            "label": "Leave ID",
            "id": "leave_id",
            "shown": true
        },
        {
            "label": "Employee Number",
            "id": "emp_no",
            "shown": true
        },
        {
            "label": "Employee Name",
            "id": "Employee Name", 
            "shown": true,
            "sort": 'asc'
        },
        {
            "label": "Leave Type",
            "id": "leave_type",
            "shown": true
        },
        {
            "label": "Leave Start Date",
            "id": "leave_start_date",
            "shown": true
        },
        {
            "label": "Leave End Date",
            "id": "leave_end_date",
            "shown": true
        },
        {
            "label": "Leave Days",
            "id": "leave_days",
            "shown": true
        },
        {
            "label": "Reason",
            "id": "reason",
            "shown": true
        }
    ],
    "actions": {'add': true, 'edit': true, 'filter': true, 'download': true, 'delete': true, 'showLinkedRecords': true},
    "dynamicActions": [],
};

export let formModel:any = {
    "type": "object",
    "properties": {
        "emp_no": {
            "type": "string",
            "description": "Please select employee name.",
            "enum": []
        },
        "leave_type": {
            "type": "string",
            "description": "Please select the type of leave.",
            "enum": ["Sick Leave", "Annual Leave"]
        },
        "leave_start_date": {
            "type": "string",
            "format": "date",
            "description": "Please enter the leave start date.",
        },
        "leave_end_date": {
            "type": "string",
            "format": "date",
            "description": "Please enter the leave end date.",
        },
        "leave_days": {
            "type": "string",
            "description": "Please enter the number of leave days.",
        },
        "reason": {
            "type": "string",
            "description": "Please enter the reason for leave.",
        }
    },
}

export let formUIModel:any = {
    "type": "VerticalLayout",
    "label": "Leave History Details",
    "elements": [
        {
            "type": "VerticalLayout",
            "elements": [
                {
                    "type": "Control",
                    "label": "Employee Name",
                    "scope": "#/properties/emp_no"
                },
                {
                    "type": "Control",
                    "label": "Leave Type",
                    "scope": "#/properties/leave_type"
                }
            ]
        },
        {
            "type": "HorizontalLayout",
            "elements": [
                {
                    "type": "Control",
                    "label": "Leave Start Date",
                    "scope": "#/properties/leave_start_date"
                },
                {
                    "type": "Control",
                    "label": "Leave End Date",
                    "scope": "#/properties/leave_end_date"
                }
            ]
        },
        {
            "type": "VerticalLayout",
            "elements": [
                {
                    "type": "Control",
                    "label": "Leave Days",
                    "scope": "#/properties/leave_days"
                },
                {
                    "type": "Control",
                    "label": "Reason",
                    "scope": "#/properties/reason"
                }
            ]
        }
    ]
}

export let filterData: any = {}
