import React from 'react';
import Banner from './Banner';
import Footer from '../Shared/Footer/Footer';
import Product from './Product';
import Contact from '../Contact';


const Home = () => {
    return (
        <>
            <Banner />
            <Product />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;