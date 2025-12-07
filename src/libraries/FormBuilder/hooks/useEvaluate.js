import {COMPARISONS} from "../files/config";


const useEvaluate = () => {

    const evaluate = (value, condition, comparison = "") => {

        switch (comparison) {

            case COMPARISONS.NOT_EQUAL:
                return value !== condition;

            case COMPARISONS.ANY:
                return value <= condition;

            case COMPARISONS.GREATER_THAN:
                if (Array.isArray(value)) {
                    value = value.length;
                }
                return value > condition;

            case COMPARISONS.INCLUDES:
                if (!Array.isArray(value)) {
                    value = [value];
                }
                return value.includes(condition);

            case COMPARISONS.ALL:
            case COMPARISONS.EQUAL:
            default:
                return value === condition;

        }

    };

    return [evaluate];

};


export default useEvaluate;