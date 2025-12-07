import {useEffect, useState} from "react";
import {useForm, FormProvider} from "react-hook-form";
import {DevTool} from "@hookform/devtools";
import {zodResolver} from "@hookform/resolvers/zod";
import useFormBuilderHelper from "./hooks/useFormBuilderHelper";
import FORM_FIELDS from "./files/form-fields";

import FormFooter from "./components/layout/FormFooter";


const useFormBuilder = (config, validationRules, callback, settings = {}) => {

    const {
        steps,
        footer
    } = config;

    const {
        defaultValues = {},
        styles = {},
        handleChange = null,
        handleWatch = null,
        validationMode = "onSubmit",
        devtools = false,
        scroll = true,
        scrollId = null,
        debug = false
    } = settings;

    const [currentStep, setCurrentStep] = useState(0);

    const {
        scrollToError,
        combinedDefaultValues,
        stepDetails,
        handleSubmission,
        shouldDisplayField,
    } = useFormBuilderHelper({config, defaultValues, scrollId, callback});

    const methods = useForm({
        defaultValues: combinedDefaultValues,
        shouldUnregister: true,
        shouldFocusError: false,
        mode: validationMode,
        resolver: zodResolver(validationRules)
    });

    const {
        register,
        watch,
        control,
        trigger,
        formState,
        handleSubmit,
        formState: {errors}
    } = methods;


    const changeStep = (stepProgression) => {
        const nextStep = steps[currentStep + stepProgression];
        const display = nextStep.fields.some((field) => shouldDisplayField(field.related, watch));
        if (!display) {
            stepProgression += stepProgression > 0 ? 1 : -1;
            return changeStep(stepProgression);
        }
        return setCurrentStep((currentStep) => currentStep + stepProgression);
    };


    const nextStep = async () => {
        const isValid = await trigger(stepDetails[currentStep]);
        if (isValid) {
            changeStep(1);
        } else if (scroll) {
            scrollToError(errors);
        }
    };


    const previousStep = () => {
        changeStep(-1);
    };


    useEffect(() => {
        if (scroll) {
            scrollToError(errors);
        }
    }, [errors, formState.isSubmitting, scroll, scrollToError]);


    useEffect(() => {
        if (handleWatch) {
            // eslint-disable-next-line react-hooks/incompatible-library
            handleWatch(watch());
        }
    }, [handleWatch, watch]);


    useEffect(() => {
        if (debug) {
            console.log(watch());
            if (formState.isSubmitted) {
                if(Object.keys(errors).length > 0) {
                    console.log(errors);
                } else {
                    console.log("no errors");
                }
            }
        }
    }, [debug, errors, formState.isSubmitted, watch]);


    useEffect(() => {
        if (handleChange) {
            handleChange({
                step: currentStep
            });
        }
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [handleChange, currentStep]);


    return (
        <FormProvider {...methods}>
            <form
                noValidate={true}
                onSubmit={handleSubmit(handleSubmission)}
                className={styles.form}
            >
                {steps.map((step, index) => {

                    const {
                        fields,
                        backButton,
                        nextButton,
                    } = step;

                    return (
                        <div key={index} className={index === currentStep ? "" : "hidden"}>

                            {fields.map((field) => {

                                const {
                                    id,
                                    component,
                                    related = null,
                                    ...config
                                } = field;

                                if (shouldDisplayField(related, watch)) {

                                    const FormField = FORM_FIELDS[component];

                                    return (
                                        <FormField
                                            key={`field_${id}`}
                                            register={register}
                                            watch={watch}
                                            config={{
                                                ...config,
                                                id: id
                                            }}
                                            error={errors[id]}
                                            control={control}
                                        />
                                    );
                                }

                                return null;

                            })}

                            {( (stepDetails.length > 1) && (currentStep + 1 < stepDetails.length) ) && (

                                <div className={`flex ${currentStep === 0 ? "justify-end" : "justify-between"}`}>
                                    {currentStep !== 0 && (
                                        <button
                                            type={"button"}
                                            onClick={previousStep}
                                        >{backButton?.text || "Back"}</button>
                                    )}

                                    <button
                                        type={"button"}
                                        onClick={nextStep}
                                    >{nextButton?.text || "Next"}</button>
                                </div>
                            )}

                        </div>
                    );
                })}

                {(stepDetails.length - 1) <= currentStep && (
                    <>
                        {footer && (
                            <FormFooter data={footer}/>
                        )}
                    </>
                )}

            </form>

            {devtools && (
                <DevTool control={control}/>
            )}

        </FormProvider>
    );

};


export default useFormBuilder;