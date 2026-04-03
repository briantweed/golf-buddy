import {BUTTON_TYPES, FIELD_TYPES} from "@libraries/FormBuilder/files/config";
import courses from "@files/config/courses";

const courseOptions = courses.map((course) => {
    return {
        value: course.CourseName,
        label: course.CourseName
    }
});

const setupForm = {

    "name": "setup",

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
                        content: "Course Name"
                    },
                    input: {
                        type: "text",
                        autoComplete: "off",
                        options: courseOptions,
                        isSearchable: false
                    }
                },

                // ROUND LENGTH
                {
                    id: "RoundLength",
                    component: FIELD_TYPES.RADIO_FIELD,
                    required: false,
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
                    }
                },

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