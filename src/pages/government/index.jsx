import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import Economic from '../../assets/images/economic.avif';
import Environmental from '../../assets/images/environmental.avif';
import Infrastructure from '../../assets/images/infrastructure.avif';
import HealthCare from '../../assets/images/health-care.webp';
import EducationAndSkill from '../../assets/images/education-and-skill.webp';

const Government = () => {
    return (
        <main>
            <Header />
            <section className='bg-gray-100 text-gray-800 pt-[130px] px-5 sm:px-14 lg:px-20'>
                <h1 className="text-2xl sm:text-4xl font-bold text-center mb-8">Government Initiatives and Services</h1>
                <p className="text-lg leading-relaxed mb-6">
                    The government of Ikoro-Ekiti is committed to improving the lives of its citizens through various programs, initiatives, and services. In this section, we will explore the key areas where the government is making a difference and how these efforts contribute to the growth and development of the region.
                </p>

                <h2 className="text-lg sm:text-xl lg:text-3xl font-semibold mt-6">Economic Development</h2>
                <p className="mb-6">
                    The government of Ikoro-Ekiti is focused on boosting the local economy by supporting small businesses, attracting foreign investments, and promoting entrepreneurship. Various grants, subsidies, and tax incentives are available to businesses in Ikoro-Ekiti to help them grow and thrive.
                </p>
                <img src={Economic} alt="Economic Development" className="w-full rounded-lg mb-6" />
                <p className="mb-6">
                    There are also initiatives aimed at creating job opportunities for the youth and reducing unemployment rates. The government has been working to improve local infrastructure, making it easier for businesses to operate and for investors to establish new ventures in Ikoro-Ekiti.
                </p>
                <div className="text-center">
                    <button className="bg-primary text-sm text-white py-2 px-4 rounded-lg mb-6">
                        Learn More About Economic Development
                    </button>
                </div>

                <h2 className="text-lg sm:text-xl lg:text-3xl font-semibold mt-6">Education and Skill Development</h2>
                <p className="mb-6">
                    The government is focused on improving education at all levels, from primary schools to higher education institutions. With partnerships with local and international organizations, the government is making significant investments in the education sector to ensure that students have access to quality education and resources.
                </p>
                <img src={EducationAndSkill} alt="Education and Skill Development" className="w-full rounded-lg mb-6" />
                <p className="mb-6">
                    Additionally, there are various programs for vocational training and skill development, targeting young people to provide them with practical skills that will help them succeed in the job market. These initiatives are part of the government's broader strategy to combat unemployment and empower the youth.
                </p>
                <div className="text-center">
                    <button className="bg-primary text-sm text-white py-2 px-4 rounded-lg mb-6">
                        Support Education and Training Programs
                    </button>
                </div>

                <h2 className="text-lg sm:text-xl lg:text-3xl font-semibold mt-6">Healthcare and Public Health</h2>
                <p className="mb-6">
                    The government of Ikoro-Ekiti has invested in healthcare infrastructure and public health programs aimed at improving the health and well-being of citizens. With the introduction of modern health facilities and the expansion of primary healthcare centers, the region is making strides in providing better healthcare services to its people.
                </p>
                <img src={HealthCare} alt="Healthcare and Public Health" className="w-full rounded-lg mb-6" />
                <p className="mb-6">
                    Public health initiatives focus on disease prevention, sanitation, and health education. The government is also working to make healthcare more affordable and accessible, particularly for underserved communities in rural areas.
                </p>
                <div className="text-center">
                    <button className="bg-primary text-sm text-white py-2 px-4 rounded-lg mb-6">
                        Get Involved in Healthcare Programs
                    </button>
                </div>

                <h2 className="text-lg sm:text-xl lg:text-3xl font-semibold mt-6">Infrastructure Development</h2>
                <p className="mb-6">
                    Improving infrastructure is a key priority for the government. The development of roads, bridges, and communication networks is helping to connect rural communities to urban centers. In addition to transportation infrastructure, the government is also investing in water supply, electricity, and waste management systems.
                </p>
                <img src={Infrastructure} alt="Infrastructure Development" className="w-full rounded-lg mb-6" />
                <p className="mb-6">
                    These improvements are crucial for enhancing the quality of life in Ikoro-Ekiti and making it more attractive for investment. The ongoing infrastructure projects will also create numerous job opportunities for local residents.
                </p>
                <div className="text-center">
                    <button className="bg-primary text-sm text-white py-2 px-4 rounded-lg mb-6">
                        Explore Infrastructure Projects
                    </button>
                </div>

                <h2 className="text-lg sm:text-xl lg:text-3xl font-semibold mt-6">Environmental Sustainability</h2>
                <p className="mb-6">
                    Environmental sustainability is at the heart of many government policies in Ikoro-Ekiti. The government is working to protect natural resources, promote green energy solutions, and combat the effects of climate change. Sustainable agricultural practices, waste reduction, and renewable energy projects are some of the key focus areas.
                </p>
                <img src={Environmental} alt="Environmental Sustainability" className="w-full rounded-lg mb-6" />
                <p className="mb-6">
                    There are also initiatives aimed at educating citizens on environmental issues and encouraging responsible waste disposal, tree planting, and eco-friendly practices.
                </p>
                <div className="text-center">
                    <button className="bg-primary text-sm text-white py-2 px-4 rounded-lg mb-6">
                        Join the Sustainability Movement
                    </button>
                </div>

                <h2 className="text-lg sm:text-xl lg:text-3xl font-semibold mt-6">Get Involved with the Government</h2>
                <p className="pb-6">
                    There are numerous ways for citizens and businesses to engage with the government and contribute to the growth and development of Ikoro-Ekiti. Whether you are interested in supporting government initiatives, investing in the region, or simply learning more about government programs, there are opportunities for everyone to get involved.
                </p>
            </section>
            <Footer />
        </main>
    )
}

export default Government
