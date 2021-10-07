import React, { useState } from 'react';
import Contact from '../Contact/Contact';
import { homeObjTwo } from '../Contact/Data';

import Footer from '../Footer';

import HeroSection from '../HeroSection';
import InfoSection from '../InfoSection';
import { homeObjOne,  } from '../InfoSection/Data';
import Navbar from '../Navbar';
import Services from '../Services';
import Sidebar from '../Sidebar';
import Testimonial from '../Testimonial/Testimonial';


function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <Services />
            <Testimonial />
            <Contact {...homeObjTwo} />
            <Footer />

        </>
    )
};

export default Home;