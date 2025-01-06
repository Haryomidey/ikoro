import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import CultureHero from '../../assets/images/culture-hero.webp';

import Food1 from '../../assets/images/food-1.jpeg';
import Food2 from '../../assets/images/food-2.jpeg';
import Food3 from '../../assets/images/food-3.jpeg';
import Food4 from '../../assets/images/food-4.jpeg';
import Food5 from '../../assets/images/food-5.jpeg';
import Food6 from '../../assets/images/food-6.jpeg';

import Culture1 from '../../assets/images/culture-1.jpeg';
import Culture2 from '../../assets/images/culture-2.jpeg';
import Culture3 from '../../assets/images/culture-3.jpeg';
import Culture4 from '../../assets/images/culture-4.jpeg';
import Culture5 from '../../assets/images/culture-5.jpeg';
import Culture6 from '../../assets/images/culture-6.jpeg';
import Culture7 from '../../assets/images/culture-7.jpeg';
import Culture8 from '../../assets/images/culture-8.jpeg';
import Culture9 from '../../assets/images/culture-9.jpeg';

const foods = [
  { image: Food1, title: 'Ijebu Garri', description: 'A deliciously crispy dish made from cassava, commonly enjoyed with soup or stew.' },
  { image: Food2, title: 'Ofada Rice', description: 'A local delicacy made from a unique variety of rice, often served with peppered goat meat.' },
  { image: Food3, title: 'Pepper Soup', description: 'A flavorful soup made with fish or meat, flavored with traditional spices and herbs.' },
  { image: Food4, title: 'Amala', description: 'A popular Nigerian dish made from yam or cassava flour, served with soup.' },
  { image: Food5, title: 'Pounded Yam', description: 'A staple food served with a variety of soups such as Egusi or Vegetable soup.' },
  { image: Food6, title: 'Boli', description: 'Grilled plantain often enjoyed as a snack or side dish.' },
];

const cultures = [
  { image: Culture1, title: 'Traditional Dance', description: 'Traditional dance plays an important role in expressing the cultural identity of Ikoro-Ekiti.' },
  { image: Culture2, title: 'Festivals', description: 'Festivals such as the Olojo Festival bring the community together to celebrate music, food, and traditions.' },
  { image: Culture3, title: 'Local Crafts', description: 'Ikoro-Ekiti is known for its unique handmade crafts, including woven fabrics and carved wooden art.' },
  { image: Culture4, title: 'Storytelling', description: 'Oral traditions passed through generations play a significant role in preserving history.' },
  { image: Culture5, title: 'Rituals', description: 'Traditional rituals and ceremonies form an essential part of the community’s identity.' },
  { image: Culture6, title: 'Music', description: 'Traditional instruments and songs enrich cultural celebrations.' },
  { image: Culture7, title: 'Clothing', description: 'Distinctive traditional attire reflects the rich heritage of Ikoro-Ekiti.' },
  { image: Culture8, title: 'Art Exhibitions', description: 'Art exhibitions showcase the community\'s creativity and talent.' },
  { image: Culture9, title: 'Cooking Techniques', description: 'Cooking methods are deeply rooted in cultural practices and traditions.' },
];

const Culture = () => {
  return (
    <main>
      <Header />
      <section className="relative bg-cover bg-center text-white h-screen" style={{ backgroundImage: `url(${CultureHero})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center px-5 sm:px-14 lg:px-20">
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold px-5 sm:px-14 lg:px-20">
            <h1>Discover the Rich Culture of Ikoro Ekiti</h1>
            <p className="mt-4 text-sm sm:text-lg">Join us as we explore the traditions, art, festivals, and the vibrant spirit that make Ikoro a unique place to live and visit.</p>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-14 lg:px-20 py-16 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-6">Cultural Heritage</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cultures.map((culture, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={culture.image} alt={culture.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{culture.title}</h3>
                <p className="text-gray-600 mt-2">{culture.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-900 text-white px-5 sm:px-14 lg:px-20 py-16">
        <h2 className="text-3xl font-semibold mb-6">Food & Cuisine</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {foods.map((food, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={food.image} alt={food.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-600">{food.title}</h3>
                <p className="text-gray-600 mt-2">{food.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Culture;
