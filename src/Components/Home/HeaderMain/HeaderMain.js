import React from 'react';
import Frame from '../../../images/logos/Frame.png';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <main className="row pt-4">
            <div className="col-md-4 offset-md-1">
                <h1>Let's Grow Your<br></br> Brand To The Next Level</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <button style={{backgroundColor:'#111430'}}className="btn text-white pr-3 pl-3">Hire Me</button>
            </div>
            <div className="col-md-6">
                <img src={Frame} className="img-fluid"/>

            </div>

        </main>
    );
};

export default HeaderMain;