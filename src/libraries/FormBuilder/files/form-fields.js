import {BUTTON_TYPES, FIELD_TYPES} from "./config";

import CheckboxField from "../components/fields/CheckboxField";
import InputField from "../components/fields/InputField";
import RadioField from "../components/fields/RadioField";
import TypeAheadField from "../components/fields/TypeAheadField";
import FieldArray from "../components/fields/FieldArray";
import SubmitButton from "../components/buttons/SubmitButton";
import MarkdownField from "../components/fields/MarkdownField";


const FORM_FIELDS = {
    [FIELD_TYPES.CHECKBOX_FIELD]: CheckboxField,
    [FIELD_TYPES.INPUT_FIELD]: InputField,
    [FIELD_TYPES.RADIO_FIELD]: RadioField,
    [FIELD_TYPES.MARKDOWN_FIELD]: MarkdownField,
    [FIELD_TYPES.TYPEAHEAD_FIELD]: TypeAheadField,
    [FIELD_TYPES.FIELD_ARRAY]: FieldArray,
    [BUTTON_TYPES.SUBMIT_BUTTON]: SubmitButton
};


export default FORM_FIELDS;