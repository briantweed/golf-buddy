import useStyling from "@hooks/useStyling";
import {Tabs} from "@base-ui-components/react/tabs";
import styles from "./styles.module.scss";


const TabWidget = (props) => {

    const {
        tabs,
        styling,
        handleChange
    } = props;

    const className = useStyling(styles, styling);


    return (
        <Tabs.Root
            className={className}
            defaultValue="tab_0"
            onValueChange={handleChange}
        >

            <Tabs.List className={styles.list}>
                {tabs.map((tab, index) => {
                    return (
                        <Tabs.Tab
                            key={index}
                            className={styles.tab}
                            value={`tab_${index}`}
                        >{tab.label}</Tabs.Tab>
                    );
                })}
            </Tabs.List>

            {tabs.map((tab, index) => {
                return (
                    <Tabs.Panel
                        key={index}
                        keepMounted
                        className={styles.panel}
                        value={`tab_${index}`}
                        tabIndex={-1}
                    >{tab.content}</Tabs.Panel>
                );
            })}

        </Tabs.Root>
    );

};


export default TabWidget;