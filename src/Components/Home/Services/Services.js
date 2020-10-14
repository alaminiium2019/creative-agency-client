
// import { Link } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
// import mobile from '../../../images/icons/service1.png';
// import graphic from '../../../images/icons/service2.png';
// import web from '../../../images/icons/service3.png';
import ServicesDetails from '../ServicesDetails/ServicesDetails';

// const serviceData = [
//     {
//         photo: mobile,
//         name: 'Web & Mobile design',
//         description: 'We craft stunning and amazing web UI, using a well drafted UX to fit your product.'
//     },
//     {
//         photo: graphic,
//         name: 'Graphic Design',
//         description: 'Amazing flyers, social media posts and brand representations that wouldmake your brand stant out.'
//     },
//     {
//         photo: web,
//         name: 'Web development',
//         description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general'
//     }
// ]



const Services = () => {
    const [getService, setGetService] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getService')
            .then(res => res.json())
            .then(data => setGetService(data))
    }, [])

    return (
        <div className="container text-center">
            <div className="mt-5 pb-4">
                <h1>Provide awesome services</h1>
            </div>
            <div className="row">
                {
                    getService.map(service => <ServicesDetails service={service}></ServicesDetails>)
                }
            </div>
        </div>
    );

};



export default Services;