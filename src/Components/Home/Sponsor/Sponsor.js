import React from 'react';
import slack from '../../../images/logos/slack.png';
import airbnb from '../../../images/logos/airbnb.png';
import Google from '../../../images/logos/google.png';
import NETFLIX from '../../../images/logos/netflix.png';
import Uber from '../../../images/logos/uber.png';


const Sponsor = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-2 mr-3">
                    <img style={{ width: '120px' }} src={slack} />
                </div>
                <div className="col-md-2">
                    <img style={{ width: '120px' }} src={Google} />
                </div>
                <div className="col-md-2">
                    <img style={{ width: '90px' }} src={Uber} />
                </div>
                <div className="col-md-2">
                    <img style={{ width: '90px' }} src={NETFLIX} />
                </div>
                <div className="col-md-2">
                    <img style={{ width: '120px' }} src={airbnb} />
                </div>
            </div>
        </div>
    );
};

export default Sponsor;