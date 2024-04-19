import { AboutSection } from "./Sections/AboutSection";
import { ContactSection } from "./Sections/ContactSection";
import { HomeSection } from "./Sections/HomeSection";
import { ProjectsSection } from "./Sections/ProjectsSection";
import { Section } from "./Sections/Section";
import { SkillsSection } from "./Sections/SkillsSections";
import { TeachersSection } from "./Sections/TeachersSection";

export const Interface = (props) => {

    const { setSection } = props;

    return (
        <>
            <div className="flex flex-col items-center w-screen select-none">
                <HomeSection setSection={setSection} />
                <AboutSection />
                <TeachersSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </div>
        </>
    );
}