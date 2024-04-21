import { Section } from "./Section"

export const TeachersSection = (props) => {
    return (

        <Section>
            <h1 className={`text-3xl md:text-5xl mt-10 md:mt-0 font-extrabold leading-snug text-white`}>
                Some Teachers of My Life
            </h1>
            <div className="mt-2 font-bold leading-snug text-white">Click on them to know more...</div>
        </Section>
    )
}