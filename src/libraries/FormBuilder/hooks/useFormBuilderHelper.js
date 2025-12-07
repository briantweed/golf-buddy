import {useMemo} from "react";
import useEvaluate from "./useEvaluate";
import useScrollToError from "./useScrollToError";
import useSchemaValidation from "./useSchemaValidation";


const useFormBuilderHelper = (props) => {

    const {
        config: {
            name,
            steps
        },
        scrollId,
        defaultValues,
        callback
    } = props;

    const combinedDefaultValues = {
        ...steps.reduce((acc, step) => {
            step.fields.forEach((field) => {
                if (field.defaultValue !== undefined) {
                    acc[field.id] = field.defaultValue;
                }
            });
            return acc;
        }, {}),
        ...defaultValues
    };

    const {validateSchema} = useSchemaValidation(name);

    const [evaluate] = useEvaluate();

    const [scrollToError] = useScrollToError(scrollId);


    const handleSubmission = (data) => {
        const {result, errors} = validateSchema(data);
        if (result) {
            callback(data);
        }
        else {
            console.clear();
            console.log("\nSCHEMA VALIDATION ERRORS\n\n");
            console.table(errors.reduce((acc, curr, i) => {
                acc[i] = {
                    path: curr.instancePath,
                    message: curr.message
                };
                return acc;
            }, []));
        }
    };


    const shouldDisplayField = (displayConditions, watch) => {
        if (displayConditions) {
            const watchedFields = displayConditions.rules.map((rule) => rule.field);
            const watchedFieldsValues = watch(watchedFields);
            const watchedFieldsObject = watchedFields.reduce((obj, field, index) => {
                obj[field] = watchedFieldsValues[index];
                return obj;
            }, {});
            const rulesMet = displayConditions.rules.filter((rule) => {
                return evaluate(watchedFieldsObject[rule.field], rule.value, rule.comparison);
            });
            return evaluate(displayConditions.rules.length, rulesMet.length, displayConditions.type);
        }
        return true;
    };


    const stepDetails = useMemo(() => {
        return steps.map((step) => step.fields.map((field) => field.id));
    }, [steps]);


    return {
        scrollToError,
        combinedDefaultValues,
        stepDetails,
        handleSubmission,
        shouldDisplayField
    };

};


export default useFormBuilderHelper;