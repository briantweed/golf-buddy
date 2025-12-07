import {useRef} from "react";
import {createPortal} from "react-dom";
import useModal from "./useModal";
import {FocusTrap} from "focus-trap-react";
import styles from "./styles.module.scss";


import Overlay from "@components/utility/Overlay";
import {PORTAL_ID} from "@files/config";


const Modal = (props) => {

    const {
        children,
        display = false,
        options = {}
    } = props;

    const portalRef = useRef(null);


    const {closeModal} = useModal(portalRef, props);


    return createPortal(
        <>
            {display && (
                <FocusTrap focusTrapOptions={options}>
                    <div
                        data-gsap={"GSAP_MODAL_CONTAINER"}
                        role="alertdialog"
                        aria-modal="true"
                    >
                        <Overlay/>

                        <div className={styles.contents}>
                            <div className={styles.modal} data-gsap={"GSAP_MODAL"}>
                                <div className={styles.close}>

                                    <button
                                        id={"close_button"}
                                        type={"button"}
                                        onClick={closeModal}
                                        aria-label="Close Modal"
                                    >X
                                    </button>
                                </div>
                                <div className={styles.modalBody}>{children}</div>
                            </div>
                        </div>
                    </div>
                </FocusTrap>
            )}
        </>, document.querySelector(`#${PORTAL_ID}`)
    );

};


export default Modal;