import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
// import { NotFoundImage } from '../../assets';

const NotFound = () => {
    return (
        <main>
            <Header />
            <div className='pt-[120px] pb-10 w-full min-h-[600px] max-w-[850px] mx-auto px-5 sm:px-20 flex flex-col justify-center items-center text-center'>
                <h1 className='font-bold text-2xl sm:text-5xl text-primary mb-6'>404 - Page Not Found</h1>
                <p className='text-sm sm:text-xl mb-8'>
                    Oops! The page you're looking for doesn't exist. But don't worry, we've got plenty of other awesome pages for you to explore!
                </p>
                <div className='mb-8'>
                    {/* <img src={NotFoundImage} className='h-full w-full object-cover' alt='404 not found' /> */}
                </div>
                <Link to='/'>
                    <button className='bg-primary text-white px-6 py-3 rounded-md text-lg'>
                        Go Back to Homepage
                    </button>
                </Link>
            </div>
            <Footer />
        </main>
    );
};

export default NotFound;
