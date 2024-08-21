export let formModel:any = {
    "type": "object",
    "properties": {
        "Domain": {
            "type": "string",
            // "description": "Please choose customer name.",
            "enum": [],
        }, 
    },
}

export let formUIModel:any = {
    "type": "VerticalLayout",
    "label": "Domain",
    "elements": [
        {
            "type": "VerticalLayout",
            "elements": [
            {
                "type": "Control",
                "label": "Domain Name",
                "scope": "#/properties/Domain"
            },
            ]
        },
    ]
}
