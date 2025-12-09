import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import styles from "./styles.module.scss";

import HeaderOne from "../HeaderOne";
import HeaderTwo from "../HeaderTwo";
import HeaderThree from "../HeaderThree";
import Paragraph from "../Paragraph";
import InternalLink from "../InternalLink";


const Markdown = ({contents, replacements = {}, styling = {}, ...rest}) => {

    const components = {
        h1: ({...props}) => {
            delete props.node;
            return <HeaderOne
                styling={styling.HeaderOne}
                {...props}
            />;
        },
        h2: ({...props}) => {
            delete props.node;
            return <HeaderTwo
                styling={styling.HeaderTwo}
                {...props}
            />;
        },
        h3: ({...props}) => {
            delete props.node;
            return <HeaderThree
                styling={styling.HeaderThree}
                {...props}
            />;
        },
        p: ({...props}) => {
            delete props.node;
            return <Paragraph
                styling={styling.Paragraph}
                {...props}
            />;
        },
        a: ({...props}) => {
            return <InternalLink
                styling={styling.Link}
                {...props}
            />;
        },
        img: ({src, alt, title = "400x300"}) => {
            const [width, height] = title.split("x");
            return <img
                src={`/${src}`}
                alt={alt}
                width={Number(width)}
                height={Number(height)}
            />;
        },
        hr: "br",
    };


    return (
        <div
            className={styles.contents}
            {...rest}
        >
            <ReactMarkdown
                components={{
                    ...components,
                    ...replacements
                }}
                remarkPlugins={[
                    remarkGfm,
                    remarkBreaks
                ]}
            >{ contents }</ReactMarkdown>
        </div>
    );

};


export default Markdown;
