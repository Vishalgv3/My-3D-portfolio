import { Section } from "./Section";
import { motion } from "framer-motion";

export const HomeSection = (props) => {

    const { setSection } = props;

    return (


        // add a 3D starry night sky Background with a full moon that fades in as soon as the website finishes loading

        // below the moon, add the text given below and instead of the contact me button, add a "Scroll down to explore" text


        <Section mobileTop>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-snug mt-8 md:mt-0">
                Hello traveller, I'm
                <span className="block max-w-fit bg-white rounded px-2 mt-1 italic text-black">Vishal Chaudhari</span>
                <motion.p className="text-lg text-white-600 mt-4"
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1,
                        delay: 1.5
                    }}
                >
                    I am a full-stack developer with a passion
                    <span className="ml-2 inline sm:block sm:ml-0">for creating beautiful and feature rich websites.</span>
                </motion.p>
                <motion.button className={`bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-4 md:mt-16`}
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1,
                        delay: 2
                    }}
                    onClick={() => setSection(5)}
                >Contact Me</motion.button>
            </h1>
        </Section>
    )
}
