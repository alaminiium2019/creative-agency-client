import React from 'react';

const ServicesDetails = ({ service }) => {
    console.log(service);
    return (
        <div className="card bg-hober col-md-3 col-sm-6 m-1 d-block text-center" style={{border:'1px solid red'}}>
            {
                service.image ? <img className="card-img-top p-2 mx-auto d-block" style={{ width: '150px' }} src={`data:image/png;base64,${service.image.img}`} /> :
                    <img className="card-img-top mx-auto d-block" src={`https://creative-agency-server.herokuapp.com/getservice`} style={{ height: '100px', width: '100px' }} alt="Card image cap" />
            }
            
            <a href="/dashboard"><h5>{service.name}</h5></a>
            <p className="text-left">{service.details}</p>
        </div>
    );
};

//deltete

export default ServicesDetails;