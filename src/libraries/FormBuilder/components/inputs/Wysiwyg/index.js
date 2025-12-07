import {Editor} from "@tinymce/tinymce-react";
import {TINYMCE_FILE_LOCATION} from "../../../files/config";
import styles from "./styles.module.scss";


const Wysiwyg = () => {

    const initialValue = `
        <p><b>Hello There</b></p>
        <p>This is preloaded text followed by a list:</p>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    `;

    const settings = {
        height: 300,
        menubar: false,
        statusbar: false,
        apply_source_formatting: false,
        plugins: ["advlist", "autolink", "autoresize", "lists", "link"],
        toolbar: "bold italic underline link bullist numlist | undo redo",
        advlist_bullet_styles: "default",
        advlist_number_styles: "default"
    };

    const log = (data) => {
        console.log(data);
    };


    return (
        <div className={styles.contents}>
            <Editor
                tinymceScriptSrc={TINYMCE_FILE_LOCATION}
                initialValue={initialValue}
                onEditorChange={(newValue) => log(newValue)}
                licenseKey="gpl"
                init={settings}
            />
        </div>
    );

};


export default Wysiwyg;