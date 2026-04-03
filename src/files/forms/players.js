import {BUTTON_TYPES, FIELD_TYPES} from "@libraries/FormBuilder/files/config";


const setupForm = {

    "name": "players",

    "steps": [
        {
            "fields": [


                // PLAYERS
                {
                    id: "Players",
                    component: FIELD_TYPES.FIELD_ARRAY,
                    styling: {
                        variant: "slim"
                    },
                    legend: {
                        content: "Players"
                    },
                    subfields: [
                        {
                            id: "Name",
                            component: FIELD_TYPES.INPUT_FIELD,
                            required: true,
                            label: {
                                content: "",
                            },
                            input: {
                                type: "text"
                            }
                        }
                    ],
                    appendText: <span className="px-1">+</span>,
                    deleteText: <span className="px-3 flex items-center h-40 m-10">-</span>,
                    canDeleteInitial: true,
                    maximumEntries: 6,
                    incrementFields: true
                }

            ]
        }
    ],

    footer: {
        styling: {
            className: "justify-end"
        },
        content: [
            {
                id: "LoginSubmit",
                component: BUTTON_TYPES.SUBMIT_BUTTON,
                text: "Save Changes",
                styling: {
                    color: "success"
                }
            }
        ]
    }

};


export default setupForm;