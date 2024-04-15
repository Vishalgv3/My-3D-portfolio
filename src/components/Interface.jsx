import { AboutSection } from "./Sections/AboutSection";
import { ContactSection } from "./Sections/ContactSection";
import { HomeSection } from "./Sections/HomeSection";
import { Section } from "./Sections/Section";

export const Interface = () => {
    return (
        <>
            <div className="flex flex-col items-center w-screen">
                <HomeSection />
                <AboutSection />
                <Section>
                    <h1>Projects</h1>
                </Section>
                <ContactSection />
            </div>
        </>
    );
}