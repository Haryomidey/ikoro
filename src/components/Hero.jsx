import HeroImage from '../assets/images/hero.jpg';

const Hero = ({ title, description }) => {
    return (
        <div
            className="bg-cover bg-center min-h-[500px] flex items-center justify-center text-center text-white relative"
            style={{ 
                backgroundImage: `url(${HeroImage})`, 
                backgroundAttachment: "fixed"
            }}
        >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative z-10 px-6 sm:px-12 md:px-16 py-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
                    {title}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default Hero;
