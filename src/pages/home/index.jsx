import { IoIosArrowForward } from "react-icons/io";
import DignitariesCarousel from "../../components/DignitariesCarousel";
import Footer from "../../components/Footer";
import Galleries from "../../components/Galleries";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const Home = () => {
    return (
        <div>
            <Header />

            <Hero
                title="Welcome to Ikoro Ekiti"
                description="Discover the beauty and culture of our town."
            />

            <section className="bg-gray-100 pb-8 px-5 pt-16 text-center min-h-[450px] flex flex-col items-center justify-center">
                <motion.h2
                    className="text-2xl sm:text-3xl font-bold font-heading mb-8 w-fit mx-auto line"
                    initial={{ transform: "translateY(50%)", opacity: 0.1 }}
                    whileInView={{ transform: "translateY(0)", opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    About Ikoro Ekiti
                </motion.h2>
                <motion.p
                    className="text-lg mb-4 font-body max-w-4xl mx-auto"
                    initial={{ transform: "translateY(50%)", opacity: 0.1 }}
                    whileInView={{ transform: "translateY(0)", opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Ikoro Ekiti, a town located in the southwestern region of Nigeria, is part of Ekiti State. With a rich cultural heritage and a long-standing tradition, Ikoro has carved out its place as one of the most important towns in Ekiti. The town is steeped in history, beginning from its founding in the early centuries to its growth as a modern-day community.
                </motion.p>
                <motion.div
                    initial={{ transform: "translateY(100%)", opacity: 0.1 }}
                    whileInView={{ transform: "translateY(0)", opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <Link
                        to="/about"
                        className="bg-primary hover:bg-primary-hover mx-auto px-6 py-2 rounded-md text-white w-fit text-sm flex items-center justify-center"
                    >
                        Learn More About Us
                        <IoIosArrowForward className="ml-2 text-lg" />
                    </Link>
                </motion.div>
            </section>

            <section className="pb-8 px-5 pt-16 bg-white">
                <h2 className="text-3xl font-bold font-heading text-center mb-6 line w-fit mx-auto">
                    Latest News
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(3)].map((_, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-200 p-6 rounded-lg shadow-lg"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{
                                duration: 1,
                                delay: index * 0.3,
                            }}
                            viewport={{ once: true }}
                        >
                            <h3 className="font-semibold text-xl mb-3">
                                {index === 0
                                    ? "Ikoro Hosts Cultural Festival"
                                    : index === 1
                                    ? "Ikoro's New Community Center Opens"
                                    : "Ikoro Hosts Local Art Exhibition"}
                            </h3>
                            <p className="text-gray-700 mb-3">
                                {index === 0
                                    ? "The annual cultural festival is back, bringing together locals and visitors to celebrate our heritage through music, dance, and art."
                                    : index === 1
                                    ? "The newly built community center is set to be a hub for local events and initiatives, fostering greater unity among residents."
                                    : "An exhibition showcasing the work of local artists is now open to the public, displaying the beauty of Ikoro's creativity."}
                            </p>
                            <Link
                                to={
                                    index === 0
                                        ? "/news/ikoro-festival"
                                        : index === 1
                                        ? "/news/community-center"
                                        : "/news/art-exhibition"
                                }
                                className="text-primary hover:text-primary flex items-center"
                            >
                                Read More
                                <IoIosArrowForward className="ml-2 text-lg" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Galleries />

            <DignitariesCarousel />

            <section className="bg-primary text-white py-12 px-6 md:px-16 text-center h-[400px] flex flex-col items-center justify-center">
                <h2 className="text-2xl sm:text-4xl font-bold mb-6 leading-tight">
                    Get Involved
                </h2>
                <p className="text-sm sm:text-lg md:text-xl mb-6 max-w-3xl mx-auto">
                    Join us in making Ikoro even better. Whether through community service, local events, or supporting our projects, there's always a way to contribute!
                </p>
                <Link
                    to="/get-involved"
                    className="bg-white text-primary py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                    Find Out How
                    <IoIosArrowForward className="ml-2 text-lg" />
                </Link>
            </section>

            <Footer />
        </div>
    );
};

export default Home;
