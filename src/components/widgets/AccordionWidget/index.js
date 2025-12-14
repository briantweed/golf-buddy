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
                                <span className={"mr-2"}>
                                    {itemId} {JSON.stringify(selected)}

                                    {selected.includes(itemId) ? "*" : <>&gt;</>}</span> {tab.label}
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