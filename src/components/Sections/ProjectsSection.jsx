import { Section } from "./Section"

export const ProjectsSection = () => {

    const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

    const previousProject = () => {
        setCurrentProject((currentProject - 1 + projects.length) % projects.length);
    }

    const nextProject = () => {
        setCurrentProject((currentProject + 1) % projects.length);
    }

    return (
        <Section>
            <div className="flex w-full h-full gap-8 items-center justify-center">
                <button className="hover:text-indigo-600 transition-colors" onClick={previousProject}>Previous</button>
                <h2 className="text-5xl font-bold">Projects</h2>
                <button>Next</button>
            </div>
        </Section>
    )
}