import {z} from "zod";

const validationRules = z.object({

    "Players": z.object({
        "Name": z
            .string({
                required_error: "Name is required"
            }).trim()
            .min(1, {
                message: "Name is required"
            })
    }).array()

});


export default validationRules;