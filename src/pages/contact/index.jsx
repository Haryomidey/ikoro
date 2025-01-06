import Footer from "../../components/Footer";
import Header from "../../components/Header";

import ContactImage from '../../assets/images/contact-us.avif';

const Contact = () => {
    return (
        <main>
            <Header />
            
            <section className="bg-cover bg-center min-h-[500px] flex items-center justify-center text-white text-center" style={{ backgroundImage: `url(${ContactImage})` }}>
                <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg w-full h-full min-h-[500px] flex flex-col justify-center items-center">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Get in Touch with Us</h1>
                    <p className="text-sm sm:text-lg mb-6 max-w-2xl mx-auto">We are here to answer your questions and assist you with anything you need. Reach out to us today!</p>
                </div>
            </section>
            
            <section className="sm:pt-[50px] px-5 sm:px-14 lg:px-20 bg-cover bg-center min-h-[80vh] pb-20" style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}>
                <div className="bg-black bg-opacity-50 text-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto mt-20">
                    <h1 className="text-2xl md:text-4xl font-extrabold text-center mb-6">Contact Us</h1>
                    <p className="text-center text-sm sm:text-base md:text-lg mb-6">We'd love to hear from you! Feel free to reach out to us with any inquiries or feedback.</p>
                    <form className="space-y-6">
                        <div className="mb-4">
                            <label className="block text-gray-200">Name</label>
                            <input type="text" className="w-full border rounded p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 hover:border-primary-hover" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-200">Email</label>
                            <input type="email" className="w-full border rounded p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 hover:border-primary-hover" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-200">Message</label>
                            <textarea className="w-full border rounded p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 hover:border-primary-hover" rows="5"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-hover transition-all duration-300">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

            <section className="pb-20 px-5 sm:px-14 lg:px-20">
                <div className="">
                    <h2 className="text-3xl font-extrabold text-center pb-5">Our Location</h2>
                    <div className="w-full h-[400px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15810.19487777196!2d5.028142226382337!3d7.83749163235803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1037fe748ec5aec5%3A0x48c865a40fc5077!2sIkoro%20372104%2C%20Ekiti!5e0!3m2!1sen!2sng!4v1736038696748!5m2!1sen!2sng"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    
                </div>
            </section>
            
            <Footer />
        </main>
    );
};

export default Contact;
