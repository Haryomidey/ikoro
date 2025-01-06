import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Olukoro from '../assets/images/king-1.jpeg';
import FemiThomas from '../assets/images/femi-thomas.jpeg';
import DeleAlake from '../assets/images/dele-alake.jpeg';
import KayodeOjo from '../assets/images/kayode-ojo.jpeg';
import OluOgundola from '../assets/images/olu-ogundola.jpg';
import { Link } from "react-router-dom";

const dignitaries = [
    {
        id: 1,
        name: 'HRM Oba (Dr) ADEBANJI ADELEYE',
        title: 'The Olukoro of Ikoro Ekiti',
        bio: 'His Royal Majesty Oba Olanrewaju Adebanji Adeleye (Atewogboye II) is the 15th Olukoro. He ascended the throne in 2008 after twenty four years of an interregnum in the kingship',
        img: Olukoro,
        quote: 'A leader is one who knows the way, goes the way, and shows the way.'
    },
    {
        id: 2,
        name: 'Dr Femi Thomas',
        title: 'Cardiothoracic Surgeon',
        bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa asperiores perspiciatis eum unde enim suscipit cumque consectetur? Culpa, nobis quis?',
        img: FemiThomas,
        quote: 'Good governance is the key to a thriving community.'
    },
    {
        id: 3,
        name: 'Henry Dele Alake',
        title: 'A journalist, activist and a technocrat',
        bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nostrum eum quam cum, minus quia voluptas exercitationem hic natus? Iste.',
        img: DeleAlake,
        quote: 'Innovation is the key to transforming communities and economies.'
    },
    {
        id: 4,
        name: 'Engr Kayode Ojo',
        title: 'Chairperson, Ikoro-Ekiti Women\'s Union',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores ea in rerum blanditiis eveniet dolorem fugiat quibusdam beatae!',
        img: KayodeOjo,
        quote: 'Empowered women empower the world.'
    },
    {
        id: 5,
        name: 'Olu Ogundola',
        title: 'A radio presenter and producer',
        bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla veniam veritatis adipisci impedit hic vitae?',
        img: OluOgundola,
        quote: 'The youth are the leaders of tomorrow.'
    },
];

function DignitariesCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % dignitaries.length);
        }, 5000);

        return () => clearInterval(interval); 
    }, []);

    const nextDignitary = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % dignitaries.length);
    };

    const prevDignitary = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + dignitaries.length) % dignitaries.length);
    };

    return (
        <section className="text-white py-16 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900 font-heading text-center mx-auto">Meet Our Dignitaries</h2>
            <div className="relative max-w-4xl mx-auto">
                <div className="flex justify-center items-center px-5">
                    <button
                        onClick={prevDignitary}
                        className="absolute left-0 bg-teal-500 text-white rounded-full p-3 hover:bg-teal-600 transition-all"
                    >
                        <FaArrowLeft />
                    </button>

                    <div className="bg-white p-6 rounded-lg shadow-xl w-full sm:w-96 mx-auto">
                        <img
                            src={dignitaries[currentIndex].img}
                            alt={dignitaries[currentIndex].name}
                            className="rounded-full w-32 mx-auto mb-4 border-4 border-teal-300"
                        />
                        <h3 className="font-semibold text-xl mb-3 text-gray-800">
                            {dignitaries[currentIndex].name}
                        </h3>
                        <p className="text-md text-gray-600 italic">{dignitaries[currentIndex].title}</p>
                        <p className="text-sm mt-2 text-gray-700">
                            {dignitaries[currentIndex].bio}
                        </p>
                    </div>

                    <button
                        onClick={nextDignitary}
                        className="absolute right-0 bg-teal-500 text-white rounded-full p-3 hover:bg-teal-600 transition-all"
                    >
                        <FaArrowRight />
                    </button>
                </div>

                <div className="mt-6">
                    <Link to='/dignitaries'>
                        <button
                            className="bg-teal-600 text-white rounded-md py-2 px-6 hover:bg-teal-700 transition-all"
                        >
                            See More Dignitaries
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default DignitariesCarousel;
