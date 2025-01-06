import HeroImage from '../assets/images/hero.jpg';

import { motion } from 'framer-motion';

const Hero = ({ title, description }) => {
    return (
        <div
            className="bg-cover bg-center min-h-[500px] flex items-center justify-center text-center text-white relative"
            style={{ 
                backgroundImage: `url(${HeroImage})`, 
                backgroundAttachment: "fixed"
            }}
        >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative z-10 px-6 sm:px-12 md:px-16 py-8">
                <motion.h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4"
                    initial={{transform: "translateY(50%)", opacity: "0.1"}}
                    whileInView={{transform: "translateY(0)", opacity: "1"}}
                    transition={{duration: "0.6"}}
                    viewport={{ once: true }}
                >
                    {title}
                </motion.h1>
                <motion.p className="text-sm sm:text-lg md:text-2xl max-w-4xl mx-auto"
                    initial={{transform: "translateY(50%)", opacity: "0.1"}}
                    whileInView={{transform: "translateY(0)", opacity: "1"}}
                    transition={{duration: "0.8", delay: "0.4"}}
                    viewport={{ once: true }}
                >
                    {description}
                </motion.p>
            </div>
        </div>
    );
}

export default Hero;
