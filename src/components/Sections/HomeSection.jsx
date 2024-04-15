import { Section } from "./Section";
import { motion } from "framer-motion";

export const HomeSection = () => {
    return (


        // add a 3D starry night sky Background with a full moon that fades in as soon as the website finishes loading

        // below the moon, add the text given below and instead of the contact me button, add a "Scroll down to explore" text


        <Section>
            <h1 className="text-6xl font-extrabold leading-snug">
                Hi, I'm
                <br />
                <span className="bg-white px-1 italic">Vishal Chaudhari</span>
                <motion.p className="text-lg text-gray-600 mt-4"
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
                    <br /> for creating beautiful and feature rich websites.
                </motion.p>
                <motion.button className={`bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16`}
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
                >Contact Me</motion.button>
            </h1>
        </Section>
    )
}
