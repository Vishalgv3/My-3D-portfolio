import { Section } from "./Section"

export const AboutSection = () => {
    return (
        <Section>
            {/* in the about section there are going to be three sections in total
            
            1. some text about me, explaining who I am and what I do and where i am from and what I am passionate about. In this sub section, Vishal's 3D model will be inside a small cutout of a 3D room.

            Watch youtube tutorial: https://youtu.be/eUf9VltV4Cc?si=afENKDORYXV5fxQH 

            2. Some Teachers of My Life
                i. Add the text "These are the real life characters who have inspired me and taught me the most. Click on them to know more." 

                ii. When the user click on the 3D model of the teacher, the camera should zoom in on the teacher, Vishal's 3D model should perform accurate and relevant animations (i.e. Kneeling, Talking , Nodding), there should be a spotlight on Teacher and Vishal's models and a modal should appear right beside this scene with the following details:
                    a. Name
                    b. Some context about the teacher
                    c. What I learned from them

                iii. The user should be able to close the modal by clicking on the close button or by clicking anywhere outside the modal

            3. Skills

                i. Add the text "These are the skills that I have acquired over the years."

                ii.Tech Skills: There will be 3D white blocks with the Icons and names of the technologies that I have worked with.

                ii. Soft Skills: There will be 3D white blocks with the soft skills that I have acquired.

                iv. Both these smaller sections will be orbiting in a circular motion. When the user hovers over them, they should orbit faster.
            
            */}

            <Section>
                <div className={`text-3xl md:text-5xl font-extrabold leading-snug text-white mb-4`}>
                    ABOUT ME
                </div>

                <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border max-w-64 sm:max-w-fit">
                    <div className="flex-auto p-4">
                        <div className="flex flex-wrap mx-0 md:mx-3">
                            <div className="flex-none max-w-full px-3">
                                <div>
                                    <div className="mb-0 font-sans max-w-md font-semibold leading-normal text-sm">
                                        <p className="mb-5">
                                            I am orginally from Gandhinagar, Gujarat, India. I acquired a diploma with honours in a program called "IT Web Programming" specializing in full stack web development at NSCC in Truro, NS, Canada.
                                        </p>
                                        <p className="mb-5">
                                            I came to Canada in June, 2022 right after completing my high school in India. Over the past two years, I have dedicated myself to learning and mastering web development. This journey has been incredibly rewarding, and I owe a lot to a special mentor who has been my teacher and friend, guiding me through every step of the way.
                                        </p>
                                        <p className="mb-5">
                                            Now, I am equipped with a solid foundation in programming and web development, ready to contribute to innovative projects and continue growing in this dynamic field.
                                        </p>
                                        Scroll to learn more...
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Section>

        </Section>
    )
}