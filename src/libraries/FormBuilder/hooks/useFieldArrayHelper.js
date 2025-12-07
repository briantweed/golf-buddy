import useEvaluate from "./useEvaluate";


const useFieldArrayHelper = () => {

    const [evaluate] = useEvaluate();


    const shouldDisplaySubField = (displayConditions, watch, subfield) => {
        if (displayConditions) {
            const watchedFields = displayConditions.rules.map((rule) => `${subfield}.${rule.field}`);
            const watchedFieldsValues = watch(watchedFields);
            const watchedFieldsObject = watchedFields.reduce((obj, field, index) => {
                obj[field] = watchedFieldsValues[index];
                return obj;
            }, {});


            const rulesMet = displayConditions.rules.filter((rule) => {
                return evaluate(watchedFieldsObject[`${subfield}.${rule.field}`], rule.value, rule.comparison);
            });


            return evaluate(displayConditions.rules.length, rulesMet.length, displayConditions.type);
        }
        return true;
    };


    return {
        shouldDisplaySubField
    };

};


export default useFieldArrayHelper;