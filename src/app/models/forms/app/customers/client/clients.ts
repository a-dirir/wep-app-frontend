
export let tableModel:any = {
    "fields": [
        {
            "label": "Client Name",
            "id": "Name",
            "shown": true,
        },
        {
            "label": "Client Status",
            "id": "Offboarded",
            "shown": true,
        }
    ],
    "actions": {'add': true, 'edit': true, 'filter': true, 'download': true, 'delete': true, showLinkedServices: true},
    "dynamicActions": [],
};

export let formModel:any = {
    "type": "object",
    "properties": {
        "Name": {
        "type": "string",
        "description": "Please enter client name."
        },
        "Offboarded": {
            "type": "string",
            "description": "Please enter client status.",
            "enum": ["Yes", "No"]
        }   
    },
}

export let formUIModel:any = {
        "type": "VerticalLayout",
        "label": "Client",
        "elements": [
            {
                "type": "HorizontalLayout",
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
                        "label": "Offboarded",
                        "scope": "#/properties/Offboarded"
                    }
                    ]
                    }
                ],
            }
    ]
    
}

export let filter = {}


  