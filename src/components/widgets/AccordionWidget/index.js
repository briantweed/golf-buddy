import {Accordion} from '@base-ui-components/react/accordion';
import styles from "./styles.module.scss";
import {useState} from "react";


const AccordionWidget = (props) => {

    const {
        id = "accordion",
        tabs = [],
        defaultValue = []
    } = props;

    const [selected, setSelected] = useState(defaultValue);

    const handleValueChange = (e) => {
        setSelected(e);
    };

    return (
        <Accordion.Root
            defaultValue={defaultValue}
            className={styles.contents}
            onValueChange={handleValueChange}
        >
            {tabs.map((tab, index) => {
                const itemId = `${id}_${index}`;
                return (
                    <Accordion.Item
                        key={index}
                        value={itemId}
                        className={styles.item}
                    >
                        <Accordion.Header
                            className={styles.header}
                        >
                            <Accordion.Trigger>
                                <span className={`inline-block transition duration-150 ease-in-out mr-2 ${selected.includes(itemId) ? "rotate-90" : ""}`}>&gt;</span> {tab.label}
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