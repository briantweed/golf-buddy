import useStyling from "../../../hooks/useStyling";
import FORM_FIELDS from "../../../files/form-fields";
import styles from "./styles.module.scss";
import {GSAP_FORM_FOOTER} from "@files/config/gsap-data-tags";


const FormFooter = (props) => {

    const {
        data: {
            styling,
            content
        },
    } = props;

    const className = useStyling(styles, styling);


    return (
        <div data-gsap={GSAP_FORM_FOOTER} className={className}>

            <div className={styles.buttons}>

                {content.map((button) => {

                    const {
                        id,
                        component,
                        styling,
                        ...config
                    } = button;

                    const ButtonField = FORM_FIELDS[component];

                    return (
                        <ButtonField
                            key={`button_${id}`}
                            config={{
                                ...config,
                                id: id,
                                styling: styling
                            }}
                        />
                    );

                })}
            </div>

        </div>
    );

};


export default FormFooter;
