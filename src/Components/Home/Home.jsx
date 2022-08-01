import React from 'react';
import Banner from './Banner';
import Footer from '../Shared/Footer/Footer';
import Product from './Product';
import Contact from '../Contact';
import OurBranch from './OurBranch';


const Home = () => {
    return (
        <>
            <Banner />
            <Product />
            <OurBranch />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;