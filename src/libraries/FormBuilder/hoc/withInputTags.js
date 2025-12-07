const withInputTags = (Component) => {

    return (props) => {

        const {
            id,
            error = false,
            required = false,
            ...rest
        } = props;

        return <Component
            id={id}
            name={id}
            autoComplete={"off"}
            data-cy={`th_${id}`}
            data-lpignore={"true"}
            aria-required={required}
            aria-invalid={error ? "true" : "false"}
            {...rest}
        />;

    };

};


export default withInputTags;