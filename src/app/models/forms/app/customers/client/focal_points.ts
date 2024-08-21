export let tableModel:any = {
    "fields": [
        {
            "label": "Focal Point Name",
            "id": "name",
            "shown": true
        },
        {
            "label": "Focal Point Email",
            "id": "email",
            "shown": true,
        },
        {
            "label": "Focal Point Title",
            "id": "title",
            "shown": true
        },
        {
            "label": "Focal Point Phone Number",
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
        "description": "Please enter focal Point name."
        },
        "email": {
            "type": "string",
            "description": "Please type focal Point email."
        },
        "title": {
            "type": "string",
            "description": "Please type focal Point title."
        },
        "phone_number": {
            "type": "string",
            "description": "Please type focal Point phone number."
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
                "label": "Focal Point Name",
                "scope": "#/properties/name"
            },
            {
                "type": "Control",
                "label": "Focal Point Email",
                "scope": "#/properties/email"
            },
            {
                "type": "Control",
                "label": "Focal Point Title",
                "scope": "#/properties/title"
            },
            {
                "type": "Control",
                "label": "Focal Point Phone Number",
                "scope": "#/properties/phone_number"
            },
            ]
        },
    ]
}

export let filterData: any = {}
