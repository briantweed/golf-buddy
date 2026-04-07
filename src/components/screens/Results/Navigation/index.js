import useLocalStorage from "@hooks/useLocalStorage";
import courses from "@files/config/courses";
import styles from "./styles.module.scss";


const Navigation = () => {

    const {settings} = useLocalStorage();

    if (settings) {

        const {RoundLength = "18"} = settings;

        const course = courses.find((course) => course.value === settings.CourseName) || {};

        const {label = ""} = course;


        return (
            <nav className={styles.contents}>

                <h1 className={styles.title}>{label}</h1>

                <div className={styles.banner}>

                    <h2 className={styles.subtitle}>Holes: {RoundLength}</h2>

                </div>

            </nav>
        );
    }

    return (
        <nav className={styles.contents}/>
    );

};


export default Navigation;
