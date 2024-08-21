export let tableModel:any = {
    "fields": [
        {
            "label": "Addon ID",
            "id": "Addon_ID",
            "shown": true
        },
        {
            "label": "Addon Name",
            "id": "Name",
            "shown": true
        },
        {
            "label": "Addon Type",
            "id": "Addon_Type",
            "shown": true
        },
    ],
    "actions": {'add': true, 'edit': true,  'filter': true, 'download': true, 'delete': true, },
    "dynamicActions": [],
};

export let formModel:any = {
    "type": "object",
    "properties": {
        "Addon_ID": {
        "type": "string",
        "description": "Please enter Addon ID"
        },
        "Name": {
            "type": "string",
            "description": "Please enter Addon name"
        },
        "Addon_Type": {
            "type": "string",
            "description": "Please enter Addon type"
        }
    },
}

export let formUIModel:any = {
    "type": "VerticalLayout",
    "elements": [
        {
            "type": "Control",
            "label": "Addon ID",
            "scope": "#/properties/Addon_ID"
        },
        {
            "type": "Control",
            "label": "Addon Name",
            "scope": "#/properties/Name"
        },
        {
            "type": "Control",
            "label": "Addon Type",
            "scope": "#/properties/Addon_Type"
        },
    ]
}

