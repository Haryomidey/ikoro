import Footer from "../../components/Footer";
import Header from "../../components/Header";

import Festival from '../../assets/images/culture-2.jpeg';
import ModernRoad from '../../assets/images/modern-road.avif';
import NaturalBeauty from '../../assets/images/natural.avif';
import HealthCenter from '../../assets/images/health-center.avif';

const News = () => {
    const newsArticles = [
        {
            title: "Annual Ikoro Festival Announced",
            content: "The Ikoro Festival is back! This year's event will feature traditional dances, cultural displays, local delicacies, and a night of fireworks to celebrate our rich culture.",
            image: Festival,
        },
        {
            title: "Modern Road Network in Progress",
            content: "Ikoro Ekiti is undergoing a transformation! The local government has begun constructing modern roads to connect communities and ease transportation.",
            image: ModernRoad,
        },
        {
            title: "Ikoro's Hidden Natural Beauty",
            content: "Experience the serene hills, flowing streams, and lush greenery of Ikoro Ekiti. Perfect for hikers, explorers, and nature lovers alike!",
            image: NaturalBeauty,
        },
        {
            title: "New Health Center Opening Soon",
            content: "Residents will soon have access to state-of-the-art medical facilities. The new health center promises to provide better healthcare services for all.",
            image: HealthCenter,
        },
    ];

    return (
        <main>
            <Header />
            <section className="px-5 sm:px-14 lg:px-20 pt-[130px] bg-gray-100 min-h-screen pb-10">
                <h1 className="text-2xl sm:text-4xl font-extrabold mb-12 text-center text-gray-800">
                    Latest News from Ikoro Ekiti
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsArticles.map((article, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105"
                        >
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                                    {article.title}
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    {article.content}
                                </p>
                                <button className="text-white bg-primary hover:bg-primary-hover px-4 py-2 rounded">
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default News;