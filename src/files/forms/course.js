import {BUTTON_TYPES, FIELD_TYPES} from "@libraries/FormBuilder/files/config";
import courses from "@files/config/courses";


const setupForm = {

    "name": "course",

    "steps": [
        {
            "fields": [

                // COURSE NAME
                {
                    id: "CourseName",
                    component: FIELD_TYPES.TYPEAHEAD_FIELD,
                    required: true,
                    styling: {
                        variant: "inline"
                    },
                    label: {
                        content: "Course"
                    },
                    input: {
                        type: "text",
                        autoComplete: "off",
                        options: courses,
                        isSearchable: false
                    },
                    defaultValue: ""
                },

                // ROUND LENGTH
                {
                    id: "RoundLength",
                    component: FIELD_TYPES.RADIO_FIELD,
                    required: true,
                    styling: {
                        variant: "inline"
                    },
                    label: {
                        content: "Round Length"
                    },
                    input: {
                        type: "text",
                        options: [
                            {
                                value: "9",
                                label: "9"
                            },
                            {
                                value: "18",
                                label: "18"
                            }
                        ]
                    },
                    defaultValue: ""
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