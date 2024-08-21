export let tableModel:any = {
    "fields": [
        {
            "label": "Sub Client ID",
            "id": "Sub_Client_ID",
            "shown": true,
        },
        {
            "label": "Domain",
            "id": "Domain",
            "shown": true,
        },
        {
            "label": "Contact Type",
            "id": "Contact_Type",
            "shown": true,
        },
        {
            "label": "Position",
            "id": "Position",
            "shown": true
        },
        {
            "label": "Contact Name",
            "id": "Contact_Name",
            "shown": true
        },
        {
            "label": "Contact Email",
            "id": "Contact_Email",
            "shown": true
        },
        {
            "label": "Contact Number",
            "id": "Contact_Number",
            "shown": true,
        },

        {
            "label": "Account Manager",
            "id": "Account_Manager",
            "shown": true
        },
        {
            "label": "MS Focal Point",
            "id": "MS_Focal_Point",
            "shown": true
        },
    ],
    "actions": {'add': true, 'edit': true, 'filter': true, 'download': true, 'delete': true},
    "dynamicActions": [],
};

export let formModel:any = {
    "type": "object",
    "properties": {
        "Contact_Name": {
        "type": "string",
        "description": "Please enter contact name."
        },
        "Contact_Email": {
            "type": "string",
            "description": "Please enter contact email"
        },
        "Contact_Number": {
            "type": "string",
            "description": "Please enter contact number."
        },
        "Contact_Type": {
            "type": "string",
            "description": "Please enter contact type.",
            "enum": [
                "Primary Contact",
                "Secondary Contact",
                "Escalation Contact"
                ]
        },
        "Account_Manager": {
            "type": "string",
            "description": "Please enter account manager name.",
            "enum": []
        },
        "MS_Focal_Point": {
            "type": "string",
            "description": "Please enter MS focal point name.",
            "enum": []
        },
        "Domain": {
            "type": "string",
            "description": "Please enter contact domain."
        },
        "Position": {
            "type": "string",
            "description": "Please enter contact position."
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
    "label": "Contacts",
    "elements": [
        {
            "type": "VerticalLayout",
            "label": "contact",
            "elements": [
                {
                    "type": "HorizontalLayout",
                    "elements": [
                    {
                        "type": "Control",
                        "label": "Name",
                        "scope": "#/properties/Contact_Name"
                    },
                    {
                        "type": "Control",
                        "label": "Email",
                        "scope": "#/properties/Contact_Email"
                    },
                    ]
                },
            ]
        },
        {
            "type": "VerticalLayout",
            "label": "contact",
            "elements": [
                {
                    "type": "HorizontalLayout",
                    "elements": [
                    {
                        "type": "Control",
                        "label": "Phone Number",
                        "scope": "#/properties/Contact_Number"
                    },
                    {
                        "type": "Control",
                        "label": "Type",
                        "scope": "#/properties/Contact_Type"
                    },
                    ]
                },
            ]
        },
        {
            "type": "VerticalLayout",
            "label": "contact",
            "elements": [
                {
                    "type": "HorizontalLayout",
                    "elements": [
                    {
                        "type": "Control",
                        "label": "Account Manager",
                        "scope": "#/properties/Account_Manager"
                    },
                    {
                        "type": "Control",
                        "label": "MS Focal Point",
                        "scope": "#/properties/MS_Focal_Point"
                    },
                    ]
                },
            ]
        },
        {
            "type": "VerticalLayout",
            "label": "contact",
            "elements": [
                {
                    "type": "HorizontalLayout",
                    "elements": [
                    {
                        "type": "Control",
                        "label": "Domain",
                        "scope": "#/properties/Domain"
                    },
                    {
                        "type": "Control",
                        "label": "Position",
                        "scope": "#/properties/Position"
                    },
                    ]
                },
            ]
        },
        {
            "type": "VerticalLayout",
            "label": "contact",
            "elements": [
                {
                    "type": "HorizontalLayout",
                    "elements": [
                    {
                        "type": "Control",
                        "label": "Sub Client Name",
                        "scope": "#/properties/Sub_Client_ID"
                    },
                    ]
                },
            ]
        },
    ],
}