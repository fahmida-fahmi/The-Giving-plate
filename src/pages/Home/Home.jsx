import React from 'react';
import Banner from './Banner';
import OurVision from './OurVision';
import Providers from './Providers';
import Consumers from './Consumers';
import OurStory from './OurStory';
import Gallery from './Gallery';
import Help from './Help';
import Blogs from './Blogs/Blogs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurVision></OurVision>
            <Providers></Providers>
            <Consumers></Consumers>
            <OurStory></OurStory>
            <Gallery></Gallery>
            <Blogs></Blogs>
            <Help></Help>
            
        </div>
    );
};

export default Home;