import { useState } from "react";
import {Link} from 'react-router-dom';
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import Gal1 from '../../assets/images/gal-1.jpeg';
import Gal2 from '../../assets/images/gal-2.jpeg';
import Gal3 from '../../assets/images/egungun-1.jpeg';
import Gal4 from '../../assets/images/gal-3.jpeg';

import GalleryImage from '../../assets/images/gallery.jpg';


const Gallery = () => {
    const images = [
        { src: Gal1, caption: 'Olukoro 10 years celebration' },
        { src: Gal2, caption: 'Ikoro Ekiti LCDA Chairman' },
        { src: Gal3, caption: 'Egungun festival' },
        { src: Gal4, caption: 'Olukoro at an event' },
    ];

    const [lightbox, setLightbox] = useState({ isOpen: false, src: "", caption: "" });

    const openLightbox = (src, caption) => {
        setLightbox({ isOpen: true, src, caption });
    };

    const closeLightbox = () => {
        setLightbox({ isOpen: false, src: "", caption: "" });
    };

    return (
        <main>
            <Header />
            <section
                className="relative bg-cover bg-center min-h-[500px] pt-[120px] px-5 sm:px-14 lg:px-20 text-center"
                style={{ backgroundImage: `url(${GalleryImage})` }}
                >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="relative z-10 py-20">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-white leading-tight drop-shadow-md">
                    Our Beautiful Gallery
                    </h1>
                    <p className="text-gray-200 text-base sm:text-xl mb-6 drop-shadow-md">
                    Explore some of the moments captured in our community
                    </p>
                </div>
            </section>


            <section className="px-5 sm:px-14 lg:px-20 py-10 bg-white">
                <h2 className="text-2xl font-bold mb-6 text-center">Photo Collection</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map(({ src, caption }, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer"
                            onClick={() => openLightbox(src, caption)}
                        >
                            <img
                                src={src}
                                alt={caption}
                                className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-sm p-2 opacity-0 group-hover:opacity-100">
                                {caption}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {lightbox.isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={closeLightbox}
                >
                    <div className="relative">
                        <img
                            src={lightbox.src}
                            alt={lightbox.caption}
                            className="max-w-full max-h-screen"
                        />
                        <p className="text-white text-center mt-4">{lightbox.caption}</p>
                        <button
                            className="absolute top-1 right-2 text-white text-2xl"
                            onClick={closeLightbox}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}

            <section className="bg-gray-100 py-10 text-center px-5 sm:px-14 lg:px-20">
                <h2 className="text-2xl font-bold mb-4">Want to Learn More?</h2>
                <p className="text-gray-600 mb-6 text-sm sm:text-base">
                    Connect with us to explore more about our events, community, and more.
                </p>
                <button className="px-6 py-2 bg-primary text-white rounded-lg">
                    <Link to='/contact'>Contact Us</Link>
                </button>
            </section>

            <Footer />
        </main>
    );
};

export default Gallery;
