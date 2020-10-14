import React from 'react';

const ServicesDetails = ({ service }) => {
    return (
        <div className="card col-md-4 col-sm-6 text-center p-2" style={{border:'1px solid red'}}>
            {
                service.image ? <img className="card-img-top mx-auto d-block" style={{ width: '150px' }} src={`data:image/png;base64,${service.image.img}`} /> :
                    <img className="card-img-top mx-auto d-block" src={`http://localhost:5000/getservice`} style={{ height: '100px', width: '100px' }} alt="Card image cap" />
            }
            
            <a href="/orders"><h5>{service.name}</h5></a>
            <p>{service.details}</p>
        </div>
    );
};

//deltete

export default ServicesDetails;