import React from 'react';

const Contact = () => {
    return (
        <div style={{ backgroundColor: '#FBD062', padding: '30px' }} className="mt-5" >
            <div className="container">
                <div className="row d-flex">
                    <div className="col-md-6">
                        <h1>Let us handle your project <br></br>
                    project, professionally.</h1>
                        <p>with well written codes, we build amazing apps for all<br></br>
                    platforms, mobile and web apps in general.
                    </p>
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your email address" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your name / company's name" />
                            </div>
                            <div className="form-group">
                                <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your Message *"></textarea>
                            </div>
                            <div className="form-group text-left">
                                <button style={{ backgroundColor: '#111430', borderRadius: '5px' }} className="btn text-white pr-5 pl-5"> Send </button>
                            </div>
                        </form>
                    </div>
                </div>
                <br></br>
                <br></br>
                <p className="text-center">&copy; Orange labs {(new Date()).getFullYear()}</p>

            </div>



        </div>
    );
};

export default Contact;