import React from 'react';
import Contact from '../Contact/Contact';
import FeedBack from '../FeedBack/FeedBack';
import Header from '../Header/Header';
import Portfolio from '../Portfolio/Portfolio';

import Services from '../Services/Services';
import Sponsor from '../Sponsor/Sponsor';

const Home = () => {
    return (
        <div className="container">
            <Header></Header>
            <Sponsor></Sponsor>
            <Services></Services>
           <Portfolio></Portfolio>
            
            <FeedBack></FeedBack>
            <Contact></Contact>
        </div>
    );
};

export default Home;