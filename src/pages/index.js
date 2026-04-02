import Template from "@components/layout/Template";
import Menu from "@components/screens/Menu";
import Results from "@components/screens/Results";
import {useEffect, useState} from "react";


const Page = () => {

    const [key, setKey] = useState(1);

    useEffect(() => {
        const scrollContainer = window;
        if (scrollContainer) {
            scrollContainer.addEventListener("orientationchange", () => setKey((key) => ++key));
        }

        return () => {
            const scrollContainer = window;
            if (scrollContainer) {
                scrollContainer.removeEventListener("orientationchange");
            }
        };
    },[]);


    return (
        <Template>

            <Menu/>
            
            <Results key={key}/>

        </Template>
    );

};


export default Page;