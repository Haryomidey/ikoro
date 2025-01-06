import React from 'react';
import { Link } from 'react-router-dom';

import Gal1 from '../assets/images/gal-1.jpeg';
import Gal2 from '../assets/images/gal-2.jpeg';
import Gal3 from '../assets/images/egungun-1.jpeg';
import Gal4 from '../assets/images/gal-3.jpeg';
import { IoIosArrowForward } from 'react-icons/io';

const images = [
    { src: Gal1, caption: 'Olukoro 10 years celebration' },
    { src: Gal2, caption: 'Ikoro Ekiti LCDA Chairman' },
    { src: Gal3, caption: 'Egungun festival' },
    { src: Gal4, caption: 'Olukoro at an event' },
];

const Galleries = () => {
    return (
        <section className="bg-gray-50 py-16 text-center px-5 sm:px-14 lg:px-20">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-12 text-gray-800 line w-fit mx-auto">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out"
                    >
                        <img
                            src={image.src}
                            alt={image.caption}
                            className="w-full h-64 object-cover rounded-lg"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-lg font-semibold px-4 text-center">
                                {image.caption}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='mt-5'>
                <Link to='/gallery' className='bg-primary text-white hover:bg-primary-hover px-6 py-2 rounded-md flex items-center justify-center w-fit mx-auto'>See More <IoIosArrowForward className="text-lg" /></Link>
            </div>
        </section>
    );
};

export default Galleries;
