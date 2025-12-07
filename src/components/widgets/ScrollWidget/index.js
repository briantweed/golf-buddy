import {ScrollArea} from "@base-ui-components/react/scroll-area";
import styles from "./styles.module.scss";


const ScrollWidget = (props) => {

    const {children, scrollRef} = props;


    return (
        <ScrollArea.Root className={styles.scrollArea}>

            <ScrollArea.Viewport
                ref={scrollRef}
                className={styles.viewPort}
                tabIndex={-1}
            >
                <ScrollArea.Content className={styles.content}>
                    {children}
                </ScrollArea.Content>
            </ScrollArea.Viewport>

            <ScrollArea.Scrollbar
                orentation={"horizonal"}
                className={styles.scrollbar}
            >
                <ScrollArea.Thumb className={styles.thumb}/>
            </ScrollArea.Scrollbar>

        </ScrollArea.Root>
    );

};


export default ScrollWidget;