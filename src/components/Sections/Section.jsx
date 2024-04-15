import { motion } from 'framer-motion';

export const Section = (props) => {
    const { children } = props;

    return (
        <motion.section
            className={`
        h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col justify-center items-start`}
            initial={{
                opacity: 0,
                y: 50,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1,
                    delay: 0.5,
                }
            }}
        >
            {children}
        </motion.section>
    )
}

