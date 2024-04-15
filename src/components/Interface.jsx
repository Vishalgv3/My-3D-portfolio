import { AboutSection } from "./Sections/AboutSection";
import { ContactSection } from "./Sections/ContactSection";
import { HomeSection } from "./Sections/HomeSection";
import { Section } from "./Sections/Section";

export const Interface = (props) => {

    const { setSection } = props;

    return (
        <>
            <div className="flex flex-col items-center w-screen">
                <HomeSection setSection={setSection} />
                <AboutSection />
                <ContactSection />
            </div>
        </>
    );
}