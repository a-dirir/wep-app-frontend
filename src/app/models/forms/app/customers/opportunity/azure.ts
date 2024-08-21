export let tableModel:any = {
    "fields": [
        {
            "label": "Opportunity ID",
            "id": "Opportunity_ID",
            "shown": true
        },
        {
            "label": "Subscription ID",
            "id": "Subscription_ID",
            "shown": true
        },
        {
            "label": "Product ID",
            "id": "Product_ID",
            "shown": true
        },
        {
            "label": "Addon ID",
            "id": "Addon_ID",
            "shown": true
        },

    ],
    "actions": {'add': true, 'edit': true, 'filter': true, 'download': true, 'delete': true, },
    "dynamicActions": [],
};

export let formModel:any = {
    "type": "object",
    "properties": {
        "Opportunity_ID": {
        "type": "string",
        "description": "Please enter opportunity ID",
        "enum": []
        },
        "Subscription_ID": {
            "type": "string",
            "description": "Please enter subscription ID",
            "enum": []
        },
        "Product_ID": {
            "type": "string",
            "description": "Please enter Product ID",
            "enum": []
        },
        "Addon_ID": {
            "type": "string",
            "description": "Please enter Addon ID",
            "enum": []
        },

    },
}

export let formUIModel:any = {
    "type": "VerticalLayout",
    "elements": [
        {
            "type": "Control",
            "label": "opportunity ID",
            "scope": "#/properties/Opportunity_ID"
        },
        {
            "type": "Control",
            "label": "Account_ID",
            "scope": "#/properties/Subscription_ID"
        },
        {
            "type": "Control",
            "label": "Product_ID",
            "scope": "#/properties/Product_ID"
        },
        {
            "type": "Control",
            "label": "Addon_ID",
            "scope": "#/properties/Addon_ID"
        },
    ]
}

