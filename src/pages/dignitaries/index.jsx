import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Olukoro from '../../assets/images/king-1.jpeg';
import FemiThomas from '../../assets/images/femi-thomas.jpeg';
import DeleAlake from '../../assets/images/dele-alake.jpeg';
import KayodeOjo from '../../assets/images/kayode-ojo.jpeg';
import OluOgundola from '../../assets/images/olu-ogundola.jpg';

import Majestic from '../../assets/images/majestic.jpg';

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

const Dignitaries = () => {
    const [selectedDignitary, setSelectedDignitary] = useState(null);

    const handleCardClick = (dignitary) => {
        setSelectedDignitary(dignitary);
    };

    const closeModal = () => {
        setSelectedDignitary(null);
    };

    return (
        <main>
            <Header />
            <div className="relative bg-primary text-white py-20 text-center min-h-[500px] flex flex-col items-center justify-center" style={{ backgroundImage: `url(${Majestic})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className='relative z-10 px-5 sm:px-14 lg:px-20'>
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">Meet Our Esteemed Dignitaries</h1>
                    <p className="sm:text-lg mb-6">Our dignitaries are leaders, visionaries, and advocates for the people of Ikoro Ekiti.</p>
                </div>
            </div>

            <section className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dignitaries.map((dignitary) => (
                        <motion.div
                            key={dignitary.id}
                            className="bg-white rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                            onClick={() => handleCardClick(dignitary)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <img
                                src={dignitary.img}
                                alt={dignitary.name}
                                className="w-full h-56 object-cover rounded-t-lg"
                            />
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold">{dignitary.name}</h2>
                                <p className="text-lg text-gray-600">{dignitary.title}</p>
                                <p className="text-gray-500 mt-4">{dignitary.bio}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {selectedDignitary && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg max-w-[600px] w-full p-8 mt-10">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold">{selectedDignitary.name}</h2>
                            <button onClick={closeModal} className="text-gray-600 text-3xl">
                                <AiOutlineClose />
                            </button>
                        </div>
                        <div className="flex justify-center mt-4">
                            <img
                                src={selectedDignitary.img || 'https://via.placeholder.com/150'}
                                alt={selectedDignitary.name}
                                className="w-32 h-32 object-cover rounded-full border-2 border-gray-300"
                            />
                        </div>
                        <p className="text-lg mt-4">{selectedDignitary.bio}</p>
                        <p className="mt-6 italic text-gray-500">“{selectedDignitary.quote}”</p>
                    </div>
                </div>
            )}

            <section className="bg-[#d6d6d6ce] py-16 text-center px-5 sm:px-14 lg:px-20">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-gray-800">What the Community Says</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    <div className="w-full sm:w-80 md:w-64 bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-lg sm:text-xl italic">"Our leaders inspire us every day to build a better future!"</p>
                        <p className="text-md mt-4 text-gray-600">— Community Member</p>
                    </div>
                    <div className="w-full sm:w-80 md:w-64 bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-lg sm:text-xl italic">"The impact of their leadership is felt in every corner of the community."</p>
                        <p className="text-md mt-4 text-gray-600">— Local Entrepreneur</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default Dignitaries;
