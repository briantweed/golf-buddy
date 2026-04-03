import useLocalStorage from "@hooks/useLocalStorage";
import styles from "./styles.module.scss";
import courses from "@files/config/courses";


const Navigation = () => {

    const {settings} = useLocalStorage();


    if (settings) {

        const {RoundLength = "18"} = settings;

        const course = courses.find((course) => course.value === settings.CourseName);


        return (
            <nav className={styles.contents}>

                <h1 className={styles.title}>{course.label}</h1>

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
