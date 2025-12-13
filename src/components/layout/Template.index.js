const Template = (props) => {

    const {children} = props;


    return (
        <main className={"min-h-screen w-screen text-xl text-grey-6 bg-darkerGreen"}>
            {children}
        </main>
    );

};


export default Template;