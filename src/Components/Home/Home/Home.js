import React from 'react';
import Header from '../Header/Header';

import Services from '../Services/Services';
import Sponsor from '../Sponsor/Sponsor';

const Home = () => {
    return (
        <div className="container">
            <Header></Header>
            <Sponsor></Sponsor>
            <Services></Services>
        </div>
    );
};

export default Home;