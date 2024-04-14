import { Section } from "./Section"

export const HomeSection = () => {
    return (


        // add a 3D starry night sky Background with a full moon that fades in as soon as the website finishes loading

        // below the moon, add the text given below and instead of the contact me button, add a "Scroll down to explore" text


        <Section>
            <h1 className="text-6xl font-extrabold leading-snug">
                Hi, I'm
                <br />
                <span className="bg-white px-1 italic">Vishal Chaudhari</span>
                <p className="text-lg text-gray-600 mt-4">
                    I am a full-stack developer with a passion for creating beautiful and feature rich websites.
                </p>
                <button className={`bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16`}>Contact Me</button>
            </h1>
        </Section>
    )
}
