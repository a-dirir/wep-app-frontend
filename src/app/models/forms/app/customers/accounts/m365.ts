export let tableModel:any = {
    "fields": [
        {
            "label": "Sub Client Name",
            "id": "Sub_Client_ID",
            "shown": true,
        },
        {
            "label": "Tenant ID",
            "id": "Tenant_ID",
            "shown": true
        },
        {
            "label": "Tenant Name",
            "id": "Name",
            "shown": true
        },
    ],
    "actions": {'add': true, 'edit': true, 'filter': true, 'download': true, 'delete': true, },
    "dynamicActions": [],
};

export let formModel:any = {
    "type": "object",
    "properties": {
        "Tenant_ID": {
        "type": "string",
        "description": "Please enter Tenant ID"
        },
        "Name": {
            "type": "string",
            "description": "Please enter Tenant name"
        },
        "Sub_Client_ID": {
            "type": "string",
            "description": "Please choose sub client name.",
            "enum": []
        },
    },
}

export let formUIModel:any = {
    "type": "VerticalLayout",
    "elements": [
        {
            "type": "Control",
            "label": "Tenant ID",
            "scope": "#/properties/Tenant_ID"
        },
        {
            "type": "Control",
            "label": "Tenant Name",
            "scope": "#/properties/Name"
        },
        {
            "type": "Control",
            "label": "Sub Client Name",
            "scope": "#/properties/Sub_Client_ID"
        },
    ]
}

