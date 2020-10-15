import React, { useEffect, useState } from 'react';
import Nash from '../../../images/customer-1.png';
import Miriam from '../../../images/customer-2.png';
import Bria from '../../../images/customer-3.png';


const feedBackData = [
    {
        clientPhoto: Nash,
        name: 'Nash Patrik',
        post: 'CEO,Manpol',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.'
    },
    {
        clientPhoto: Miriam,
        name: 'Miriam Barron',
        post: 'CEO,Manpol',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.'
    },
    {
        clientPhoto: Bria,
        name: 'Bria Malone',
        post: 'CEO,Manpol',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.'
    }
]

const FeedBack = () => {
    const [getReview, setGetReview] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/getReview')
            .then(res => res.json())
            .then(data => setGetReview(data))
    }, [])
    return (
        <section className="container">
            <div className="mt-5">
                <h2 className="text-center mt-5">Clients <span style={{ color: '#7AB259' }}>Feedback</span></h2>
            </div>

            <div className="row d-flex justify-content-center">
                {
                    getReview.map(feedback => <FeedBackDetails feedback={feedback}></FeedBackDetails>)
                }
            </div>
        </section>
    );

    function FeedBackDetails({ feedback }) {

        return (

            <div className="card col-md-3 p-2 col-sm-6 m-1 d-block text-left" style={{ border: '1px solid red' }}>
               <div className="d-flex">
                <div className="imag-part">                   
                {
                    feedback.image ? <img className="card-img-top  mx-auto d-block" style={{ width: '100px',borderRadius:'40px' }} src={`data:image/png;base64,${feedback.image.img}`} /> :
                        <img className="card-img-top mx-auto d-block" src={`http://localhost:5000/getReview`} style={{ height: '100px', width: '100px' }} alt="Card image cap" />
                }
                </div>
                
                <div className="pl-3">
            <h5>{feedback.name}</h5>
                    <h5>{feedback.company}</h5>
                </div>
                </div>
                <div className="card-body">
                    <p className="card-text" >{feedback.description}</p>
                </div>
            </div>
        );



    }
};

export default FeedBack;