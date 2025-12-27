import {FIELD_TYPES} from "@libraries/FormBuilder/files/config";

const setupForm = {

    "name": "setup",

    "steps": [
        {
            "fields": [

                // CONTACT NAME
                {
                    id: "CourseName",
                    component: FIELD_TYPES.INPUT_FIELD,
                    required: true,
                    styling: {
                        variant: "inline"
                    },
                    label: {
                        content: "Course Name"
                    },
                    input: {
                        type: "text",
                        autoComplete: "off"
                    }
                },


                // TITLE
                {
                    id: "RoundLength",
                    component: FIELD_TYPES.RADIO_FIELD,
                    required: false,
                    styling: {
                        variant: "inline"
                    },
                    defaultValue: "18",
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

                {
                    id: "Players",
                    component: FIELD_TYPES.FIELD_ARRAY,
                    legend: {
                        content: "Players"
                    },
                    subfields: [
                        {
                            id: "Name",
                            component: FIELD_TYPES.INPUT_FIELD,
                            required: true,
                            label: {},
                            input: {
                                type: "text"
                            }
                        }
                    ],

                    appendText: <span className="px-1">+</span>,
                    deleteText: <span className="px-3 flex items-center h-40 m-10">-</span>,
                    canDeleteInitial: true,
                    maximumEntries: 6,
                    incrementFields: false
                },

            ]
        }
    ]
};


export default setupForm;