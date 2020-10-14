import React from 'react';
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
    return (
        <section className="container">
            <div className="mt-5">
                <h1 className="text-center">Clients FeedBack</h1>
            </div>
            <div className="d-flex justify-content-center mt-4">
                <div className="row justify-content-center">
                    {
                        feedBackData.map(feedback => <FeedBackDetails feedback={feedback}></FeedBackDetails>)
                    }
                </div>
            </div>
        </section>
    );

    function FeedBackDetails(props) {
        const { clientPhoto, name, post, description } = props.feedback;
        return (
            
            <div className="card col-md-3 p-2 m-1">
                <div className="d-flex">
                    <img className="card-img-top" style={{ height: '100px', width: '100px' }} src={clientPhoto} alt="Card image cap" />
                    <div className="pl-3 pt-2">
                        <h5 className="card-title" >{name}</h5>
                        <h5>{post}</h5>
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-text" >{description}</p>
                </div>


            </div>


        )
    }
};

export default FeedBack;