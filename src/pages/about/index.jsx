import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';

const About = () => {
    return (
        <main>
            <Header />

            <section className="relative bg-cover bg-center min-h-[500px] pt-[120px] px-5 sm:px-14 lg:px-20 text-center"
                style={{ backgroundImage: 'url("/path-to-your-hero-background-image.jpg")' }}>
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="relative z-10 py-20">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white leading-tight drop-shadow-md">
                        Discover Ikoro-Ekiti
                    </h1>
                    <p className="text-gray-200 text-lg sm:text-xl mb-6 drop-shadow-md">
                        Dive into the heart of our culture, history, and the warmth of our community.
                    </p>
                </div>
            </section>

            <section className="pt-[40px] px-5 sm:px-14 lg:px-20">
                <h1 className="text-3xl font-bold mb-4 text-center text-primary">About Ikoro-Ekiti</h1>
                <p className="text-lg text-gray-700 mb-6">
                    <strong>Ikoro-Ekiti</strong> is a historic town located in <em>Ekiti State, Nigeria</em>, and is known for its rich cultural heritage, breathtaking landscapes, and warm, welcoming community. 
                    Whether you are a visitor or a local, Ikoro-Ekiti offers a blend of <strong>tradition</strong> and <em>modernity</em> that makes it a truly unique place to explore. 
                    <u>Its beauty lies in the seamless fusion of old and new</u>, where ancient customs meet the progress of the present day. Visitors are greeted with open arms, making them feel part of the community from the moment they arrive.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                    The town is <em>blessed</em> with lush green hills, tranquil rivers, and landscapes that offer an idyllic setting for relaxation and adventure. Ikoro-Ekiti is surrounded by nature's beauty, with stunning views that are perfect for those who enjoy outdoor activities like hiking and sightseeing. The area also boasts a range of <strong>traditional architecture</strong> and modern infrastructure that serves the town's vibrant population.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                    <u><strong>Festivals and Culture</strong></u> play a major role in the life of the people of Ikoro-Ekiti. One of the highlights of the year is the <strong>Ikoro Festival</strong>, a magnificent celebration of the town's <em>ancient customs</em>, <strong>music</strong>, and <em>dance</em>. The festival is a time of joy, unity, and cultural expression where the streets come alive with color and sound. It brings together the young and old, as well as visitors from all around the country and beyond, to partake in a joyous celebration of Ikoro-Ekiti's identity.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                    The festival is marked by exciting performances, delicious local foods, traditional attire, and the beating rhythms of drums and instruments. It is a time to celebrate the <em>resilience</em> and <strong>creativity</strong> of the community, and to honor the town's legacy and history. Visitors have the chance to experience Ikoro-Ekiti in its full splendor, learning about the traditions that make this place so special.
                </p>
                <p className="text-lg text-gray-700">
                    Beyond the festivals, Ikoro-Ekiti is a town filled with life and energy. The town is known for its <strong>education and commerce</strong>, with growing markets, small businesses, and skilled artisans. As a place of <u>opportunity</u> and <em>growth</em>, Ikoro-Ekiti is poised to be a key destination for both tourism and commerce in the coming years. Come visit Ikoro-Ekiti and experience its <strong>unmatched charm</strong> and vibrant culture.
                </p>
            </section>



            <section className="py-10 px-5 sm:px-14 lg:px-20">
                <h2 className="text-3xl font-bold mb-6 text-center">Explore Ikoro-Ekiti</h2>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="bg-cover bg-center h-[300px]" style={{ backgroundImage: 'url("/path-to-image1.jpg")' }}>
                            <div className="flex justify-center items-center h-full bg-black bg-opacity-40">
                                <p className="text-white text-xl font-semibold">Traditional Festivals of Ikoro-Ekiti</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-cover bg-center h-[300px]" style={{ backgroundImage: 'url("/path-to-image2.jpg")' }}>
                            <div className="flex justify-center items-center h-full bg-black bg-opacity-40">
                                <p className="text-white text-xl font-semibold">Scenic Views of the Town</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-cover bg-center h-[300px]" style={{ backgroundImage: 'url("/path-to-image3.jpg")' }}>
                            <div className="flex justify-center items-center h-full bg-black bg-opacity-40">
                                <p className="text-white text-xl font-semibold">Warm Community and Hospitality</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

            <Footer />
        </main>
    );
};

export default About;