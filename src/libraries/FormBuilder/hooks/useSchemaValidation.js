import {useCallback} from "react";
import Ajv from "ajv/dist/2020";
import addFormats from "ajv-formats";

import ExternalLog from "@methods/external-log";


const useSchemaValidation = (name) => {

    const testSchema = (data) => {
        const ajv = new Ajv({
            allErrors: true,
            removeAdditional: true,
            allowUnionTypes: true,
            coerceTypes: "array"
        });

        addFormats(ajv);

        const schema = require(`@files/schemas/${name}.schema.json`);

        const validate = ajv.compile(schema);

        if (!validate(data)) {
            ExternalLog(`API Schema: ${JSON.stringify(validate.errors)}`, "error");
        }
    };


    const validateSchema = useCallback((data) => {
        const ajv = new Ajv({
            allErrors: true,
            removeAdditional: true,
            coerceTypes: "array"
        });

        addFormats(ajv);

        const schema = require(`@files/schemas/${name}.schema.json`);

        const validate = ajv.compile(schema);

        if (!validate(data)) {
            return {
                result: false,
                errors: validate.errors
            };
        }
        return {
            result: true,
            results: data,
            errors: {}
        };

    }, [name]);


    return {testSchema, validateSchema};

};


export default useSchemaValidation;