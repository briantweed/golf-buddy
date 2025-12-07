import {z} from "zod";
import telephoneTypes from "@files/forms/options/telephone-types";
import specialityOptions from "@files/forms/options/contact-specialities";
import responsibilityOptions from "@files/forms/options/responsibility-options";
import states from "@files/forms/options/states";
import divisionOptions from "@files/forms/options/contact-divisions";
import floridaBranches from "@files/forms/options/florida-branches";
import contactRoleOptions from "@files/forms/options/contact-roles";


const validationRules = z.object({

    "ContactName": z
        .string({
            required_error: "Name is required"
        })
        .trim()
        .min(1, {
            message: "Name is required"
        }),

    "Role": z.enum(contactRoleOptions.map((item) => item.value), {
        message: "Role is required"
    }),

    "Title": z
        .string({
            required_error: "" +
                "Job Title is required"
        })
        .trim()
        .optional(),

    "Telephones": z.object({
        "Type": z.enum(telephoneTypes.map((item) => item.value), {
            message: "Type is required"
        }),
        "Number": z.coerce
            .string({
                required_error: "Number is required"
            }).trim()
            .min(1, {
                message: "Number is required"
            })
            .regex(/^\([2-9]\d{2}\)\s\d{3}-\d{4}$/, {
                message: "Number is wrong format"
            }),
        "Extension": z.coerce
            .number({
                message: "Extension numbers only"
            })
            .optional(),
    }).array(),

    "Email": z
        .string({
            required_error: "Email is required"
        }).trim()
        .min(1, {
            message: "Email is required"
        })
        .email({
            message: "Email is invalid format"
        }),

    "Specialties": z
        .array(
            z.enum(specialityOptions.map((item) => item.value), {
                message: "Specialties is required"
            }), "Specialties is required"
        ).min(1, {
            message: "Specialties is required"
        }),

    "Responsibility": z
        .enum(responsibilityOptions.map((item) => item.value), {
            message: "Responsibility is required."
        })
        .nullable(),

    "States": z
        .array(
            z.enum(states.map((item) => item.value), {
                message: "States is required"
            }), "States is required"
        )
        .optional(),

    "Branches": z
        .array(
            z.enum(floridaBranches.map((item) => item.value), {
                message: "Branches is required"
            }), "Branches is required"
        )
        .optional(),


    "Divisions": z
        .array(
            z.enum(divisionOptions.map((item) => item.value), {
                message: "Divisions is required"
            }), "Divisions is required"
        )
        .optional()

    // }).superRefine((data, ctx) => {
    //
    // const {
    //     Responsibility,
    //     States,
    //     Divisions,
    //     Branches
    // } = data;
    //
    // if (Responsibility === "state") {
    //     if (!States || States.length === 0) {
    //         ctx.addIssue({
    //             code: "custom",
    //             path: ["States"],
    //             message: "States is required",
    //         });
    //     }
    //
    //     else if (States.includes("FL") && (!Branches || Branches.length === 0)) {
    //         ctx.addIssue({
    //             code: "custom",
    //             path: ["Branches"],
    //             message: "Branches is required",
    //         });
    //     }
    //
    // }
    //
    // if (Responsibility === "division") {
    //     if (!Divisions || Divisions.length === 0) {
    //         ctx.addIssue({
    //             code: "custom",
    //             path: ["Divisions"],
    //             message: "Divisions is required",
    //         });
    //     }
    // }

});


export default validationRules;