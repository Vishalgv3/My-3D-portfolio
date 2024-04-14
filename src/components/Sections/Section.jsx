export const Section = (props) => {
    const { children } = props;

    return (<section className={`
        h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col justify-center items-start
    `}>
        {children}
    </section>)
}

