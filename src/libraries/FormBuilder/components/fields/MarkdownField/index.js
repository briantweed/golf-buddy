import Markdown from "../../typography/Markdown";


const MarkdownField = (props) => {

    const {
        config: {
            markdown,
            ...rest
        }
    } = props;


    return (
        <Markdown contents={markdown} {...rest}/>
    );

};


export default MarkdownField;
