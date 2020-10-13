import React from 'react';
import mobile from '../../../images/icons/service1.png';
import graphic from '../../../images/icons/service2.png';
import web from '../../../images/icons/service3.png';

const serviceData = [
    {
        photo: mobile,
        name: 'Web & Mobile design',
        description: 'We craft stunning and amazing web UI, using a well drafted UX to fit your product.'
    },
    {
        photo: graphic,
        name: 'Graphic Design',
        description: 'Amazing flyers, social media posts and brand representations that wouldmake your brand stant out.'
    },
    {
        photo: web,
        name: 'Web development',
        description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general'
    }
]

const Services = () => {
    return (
        <section>
            <div className="mt-5">
                <h1 className="text-center">Provide awesome services</h1>
            </div>
            <div className="d-flex justify-content-center mt-4">
                <div className="row w-80 justify-content-center">
                    {
                        serviceData.map(service => <ServiceDetails service={service}></ServiceDetails>)
                    }

                </div>
            </div>

        </section>
    );
};


function ServiceDetails(props) {
    const { photo, name, description } = props.service;
    return (

        <div className="card col-md-3 text-center p-1 m-1">
            <img className="card-img-top mx-auto d-block" style={{ height: '100px', width: '100px' }} src={photo} alt="Card image cap" />
            <div className="card-block">
                <h5 className="card-title" >{name}</h5>
                <p className="card-text" >{description}</p>
            </div>

        </div>

    )
}

{/* <div classNameName="col-md-4">
<img src={photo}/>
<h2>{name}</h2>
<p>{description}</p>
</div> */}



export default Services;