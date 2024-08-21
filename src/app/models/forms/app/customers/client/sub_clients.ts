export let tableModel:any = {
    "fields": [
        {
            "label": "Sub Client Name",
            "id": "Name",
            "shown": true
        },
        {
            "label": "Client ID",
            "id": "Client_ID",
            "shown": true,
        },
        {
            "label": "Status",
            "id": "Status",
            "shown": true,
        },
        {
            "label": "First Engagement Date",
            "id": "First_Engagement_Date",
            "shown": true,
        },
        {
            "label": "Engagement Year",
            "id": "Engagement_Year",
            "shown": true,
        },
        {
            "label": "Engagement Quarter",
            "id": "Engagement_Quarter",
            "shown": true,
        },

    ],
    "actions": {'add': true, 'edit': true, 'filter': true, 'download': true, 'delete': true},
    "dynamicActions": [],
};

export let formModel:any = {
    "type": "object",
    "properties": {
        "Name": {
        "type": "string",
        "description": "Please enter sub client name."
        },
        "Client_ID": {
            "type": "string",
            "description": "Please choose client name.",
            "enum": []
        },
        "Status": {
            "type": "string",
            "description": "Please enter sub client name.",
            "enum": ["Current", "Terminated"]
        },
        "First_Engagement_Date": {
            "type": "string",
            "format": "date",
            "description": "Please enter first engagement date.",
        },   
    },
}

export let formUIModel:any = {
    "type": "VerticalLayout",
    "label": "Sub Client",
    "elements": [
        {
            "type": "VerticalLayout",
            "elements": [
            {
                "type": "Control",
                "label": "Name",
                "scope": "#/properties/Name"
            },
            {
                "type": "Control",
                "label": "Client Name",
                "scope": "#/properties/Client_ID"
            },
            ]
        },
        {
            "type": "HorizontalLayout",
            "elements": [
            {
                "type": "Control",
                "label": "First Engagement Date",
                "scope": "#/properties/First_Engagement_Date"
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

export let filterData: any = {
    "Status": "Current",
}
