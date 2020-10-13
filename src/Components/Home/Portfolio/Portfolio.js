
import React from 'react';
import carOne from '../../../images/carousel-1.png';
import carTwo from '../../../images/carousel-2.png';
import carThree from '../../../images/carousel-3.png';

const carouselImg = [
    {
        cPhoto: carOne
    },
    {
        cPhoto: carTwo
    },
    {
        cPhoto: carThree
    }
]

const Portfolio = () => {
    return (
        <section className="mt-5">
            <h1 className="text-center text-white">Here are some of our works</h1>
            <div className="d-flex row">
                {
                    carouselImg.map(slider => <DisplayPortfolio slider={slider}></DisplayPortfolio>)
                }
            </div>



        </section>
    );
    function DisplayPortfolio(props) {
        const { cPhoto } = props.slider;
        return (
    
            <div>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div class="carousel-item active col-md-4">
                            <img src={cPhoto} class="d-block w-50" alt="..."/>
                        </div>
                        <div class="carousel-item active col-md-4">
                            <img src={cPhoto} class="d-block w-50" alt="..."/>
                        </div>
                        <div class="carousel-item active col-md-4">
                            <img src={cPhoto} class="d-block w-50" alt="..."/>
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
    
        )
    }
};



export default Portfolio;