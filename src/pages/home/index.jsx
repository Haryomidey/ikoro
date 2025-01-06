import { IoIosArrowForward } from "react-icons/io";  // Importing the arrow icon
import DignitariesCarousel from "../../components/DignitariesCarousel";
import Footer from "../../components/Footer";
import Galleries from "../../components/Galleries";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Header />
            
            <Hero 
                title="Welcome to Ikoro Ekiti" 
                description="Discover the beauty and culture of our town." 
            />
            
            <section className="bg-gray-100 p-8 text-center h-[450px] flex flex-col items-center justify-center">
                <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-8 w-fit mx-auto line">About Ikoro Ekiti</h2>
                <p className="text-lg mb-4 font-body max-w-4xl mx-auto">
                    Ikoro Ekiti, a town located in the southwestern region of Nigeria, is part of Ekiti State. With a rich cultural heritage and a long-standing tradition, Ikoro has carved out its place as one of the most important towns in Ekiti. The town is steeped in history, beginning from its founding in the early centuries to its growth as a modern-day community.
                </p>
                <Link to="/about" className="bg-primary hover:bg-primary-hover mx-auto px-6 py-2 rounded-md text-white w-fit text-sm flex items-center justify-center">
                    Learn More About Us
                    <IoIosArrowForward className="ml-2 text-lg" />
                </Link>
            </section>

            <section className="p-8 bg-white">
                <h2 className="text-3xl font-bold font-heading text-center mb-6 line w-fit mx-auto">Latest News</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                        <h3 className="font-semibold text-xl mb-3">Ikoro Hosts Cultural Festival</h3>
                        <p className="text-gray-700 mb-3">The annual cultural festival is back, bringing together locals and visitors to celebrate our heritage through music, dance, and art.</p>
                        <Link to="/news/ikoro-festival" className="text-primary hover:text-primary flex items-center">
                            Read More
                            <IoIosArrowForward className="ml-2 text-lg" />
                        </Link>
                    </div>
                    <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                        <h3 className="font-semibold text-xl mb-3">Ikoro's New Community Center Opens</h3>
                        <p className="text-gray-700 mb-3">The newly built community center is set to be a hub for local events and initiatives, fostering greater unity among residents.</p>
                        <Link to="/news/community-center" className="text-primary hover:text-primary flex items-center">
                            Read More
                            <IoIosArrowForward className="ml-2 text-lg" />
                        </Link>
                    </div>
                    <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                        <h3 className="font-semibold text-xl mb-3">Ikoro Hosts Local Art Exhibition</h3>
                        <p className="text-gray-700 mb-3">An exhibition showcasing the work of local artists is now open to the public, displaying the beauty of Ikoro's creativity.</p>
                        <Link to="/news/art-exhibition" className="text-primary hover:text-primary flex items-center">
                            Read More
                            <IoIosArrowForward className="ml-2 text-lg" />
                        </Link>
                    </div>
                </div>
            </section>

            <Galleries />

            <DignitariesCarousel />

            <section className="bg-primary text-white py-12 px-6 md:px-16 text-center h-[400px] flex flex-col items-center justify-center">
                <h2 className="text-4xl font-bold mb-6 leading-tight">Get Involved</h2>
                <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
                    Join us in making Ikoro even better. Whether through community service, local events, or supporting our projects, there's always a way to contribute!
                </p>
                <Link to="/get-involved" className="bg-white text-primary py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    Find Out How
                    <IoIosArrowForward className="ml-2 text-lg" />
                </Link>
            </section>

            <Footer />
        </div>
    );
}

export default Home;
