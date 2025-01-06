import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Directory = () => {
    const businesses = [
        {
            name: "Faith's Boutique",
            category: "Fashion",
            description: "Trendy outfits, accessories, and custom designs tailored to your style.",
            image: "/images/fashion-boutique.jpg",
        },
        {
            name: "Ikoro Eatery",
            category: "Food",
            description: "Delicious local and continental meals served fresh daily.",
            image: "/images/ikoro-eatery.jpg",
        },
        {
            name: "Community Library",
            category: "Education",
            description: "A hub for learning, offering books, internet access, and educational programs.",
            image: "/images/community-library.jpg",
        },
    ];

    return (
        <main>
            <Header />
            <section className="pt-[100px] px-5 sm:px-14 lg:px-20 bg-gray-100 min-h-screen">
                <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">Local Business Directory</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {businesses.map((business, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105"
                        >
                            <img
                                src={business.image}
                                alt={business.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-gray-800">{business.name}</h2>
                                <p className="text-sm text-gray-600 mb-2 italic">{business.category}</p>
                                <p className="text-gray-700 mb-4">{business.description}</p>
                                <button className="text-white bg-primary hover:bg-primary-hover px-4 py-2 rounded">
                                    Learn More
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

export default Directory;
