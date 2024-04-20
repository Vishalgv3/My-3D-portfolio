import { useAtom } from "jotai";
import { Section } from "./Section";
import { currentProjectAtom } from "../Other3D/Project";
import { projects } from "../../data/projectsData";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCaretRight, faSquareCaretLeft } from '@fortawesome/free-solid-svg-icons'

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
            <div className="flex w-full h-full gap-8 items-center justify-center text-white">
                <button className="hover:text-indigo-600 transition-colors text-sm sm:text-base" onClick={previousProject}><FontAwesomeIcon icon={faSquareCaretLeft} className="mr-1" />Previous</button>
                <h2 className="text-3xl md:text-5xl font-bold">Projects</h2>
                <button className="hover:text-indigo-600 transition-colors text-sm sm:text-base" onClick={nextProject}>Next<FontAwesomeIcon icon={faSquareCaretRight} className="ml-1" /></button>
            </div>
        </Section>
    )
}