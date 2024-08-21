export let tableModel:any = {
    "fields": [
        {
            "label": "Product ID",
            "id": "Product_ID",
            "shown": true
        },
        {
            "label": "Product Name",
            "id": "Name",
            "shown": true
        },
        {
            "label": "Product Type",
            "id": "Product_Type",
            "shown": true
        },
    ],
    "actions": {'add': true, 'edit': true,  'filter': true, 'download': true, 'delete': true, },
    "dynamicActions": [],
};

export let formModel:any = {
    "type": "object",
    "properties": {
        "Product_ID": {
        "type": "string",
        "description": "Please enter product ID"
        },
        "Name": {
            "type": "string",
            "description": "Please enter product name"
        },
        "Product_Type": {
            "type": "string",
            "description": "Please enter product type"
        }
    },
}

export let formUIModel:any = {
    "type": "VerticalLayout",
    "elements": [
        {
            "type": "Control",
            "label": "Product ID",
            "scope": "#/properties/Product_ID"
        },
        {
            "type": "Control",
            "label": "Product Name",
            "scope": "#/properties/Name"
        },
        {
            "type": "Control",
            "label": "Product Type",
            "scope": "#/properties/Product_Type"
        },
    ]
}

