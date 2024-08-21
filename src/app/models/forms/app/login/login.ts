export let formModel:any = {
    "type": "object",
    "properties": {
        "Name": {
        "type": "string",
        "description": "Please enter user name."
        },
        "Password": {
        "type": "string",
        "description": "Please enter password."
        }   
    },
}

export let formUIModel:any = {
        "type": "VerticalLayout",
        "label": "Login",
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
                            "label": "Password",
                            "scope": "#/properties/Password",
                            "options": {
                                "format": "password"
                              }
                        },
                    ]
                    }
                ],
            }
    ]
    
}



  