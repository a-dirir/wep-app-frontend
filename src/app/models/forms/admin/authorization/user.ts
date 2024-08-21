export let tableModel:any = {
    "fields": [
        {
            "label": "User Name",
            "id": "name",
            "shown": true
        },
        {
            "label": "User Email",
            "id": "email",
            "shown": true,
        },
        {
            "label": "Group",
            "id": "user_group",
            "shown": true,
        },

    ],
    "actions": {'add': true, 'edit': true, 'filter': true, 'download': true, 'delete': true},
    "dynamicActions": [{ "label": "Generate Credentials", "action": "Generate Credentials" }],
};

export let formModel:any = {
    "type": "object",
    "properties": {
        "name": {
        "type": "string",
        "description": "Please enter user name."
        },
        "email": {
            "type": "string",
            "description": "Please type user email."
        },
        "user_group": {
            "type": "string",
            "description": "Please enter sub client name.",
            "enum": [
                "admin",
                "user"
                ]
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
                "label": "User Name",
                "scope": "#/properties/name"
            },
            {
                "type": "Control",
                "label": "User Email",
                "scope": "#/properties/email"
            },
            {
                "type": "Control",
                "label": "User Group",
                "scope": "#/properties/user_group"
            },
            ]
        },
    ]
}

// export let filterData: any = {}
