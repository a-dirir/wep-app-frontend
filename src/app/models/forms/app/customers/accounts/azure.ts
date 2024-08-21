import { faL } from "@fortawesome/free-solid-svg-icons";

export let tableModel:any = {
    "fields": [
        {
            "label": "Sub Client Name",
            "id": "Sub_Client_ID",
            "shown": true,
        },
        {
            "label": "Subscription ID",
            "id": "Subscription_ID",
            "shown": true
        },
        {
            "label": "Subscription Name",
            "id": "Name",
            "shown": true
        },
        {
            "label": "Tenant ID",
            "id": "Tenant_ID",
            "shown": true
        },

    ],
    "actions": {'add': true, 'edit': true, 'filter': true, 'download': true, 'delete': true, },
    "dynamicActions": [],
};

export let formModel:any = {
    "type": "object",
    "properties": {
        "Subscription_ID": {
        "type": "string",
        "description": "Please enter subscription ID"
        },
        "Name": {
            "type": "string",
            "description": "Please enter subscription name"
        },
        "Tenant_ID": {
            "type": "string",
            "description": "Please enter tenant ID"
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
            "label": "Subscription ID",
            "scope": "#/properties/Subscription_ID"
        },
        {
            "type": "Control",
            "label": "Subscription Name",
            "scope": "#/properties/Name"
        },
        {
            "type": "Control",
            "label": "Tenant ID",
            "scope": "#/properties/Tenant_ID"
        },
        {
            "type": "Control",
            "label": "Sub Client Name",
            "scope": "#/properties/Sub_Client_ID"
        },
    ]
}

