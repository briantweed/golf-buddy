import {Accordion} from '@base-ui-components/react/accordion';
import styles from "./styles.module.scss";


const AccordionWidget = (props) => {

    const {
        id = "accordion",
        tabs = [],
        defaultValue = []
    } = props;


    return (
        <Accordion.Root defaultValue={defaultValue} className={styles.contents}>
            {tabs.map((tab, index) => {
                return (
                    <Accordion.Item
                        key={index}
                        value={`${id}_${index}`}
                        className={styles.item}
                    >
                        <Accordion.Header
                            className={styles.header}
                        >
                            <Accordion.Trigger>
                                <span className={"mr-2"}>&gt;</span> {tab.label}
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Panel className={styles.panel}>
                            {tab.content}
                        </Accordion.Panel>
                    </Accordion.Item>
                );
            })}

        </Accordion.Root>
    );

};


export default AccordionWidget;