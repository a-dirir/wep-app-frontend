export let tableModel:any = {
    "fields": [
        {
            "label": "Department Number",
            "id": "dept_no",
            "shown": true
        },
        {
            "label": "Department Name",
            "id": "dept_name",
            "shown": true,
            "sort": 'asc'
        }
    ],
    "actions": {'add': true, 'edit': true, 'filter': true, 'download': true, 'delete': true, 'showLinkedRecords': true},
    "dynamicActions": [],
};

export let formModel:any = {
    "type": "object",
    "properties": {
        "dept_name": {
            "type": "string",
            "description": "Please enter the department name.",
        }
    },
}

export let formUIModel:any = {
    "type": "VerticalLayout",
    "label": "Department Details",
    "elements": [
        {
            "type": "VerticalLayout",
            "elements": [
                {
                    "type": "Control",
                    "label": "Department Name",
                    "scope": "#/properties/dept_name"
                }
            ]
        }
    ]
}

export let filterData: any = {}


