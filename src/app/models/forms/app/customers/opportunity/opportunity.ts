export let tableModel:any = {
    "fields": [
        {
            "label": "Sub Client ID",
            "id": "Sub_Client_ID",
            "shown": true,
        },
        {
            "label": "Opportunity Unique ID",
            "id": "Opportunity_ID_UQ",
            "shown": true
        },
        {
            "label": "Opportunity ID",
            "id": "Opportunity_ID",
            "shown": true
        },
        {
            "label": "Status",
            "id": "Status",
            "shown": true
        },
        {
            "label": "Start Date",
            "id": "Start_Date",
            "shown": true,
        },
        {
            "label": "End Date",
            "id": "End_Date",
            "shown": true,
        },
    ],
    "actions": {'add': true, 'edit': true, 'filter': true, 'download': true, 'delete': true, },
    "dynamicActions": [],
};

export let formModel:any = {
    "type": "object",
    "properties": {
        "Opportunity_ID_UQ": {
        "type": "string",
        "description": "Please enter opportunity unique ID",
        },
        "Opportunity_ID": {
            "type": "string",
            "description": "Please enter opportunity ID",
            },
        "Sub_Client_ID": {
            "type": "string",
            "description": "Please choose sub client name.",
            "enum": []
        },
        "Start_Date": {
            "type": "string",
            "format": "date",
            "description": "Please enter start date.",
        },   
        "End_Date": {
            "type": "string",
            "format": "date",
            "description": "Please enter end date.",
        },
        "Status": {
            "type": "string",
            "description": "Please choose status.",
            "enum": ["New", "Renewal", "Addendum"]
        },   

    },
}

export let formUIModel:any = {
    "type": "VerticalLayout",
    "elements": [
        {
            "type": "HorizontalLayout",
            "elements": [
            {
                "type": "Control",
                "label": "opportunity Unique ID",
                "scope": "#/properties/Opportunity_ID_UQ"
            },
            {
                "type": "Control",
                "label": "opportunity ID",
                "scope": "#/properties/Opportunity_ID"
            },
            ]
        },
        {
            "type": "HorizontalLayout",
            "elements": [
                {
                    "type": "Control",
                    "label": "Start Date",
                    "scope": "#/properties/Start_Date",
                    "dateFormat": "YYYY-MM-DD",
                    "dateSaveFormat": "YYYY-MM-DD",
                },
                {
                    "type": "Control",
                    "label": "End Date",
                    "scope": "#/properties/End_Date"
                },
            ]
        },
        {
            "type": "HorizontalLayout",
            "elements": [
                {
                    "type": "Control",
                    "label": "Sub Client Name",
                    "scope": "#/properties/Sub_Client_ID"
                },
                {
                    "type": "Control",
                    "label": "Status",
                    "scope": "#/properties/Status"
                },
            ]
        },
       
    ]
}

