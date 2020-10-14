import React from 'react';

const ServicesDetails = ({ service }) => {
    return (
        <div className="card col-md-3 text-center p-1 m-1">

            {
                service.image ? <img className="card-img-top mx-auto d-block" style={{width:'80px'}} src={`data:image/png;base64,${service.image.img}`} /> :
                    <img className="card-img-top mx-auto d-block" src={`http://localhost:5000/getservice`} style={{ height: '100px', width: '100px' }} alt="Card image cap" />
            }
            <a href={`/orders/${service.name}`}><h5>{service.name}</h5></a>
            <p>{service.details}</p>
        </div>
    );
};



export default ServicesDetails;