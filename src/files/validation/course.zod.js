import {z} from "zod";

const validationRules = z.object({

    "CourseName": z
        .string({
            required_error: "Course is required"
        })
        .trim()
        .min(1, {
            message: "Course is required"
        }),

    "RoundLength": z
        .string({
            required_error: "Round Type is required"
        })
        .trim()
        .min(1, {
            message: "Round Type is required"
        })
});


export default validationRules;