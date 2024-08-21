export let tableModel:any = {
    "fields": [
        {
            "label": "Sub Client Name",
            "id": "Sub_Client_ID",
            "shown": true,
        },
        {
            "label": "Account ID",
            "id": "Account_ID",
            "shown": true
        },
        {
            "label": "Account Name",
            "id": "Name",
            "shown": true
        },
        {
            "label": "Master Account",
            "id": "Master_Account",
            "shown": true
        },
        {
            "label": "Region",
            "id": "region",
            "shown": true
        },

    ],
    "actions": {'add': true, 'edit': true,  'filter': true, 'download': true, 'delete': true, },
    "dynamicActions": [],
};

export let formModel:any = {
    "type": "object",
    "properties": {
        "Account_ID": {
        "type": "string",
        "description": "Please enter account ID"
        },
        "Name": {
            "type": "string",
            "description": "Please enter account name"
        },
        "Master_Account": {
            "type": "string",
            "description": "Please enter master account"
        },
        "region": {
            "type": "string",
            "description": "Please enter region",
            "enum": [
                "af-south-1", "ap-east-1", "ap-northeast-1", "ap-northeast-2", "ap-northeast-3", "ap-south-1", "ap-south-2", "ap-southeast-1", 
                "ap-southeast-2", "ap-southeast-3", "ap-southeast-4", "ca-central-1", "ca-west-1", "cn-north-1", "cn-northwest-1", "eu-central-1",
                 "eu-central-2", "eu-north-1", "eu-south-1", "eu-south-2", "eu-west-1", "eu-west-2", "eu-west-3", "il-central-1", "me-central-1", 
                 "me-south-1", "sa-east-1", "us-east-1", "us-east-2", "us-gov-east-1", "us-gov-west-1", "us-west-1"
            ]
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
            "label": "Account ID",
            "scope": "#/properties/Account_ID"
        },
        {
            "type": "Control",
            "label": "Account Name",
            "scope": "#/properties/Name"
        },
        {
            "type": "Control",
            "label": "Master Account",
            "scope": "#/properties/Master_Account"
        },
        {
            "type": "Control",
            "label": "Region",
            "scope": "#/properties/region"
        },
        {
            "type": "Control",
            "label": "Sub Client Name",
            "scope": "#/properties/Sub_Client_ID"
        },
    ]
}

