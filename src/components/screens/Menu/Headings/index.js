const Headings = () => {

    return (
        <div>

            <h1 className={"text-4xl font-semibold pt-4 pb-2 text-center"}>{process.env.TITLE}</h1>

            <h2 className={"text-2xl italic pt-0 text-center"}>{process.env.SUBTITLE}</h2>

        </div>
    );

};


export default Headings;