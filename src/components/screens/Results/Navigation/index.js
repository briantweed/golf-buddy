import useLocalStorage from "@hooks/useLocalStorage";


const Navigation = () => {

    const {settings} = useLocalStorage();

    if (settings) {
        const {
            CourseName = "",
            RoundLength = "",
        } = settings;

        return (
            <nav className={"flex justify-between px-4 pt-4"}>

                <h1 className={"text-2xl font-medium"}>{CourseName}</h1>

                <div className="flex justify-end gap-6 pr-4">

                    <h2 className={"text-base mt-1"}>Holes: {RoundLength}</h2>

                </div>

            </nav>
        );
    }

    return (
        <nav className={"flex justify-between px-4 pt-4"}/>
    );

};


export default Navigation;
