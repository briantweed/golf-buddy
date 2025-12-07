import {useRef} from "react";
import {createPortal} from "react-dom";
import useModal from "./useModal";
import useTheme from "@storage/context/theme";
import useStyling from "@hooks/useStyling";
import {FocusTrap} from "focus-trap-react";
import {GSAP_MODAL, GSAP_MODAL_CONTAINER} from "@files/config/gsap-data-tags";
import styles from "./styles.module.scss";

import CloseModalIcon from "@components/icons/CloseModalIcon";
import Overlay from "@components/utility/Overlay";
import TitleHover from "@components/utility/TitleHover";


const Modal = (props) => {

    const {
        children,
        display = false,
        options = {},
        styling,
        tooltip = {}
    } = props;

    const portalRef = useRef(null);

    const className = useStyling(styles, styling);

    const {isDefaultTheme} = useTheme();

    const {closeModal} = useModal(portalRef, props);


    return (portalRef.current) ? createPortal(
        <>
            {display && (
                <FocusTrap focusTrapOptions={options}>
                    <div
                        data-gsap={GSAP_MODAL_CONTAINER}
                        role="alertdialog"
                        aria-modal="true"
                    >
                        <Overlay/>

                        <div className={className}>
                            <div className={styles.modal} data-gsap={GSAP_MODAL}>
                                <div className={styles.close}>
                                    <TitleHover
                                        title={"Close"}
                                        {...tooltip}
                                    >
                                        <button
                                            id={"close_button"}
                                            type={"button"}
                                            onClick={closeModal}
                                            aria-label="Close Modal"
                                        ><CloseModalIcon styling={{"color": isDefaultTheme ? "black" : "white"}} label={"Close"}/></button>
                                    </TitleHover>
                                </div>
                                <div className={styles.modalBody}>{children}</div>
                            </div>
                        </div>
                    </div>
                </FocusTrap>
            )}
        </>, portalRef.current
    ) : null;

};


export default Modal;