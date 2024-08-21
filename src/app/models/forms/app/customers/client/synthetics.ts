export let tableModel:any = {
    "fields": [
        {
            "label": "Sub Client Name",
            "id": "Sub_Client_ID",
            "shown": true,
        },
        {
            "label": "URL",
            "id": "URL",
            "shown": true
        },
        {
            "label": "URL SSL Expiry Date",
            "id": "URL_SSL_Expiry_Date",
            "shown": true,
        },
    ],
    "actions": {'add': true, 'edit': true, 'filter': true, 'download': true, 'delete': true},
    "dynamicActions": [],
};

export let formModel:any = {
    "type": "object",
    "title": "Synthetic URLs",
    "properties": {
        "URL": {
        "type": "string",
        "description": "Please enter sub client name."
        },
        "Sub_Client_ID": {
            "type": "string",
            "description": "Please choose sub client name.",
            "enum": []
        },
        "URL_SSL_Expiry_Date": {
            "type": "string",
            "format": "date",
            "description": "Please enter first engagement date.",
        },   
    }
}

export let formUIModel:any = {
    "type": "VerticalLayout",
    "elements": [
        {
            "type": "Control",
            "label": "URL",
            "scope": "#/properties/URL"
        },
        {
            "type": "Control",
            "label": "Sub Client Name",
            "scope": "#/properties/Sub_Client_ID"
        },
        {
            "type": "Control",
            "label": "Expiray Date",
            "scope": "#/properties/URL_SSL_Expiry_Date"
        },
    ]
}


