import {z} from "zod";

const validationRules = z.object({

    "CourseName": z
        .string({
            required_error: "Course Name is required"
        })
        .trim()
        .min(1, {
            message: "Course Name is required"
        }),

    "RoundLength": z
        .string({
            required_error: "Round Type is required"
        })
        .trim()
        .min(1, {
            message: "Course Name is required"
        }),


    "Players": z.object({
        "Name": z
            .string({
                required_error: "Name is required"
            }).trim()
            .min(1, {
                message: "Name is required"
            }),
        "Hcap": z.coerce
            .number({
                message: "Numbers only"
            })
            .optional(),
    }).array()

});


export default validationRules;