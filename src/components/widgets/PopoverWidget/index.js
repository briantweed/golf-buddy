import useTheme from "@storage/context/theme";
import {Popover} from "@base-ui-components/react/popover";
import {useEffect, useState} from "react";
import styles from "./styles.module.scss";

import ChevronIcon from "@components/icons/ChevronIcon";
import EditIcon from "@components/icons/EditIcon";
import useStyling from "@hooks/useStyling";


const PopoverWidget = (props) => {

    const {
        id,
        trigger,
        title,
        hasSelection,
        children,
        icon,
        styling,
        defaultOpen = false,
        ref: popoverRef,
        onClose

    } = props;

    const {isDefaultTheme} = useTheme();

    const className = useStyling(styles, styling);

    const [open, setOpen] = useState(Boolean(defaultOpen));


    useEffect(() => {
        if (popoverRef) {
            popoverRef.current = {
                close: () => {
                    setOpen(false);
                }
            };
        }
    }, [popoverRef, onClose]);

    return (
        <div className={className}>

            <Popover.Root open={open} onOpenChange={setOpen} ref={popoverRef}>


                <Popover.Trigger
                    data-cy={`trigger${id}`}
                    className={`${styles.trigger} ${hasSelection ? styles.highlight : ""}`}>

                    <div className={styles.text}>{trigger}</div>

                    {hasSelection ? (
                        <EditIcon styling={{
                            "color": icon || (isDefaultTheme ? "black" : "white")
                        }} />
                    ) : (
                        <ChevronIcon
                            aria-hidden={true}
                            styling={{
                                "color": icon || (isDefaultTheme ? "black" : "white"),
                                "variant": "down"
                            }}
                        />
                    )}
                </Popover.Trigger>

                <Popover.Portal>
                    <Popover.Positioner sideOffset={8} alignOffset={0} align={"start"}>

                        <Popover.Popup className={styles.popup}>

                            <Popover.Title className={styles.title}>
                                <label htmlFor={id}>{title}</label>
                            </Popover.Title>

                            <Popover.Description
                                className={styles.body}
                                render={(props, state) => <div {...props} {...state} />}
                            >{children}</Popover.Description>

                        </Popover.Popup>

                    </Popover.Positioner>
                </Popover.Portal>

            </Popover.Root>

        </div>
    );

};


export default PopoverWidget;