import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-screen-xl mx-auto px-6 sm:px-12">
                <div className="flex flex-col items-center sm:flex-row justify-between mb-6">
                    <div className="text-center sm:text-left mb-4 sm:mb-0">
                        <h2 className="text-3xl font-semibold">Ikoro Ekiti</h2>
                        <p className="text-base md:text-lg mt-2">Bringing the best to our community</p>
                    </div>
                    <div className="flex justify-center space-x-6">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-hover">
                            <FaFacebook size={30} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-hover">
                            <FaSquareXTwitter size={30} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-hover">
                            <FaInstagram size={30} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-hover">
                            <FaLinkedin size={30} />
                        </a>
                    </div>
                </div>
                <div className="border-t border-gray-700 pt-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between">
                        <p className="text-sm text-center sm:text-left">© {new Date().getFullYear()} Ikoro Ekiti. All rights reserved.</p>
                        <div className="mt-4 sm:mt-0 flex space-x-6 text-sm">
                            <Link to="/privacy-policy" className="hover:text-primary-hover">Privacy Policy</Link>
                            <Link to="/terms-of-service" className="hover:text-primary-hover">Terms of Service</Link>
                            <Link to="/contact" className="hover:text-primary-hover">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
