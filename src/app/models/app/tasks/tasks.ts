export let tableModel:any = {
    "fields": [
        {
            "label": "Task ID",
            "id": "task_id",
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
            "label": "Assigner ID",
            "id": "assigned_by",
            "shown": false
        },
        {
            "label": "Assigner Name",
            "id": "Assigner Name",
            "shown": true
        },
        {
            "label": "Task Description",
            "id": "task_description",
            "shown": true
        },
        {
            "label": "Deadline",
            "id": "deadline",
            "shown": true
        },
        {
            "label": "Status",
            "id": "status",
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
        "assigned_by": {
            "type": "string",
            "description": "Please select the person who assigned the task.",
            "enum": []
        },
        "task_description": {
            "type": "string",
            "description": "Please enter the task description.",
        },
        "deadline": {
            "type": "string",
            "format": "date",
            "description": "Please enter the task deadline.",
        },
        "status": {
            "type": "string",
            "description": "Please select the task status.",
            "enum": ["Pending", "In Progress", "Completed"]
        }
    },
}

export let formUIModel:any = {
    "type": "VerticalLayout",
    "label": "Task Details",
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
                    "label": "Assigned By",
                    "scope": "#/properties/assigned_by"
                }
            ]
        },
        {
            "type": "VerticalLayout",
            "elements": [
                {
                    "type": "Control",
                    "label": "Task Description",
                    "scope": "#/properties/task_description"
                },
                {
                    "type": "Control",
                    "label": "Deadline",
                    "scope": "#/properties/deadline"
                },
                {
                    "type": "Control",
                    "label": "Status",
                    "scope": "#/properties/status"
                }
            ]
        }
    ]
}

export let filterData: any = {}

