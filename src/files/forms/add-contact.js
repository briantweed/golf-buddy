import {BUTTON_TYPES, COMPARISONS, FIELD_TYPES} from "@libraries/FormBuilder/files/config";
import {TELEPHONE_TYPES} from "@files/config";
import contactRoleOptions from "@files/forms/options/contact-roles";
import divisionOptions from "@files/forms/options/contact-divisions";
import floridaBranches from "@files/forms/options/florida-branches";
import responsibilityOptions from "@files/forms/options/responsibility-options";
import specialityOptions from "@files/forms/options/contact-specialities";
import states from "@files/forms/options/states";
import telephoneTypes from "@files/forms/options/telephone-types";

import CloseModalIcon from "@components/icons/CloseModalIcon";
import PlusIcon from "@components/icons/PlusIcon";


const addUserForm = {

    "name": "add-contact",

    "steps": [
        {
            "fields": [

                // CONTACT NAME
                {
                    id: "ContactName",
                    component: FIELD_TYPES.INPUT_FIELD,
                    required: true,
                    styling: {
                        variant: "inline"
                    },
                    label: {
                        content: "Contact Name"
                    },
                    input: {
                        type: "text",
                        autoComplete: "off"
                    }
                },

                // ROLE
                {
                    id: "Role",
                    component: FIELD_TYPES.TYPEAHEAD_FIELD,
                    required: true,
                    styling: {
                        variant: "inline"
                    },
                    label: {
                        content: "Role"
                    },
                    input: {
                        placeholder: "select",
                        options: contactRoleOptions
                    },
                },

                // TITLE
                {
                    id: "Title",
                    component: FIELD_TYPES.INPUT_FIELD,
                    required: false,
                    styling: {
                        variant: "inline"
                    },
                    label: {
                        content: "Job Title"
                    },
                    input: {
                        type: "text",
                        autoComplete: "off"
                    }
                },

                // TELEPHONE NUMBERS
                {
                    id: "Telephones",
                    component: FIELD_TYPES.FIELD_ARRAY,
                    legend: {
                        content: "Phone"
                    },
                    styling: {
                        variant: ["inline", "tel"]
                    },
                    subfields: [
                        {
                            id: "Type",
                            component: FIELD_TYPES.TYPEAHEAD_FIELD,
                            required: true,
                            label: false,
                            input: {
                                type: "text",
                                options: telephoneTypes,
                                placeholder: "Type",
                                isClearable: false
                            }
                        },
                        {
                            id: "Number",
                            component: FIELD_TYPES.INPUT_FIELD,
                            required: true,
                            label: false,
                            input: {
                                type: "tel",
                                placeholder: "(888) 123-4567",
                                mask: "(999) 999-9999",
                                maskPlaceholder: "_"
                            }
                        },
                        {
                            id: "Hyphen",
                            component: FIELD_TYPES.MARKDOWN_FIELD,
                            markdown: "&ndash;",
                            styling: {
                                "Paragraph": {
                                    "variant": "small",
                                    "className": "flex justify-center items-start mt-3 font-semibold"
                                }
                            },
                            related: {
                                type: COMPARISONS.ALL,
                                rules: [
                                    {
                                        field: "Type",
                                        comparison: COMPARISONS.EQUAL,
                                        value: TELEPHONE_TYPES.OFFICE
                                    }
                                ]
                            }
                        },
                        {
                            id: "Extension",
                            component: FIELD_TYPES.INPUT_FIELD,
                            required: false,
                            label: false,
                            input: {
                                type: "tel",
                                placeholder: "Ext",
                                mask: "999999",
                                maskPlaceholder: " "
                            },
                            related: {
                                type: COMPARISONS.ALL,
                                rules: [
                                    {
                                        field: "Type",
                                        comparison: COMPARISONS.EQUAL,
                                        value: TELEPHONE_TYPES.OFFICE
                                    }
                                ]
                            }
                        }
                    ],

                    appendText: <><PlusIcon styling={{"color": "blue"}} />Add Phone</>,
                    deleteText: <CloseModalIcon styling={{"color": "black"}} label={"delete"}/>,
                    canDeleteInitial: true,
                    maximumEntries: 2,
                    incrementFields: false
                },

                // EMAIL ADDRESS
                {
                    id: "Email",
                    component: FIELD_TYPES.INPUT_FIELD,
                    required: true,
                    styling: {
                        variant: "inline"
                    },
                    label: {
                        content: "Email"
                    },
                    input: {
                        type: "email",
                        autoComplete: "off"
                    }
                },

                // SPECIALTIES
                {
                    id: "Specialties",
                    component: FIELD_TYPES.TYPEAHEAD_FIELD,
                    required: true,
                    styling: {
                        variant: "inline"
                    },
                    label: {
                        content: "Specialties"
                    },
                    input: {
                        isMulti: true,
                        type: "text",
                        options: specialityOptions,
                        autoComplete: "off"
                    }
                },

                // RESPONSIBILITIES
                {
                    id: "Responsibility",
                    component: FIELD_TYPES.RADIO_FIELD,
                    required: false,
                    styling: {
                        variant: "inline"
                    },
                    label: {
                        content: "Responsibility"
                    },
                    input: {
                        type: "text",
                        options: responsibilityOptions,
                        autoComplete: "off"
                    }
                },

                // STATES
                {
                    id: "States",
                    component: FIELD_TYPES.TYPEAHEAD_FIELD,
                    required: false,
                    styling: {
                        variant: "inline"
                    },
                    label: {
                        content: "States"
                    },
                    input: {
                        type: "text",
                        autoComplete: "off",
                        isMulti: true,
                        options: states
                    },
                    related: {
                        type: COMPARISONS.ALL,
                        rules: [
                            {
                                field: "Responsibility",
                                comparison: COMPARISONS.EQUAL,
                                value: "state"
                            }
                        ]
                    }
                },


                // BRANCHES
                {
                    id: "Branches",
                    component: FIELD_TYPES.TYPEAHEAD_FIELD,
                    required: false,
                    styling: {
                        variant: "inline"
                    },
                    label: {
                        content: "Branches"
                    },
                    input: {
                        type: "text",
                        autoComplete: "off",
                        isMulti: true,
                        options: floridaBranches
                    },
                    related: {
                        type: COMPARISONS.ALL,
                        rules: [
                            {
                                field: "States",
                                comparison: COMPARISONS.INCLUDES,
                                value: "FL"
                            }
                        ]
                    }
                },

                // DIVISIONS
                {
                    id: "Divisions",
                    component: FIELD_TYPES.TYPEAHEAD_FIELD,
                    required: false,
                    styling: {
                        variant: "inline"
                    },
                    label: {
                        content: "Divisions"
                    },
                    input: {
                        type: "text",
                        autoComplete: "off",
                        isMulti: true,
                        options: divisionOptions
                    },
                    related: {
                        type: COMPARISONS.ALL,
                        rules: [
                            {
                                field: "Responsibility",
                                comparison: COMPARISONS.EQUAL,
                                value: "division"
                            }
                        ]
                    }
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
                text: "Add Contact",
                icon: {
                    src: "plus",
                    position: "before"
                },
                styling: {
                    color: "primary"
                }
            }
        ]
    }

};


export default addUserForm;