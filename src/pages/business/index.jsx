import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import AgricultureImage from '../../assets/images/agriculture.jpg';
import RealEstateImage from '../../assets/images/real-estate.webp';
import Tourism from '../../assets/images/tourism.avif';
import TechImage from '../../assets/images/tech.avif';
import EducationImage from '../../assets/images/education.avif';

const Business = () => {
    return (
        <main>
            <Header />
            <section className='bg-gray-100 text-gray-800 pt-[130px] px-5 sm:px-14 lg:px-20'>
                <h1 className="text-2xl sm:text-4xl font-bold text-center mb-8">Business Opportunities in Ikoro Ekiti</h1>
                <p className="text-lg leading-relaxed mb-6">
                    Ikoro-Ekiti, located in the heart of Ekiti State, offers numerous opportunities for entrepreneurs and investors. With its rich cultural heritage, agricultural potential, and growing infrastructure, the town is becoming a hotspot for business ventures. In this section, we'll explore the various sectors in Ikoro where business opportunities abound.
                </p>

                <h2 className="text-lg sm:text-xl lg:text-3xl font-semibold mt-6">Agriculture: The Backbone of Ikoro</h2>
                <p className="mb-6">
                    Agriculture is the primary sector in Ikoro, and it holds immense potential for both local farmers and external investors. The fertile land of Ikoro is perfect for cultivating a variety of crops such as yam, cassava, plantain, and cocoa. With modern farming techniques and irrigation systems, the agricultural sector can be even more productive.
                </p>
                <img src={AgricultureImage} alt="Agriculture" className="w-full rounded-lg mb-6" />
                <p className="mb-6">
                    There is also a growing interest in organic farming, as local communities shift towards sustainable farming practices. For investors looking to support the agricultural sector, there are ample opportunities to partner with local farmers, set up agro-processing factories, or invest in crop production.
                </p>

                <h2 className="text-lg sm:text-xl lg:text-3xl font-semibold mt-6">Real Estate: Expanding Horizons</h2>
                <p className="mb-6">
                    Real estate development is on the rise in Ikoro. The growth of the population and the influx of new businesses has increased the demand for residential and commercial properties. With an increasing number of people seeking to settle in Ikoro, there is great potential for property development, including affordable housing projects, luxury estates, and commercial spaces.
                </p>
                <img src={RealEstateImage} alt="Real Estate" className="w-full rounded-lg mb-6" />
                <p className="mb-6">
                    Additionally, the government has been improving infrastructure in the area, making it even more attractive for real estate investments. Whether you're interested in residential projects or commercial real estate, Ikoro offers plenty of opportunities for growth.
                </p>
                <div className="text-center">
                    <button className="bg-primary text-sm text-white py-2 px-4 rounded-lg mb-6">
                        Explore Real Estate Opportunities
                    </button>
                </div>

                <h2 className="text-lg sm:text-xl lg:text-3xl font-semibold mt-6">Tourism: A Growing Industry</h2>
                <p className="mb-6">
                    Ikoro's rich cultural heritage, festivals, and natural beauty have made it a growing tourism destination. The town's festivals, including the famous Ikoro Day, attract visitors from across the country and beyond. Visitors also come to explore the local culture, participate in traditional dances, and enjoy local cuisines.
                </p>
                <img src={Tourism} alt="Tourism" className="w-full rounded-lg mb-6" />
                <p className="mb-6">
                    As tourism continues to expand, there are various business opportunities available, such as hotels, restaurants, and travel agencies. The hospitality sector is one that is expected to grow significantly in the coming years, making it an excellent opportunity for business-minded individuals.
                </p>
                <div className="text-center">
                    <button className="bg-primary text-sm text-white py-2 px-4 rounded-lg mb-6">
                        Start Your Tourism Business Today
                    </button>
                </div>

                <h2 className="text-lg sm:text-xl lg:text-3xl font-semibold mt-6">Tech and Innovation: Shaping the Future</h2>
                <p className="mb-6">
                    Ikoro-Ekiti is embracing technology and innovation as part of its growth. The digital revolution is reaching every corner of Nigeria, and Ikoro-Ekiti is no exception. Young entrepreneurs in the town are starting tech companies, providing digital services, and developing solutions to local problems.
                </p>
                <img src={TechImage} alt="Tech and Innovation" className="w-full rounded-lg mb-6" />
                <p className="mb-6">
                    Whether it's in fintech, agritech, or other industries, the tech sector in Ikoro is poised for rapid growth. This is an exciting opportunity for anyone looking to start a business in the fast-evolving tech landscape.
                </p>
                <div className="text-center">
                    <button className="bg-primary text-sm text-white py-2 px-4 rounded-lg mb-6">
                        Invest in Tech Innovation
                    </button>
                </div>

                <h2 className="text-lg sm:text-xl lg:text-3xl font-semibold mt-6">Education: Shaping the Future Workforce</h2>
                <p className="mb-6">
                    Education is a major focus in Ikoro, as the town seeks to provide its younger generation with the skills they need to succeed in the modern world. There are opportunities to invest in schools, vocational training centers, and educational technology.
                </p>
                <img src={EducationImage} alt="Education" className="w-full rounded-lg mb-6" />
                <p className="mb-6">
                    With the growing importance of education in the region, business owners can contribute to the community while making a profitable impact. Establishing educational institutions, tutoring centers, or tech hubs could be a great business opportunity.
                </p>
                <div className="text-center">
                    <button className="bg-primary text-sm text-white py-2 px-4 rounded-lg mb-6">
                        Support Education Initiatives
                    </button>
                </div>

                <h2 className="text-lg sm:text-xl lg:text-3xl font-semibold mt-6">Start Your Business in Ikoro</h2>
                <p className="pb-6">
                    With its strategic location, welcoming community, and business-friendly environment, Ikoro is the ideal place for entrepreneurs and investors. Whether you're looking to enter the agricultural, real estate, tourism, tech, or education sectors, Ikoro has everything you need to succeed.
                </p>
            </section>
            <Footer />
        </main>
    )
}

export default Business
