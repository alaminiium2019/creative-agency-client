import React from 'react';
import Frame from '../../../images/logos/Frame.png';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <main className="row pt-5 d-flex justify-content-center" style={{paddingLeft:'30px'}}>
            <div className="col-md-6 pt-5">
                <h1 className="heading">Let's Grow Your<br></br> Brand To The<br></br> Next Level</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <button style={{backgroundColor:'#111430'}}className="btn text-white pr-5 pl-5">Hire us</button>
            </div>
            <div className="col-md-6 pt-4">
                <img src={Frame} className="img-fluid"/>
            </div>

        </main>
    );
};

export default HeaderMain;