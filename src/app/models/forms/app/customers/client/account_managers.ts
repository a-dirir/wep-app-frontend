export let tableModel:any = {
    "fields": [
        {
            "label": "Account Manager Name",
            "id": "name",
            "shown": true
        },
        {
            "label": "Account Manager Email",
            "id": "email",
            "shown": true,
        },
        {
            "label": "Account Manager Title",
            "id": "title",
            "shown": true
        },
        {
            "label": "Account Manager Phone Number",
            "id": "phone_number",
            "shown": true,
        },

    ],
    "actions": {'add': true, 'edit': true, 'filter': true, 'download': true, 'delete': true},
    "dynamicActions": [],
};

export let formModel:any = {
    "type": "object",
    "properties": {
        "name": {
        "type": "string",
        "description": "Please enter account manager name."
        },
        "email": {
            "type": "string",
            "description": "Please type account manager email."
        },
        "title": {
            "type": "string",
            "description": "Please type account manager title."
        },
        "phone_number": {
            "type": "string",
            "description": "Please type account manager phone number."
        },
    },
}

export let formUIModel:any = {
    "type": "VerticalLayout",
    "label": "IAM User",
    "elements": [
        {
            "type": "VerticalLayout",
            "elements": [
            {
                "type": "Control",
                "label": "Account Manager Name",
                "scope": "#/properties/name"
            },
            {
                "type": "Control",
                "label": "Account Manager Email",
                "scope": "#/properties/email"
            },
            {
                "type": "Control",
                "label": "Account Manager Title",
                "scope": "#/properties/title"
            },
            {
                "type": "Control",
                "label": "Account Manager Phone Number",
                "scope": "#/properties/phone_number"
            },
            ]
        },
    ]
}

export let filterData: any = {}
