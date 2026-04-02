import Template from "@components/layout/Template";
import Menu from "@components/screens/Menu";
import Results from "@components/screens/Results";
import {useEffect} from "react";


const Page = () => {

    useEffect(() => {
        const scrollContainer = window;
        if (scrollContainer) {
            scrollContainer.addEventListener("orientationchange", () => window.location.reload());
        }

        return () => {
            const scrollContainer = window;
            if (scrollContainer) {
                scrollContainer.removeEventListener("orientationchange");
            }
        };
    });


    return (
        <Template>

            <Menu/>

            <Results/>

        </Template>
    );

};


export default Page;