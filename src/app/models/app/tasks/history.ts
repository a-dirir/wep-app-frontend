export let tableModel:any = {
    "fields": [
        {
            "label": "History ID",
            "id": "history_id",
            "shown": true
        },
        {
            "label": "Task ID",
            "id": "task_id",
            "shown": true
        },
        {
            "label": "Task Description",
            "id": "Task Description", 
            "shown": true,
            "sort": 'asc'
        },
        {
            "label": "Employee Number",
            "id": "emp_no",
            "shown": false
        },
        {
            "label": "Employee Name",
            "id": "Employee Name",
            "shown": true
        },
        {
            "label": "Evaluation Date",
            "id": "evaluation_date",
            "shown": true
        },
        {
            "label": "Evaluation Score",
            "id": "evaluation_score",
            "shown": true
        },
        {
            "label": "Comments",
            "id": "comments",
            "shown": true
        }
    ],
    "actions": {'add': true, 'edit': true, 'filter': true, 'download': true, 'delete': true, 'showLinkedRecords': true},
    "dynamicActions": [],
};

export let formModel:any = {
    "type": "object",
    "properties": {
        "task_id": {
            "type": "string",
            "description": "Please select the task.",
            "enum": []
        },
        "emp_no": {
            "type": "string",
            "description": "Please select employee name.",
            "enum": []
        },
        "evaluation_date": {
            "type": "string",
            "format": "date",
            "description": "Please enter the evaluation date.",
        },
        "evaluation_score": {
            "type": "string",
            "description": "Please enter the evaluation score.",
        },
        "comments": {
            "type": "string",
            "description": "Please enter comments.",
        }
    },
}

export let formUIModel:any = {
    "type": "VerticalLayout",
    "label": "Task History Details",
    "elements": [
        {
            "type": "VerticalLayout",
            "elements": [
                {
                    "type": "Control",
                    "label": "Task ID",
                    "scope": "#/properties/task_id"
                },
                {
                    "type": "Control",
                    "label": "Employee Name",
                    "scope": "#/properties/emp_no"
                }
            ]
        },
        {
            "type": "VerticalLayout",
            "elements": [
                {
                    "type": "Control",
                    "label": "Evaluation Date",
                    "scope": "#/properties/evaluation_date"
                },
                {
                    "type": "Control",
                    "label": "Evaluation Score",
                    "scope": "#/properties/evaluation_score"
                },
                {
                    "type": "Control",
                    "label": "Comments",
                    "scope": "#/properties/comments"
                }
            ]
        }
    ]
}

export let filterData: any = {}
