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
                <div className={`text-6xl font-extrabold leading-snug text-white`}>
                    ABOUT ME
                </div>

                <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                    <div className="flex-auto p-4">
                        <div className="flex flex-wrap mx-3">
                            <div className="flex-none max-w-full px-3">
                                <div>
                                    <p className="mb-0 font-sans max-w-2xl font-semibold leading-normal text-sm">I am orginally from Gandhinagar, Gujarat, India. I'm currently enrolled in a diploma program called "IT Web Programming" specializing in full stack web development at NSCC in Truro, NS, Canada.
                                        <br />
                                        <br />
                                        I came to Canada in June, 2022 right after completing my high school in India. So, I didn't even have any programming experience. Heck, I didn't even have a laptop until I came to Canada.
                                        <br />
                                        <br />
                                        But here we are now, I have learned so much in the past year and a half with utmost details, and all the credit goes to a special guy who has been my teacher, mentor, and friend. He has taught me everything I know about programming and web development.
                                        <br />
                                        <br />
                                        Scroll to learn more...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Section>

        </Section>
    )
}