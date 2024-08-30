export let tableModel:any = {
    "fields": [
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
            "label": "Total Leave",
            "id": "total_leave",
            "shown": true
        },
        {
            "label": "Leave Taken",
            "id": "leave_taken",
            "shown": true
        },
        {
            "label": "Leave Remaining",
            "id": "leave_remaining",
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
        "total_leave": {
            "type": "string",
            "description": "Please enter the total leave available.",
        },
        "leave_taken": {
            "type": "string",
            "description": "Please enter the total leave taken.",
        },
        "leave_remaining": {
            "type": "string",
            "description": "Please enter the total leave remaining.",
        },
    },
}

export let formUIModel:any = {
    "type": "VerticalLayout",
    "label": "Leave Balance Details",
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
            "type": "VerticalLayout",
            "elements": [
                {
                    "type": "Control",
                    "label": "Total Leave",
                    "scope": "#/properties/total_leave"
                },
                {
                    "type": "Control",
                    "label": "Leave Taken",
                    "scope": "#/properties/leave_taken"
                },
                {
                    "type": "Control",
                    "label": "Leave Remaining",
                    "scope": "#/properties/leave_remaining"
                },
            ]
        }
    ]
}

export let filterData: any = {}
