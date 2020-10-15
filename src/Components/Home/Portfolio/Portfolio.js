import React from 'react';
import carImgOne from '../../../images/carousel-1.png';
import carImgTwo from '../../../images/carousel-2.png';
import carImgThree from '../../../images/carousel-3.png';



const Portfolio = () => {
    return (
        <div style={{ backgroundColor: '#111430' }} className="p-5 mt-5" id="Portfolio">
            <h2 className="text-white text-center">Here are some of  <span style={{ color: '#7AB259' }}>our works</span></h2>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner p-5 mb-5" style={{ height: '300px' }}>
                    <div class="carousel-item active">
                        <img src={carImgOne} style={{ width: '450px' }} className="d-block mx-auto" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={carImgTwo} style={{ width: '400px' }} className="d-block mx-auto" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={carImgThree} style={{ width: '400px' }} className="d-block mx-auto" alt="..." />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

        </div>
    );
};

export default Portfolio;