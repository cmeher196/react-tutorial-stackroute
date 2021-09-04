import React from 'react';

function Register(props) {
    return (
        <div className="container" style={{ padding: '40px' }}>
            <div className="row">
                <div className="col-md-4 py-5 bg-primary text-white text-center ">
                    <div className=" ">
                        <div className="card-body">
                            {/* <img src="http://www.ansonika.com/mavia/img/registration_bg.svg" alt="" style={{ width: "10%" }} /> */}
                            <h2 className="py-3">Registration</h2>
                            <p>Please register here to add self to view daily news</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 py-5 border">
                    <h4 className="pb-4">Please fill with your details</h4>
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input id="Full Name" name="Full Name" placeholder="Full Name" className="form-control" type="text" />
                            </div>
                            <div className="form-group col-md-6">
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input id="Mobile No." name="Mobile No." placeholder="Mobile No." className="form-control" required="required" type="text" />
                            </div>
                            <div className="form-group col-md-6">

                                <select id="inputState" className="form-control">
                                    <option defaultValue>Choose ...</option>
                                    <option> New Buyer</option>
                                    <option> Auction</option>
                                    <option> Complaint</option>
                                    <option> Feedback</option>
                                </select>
                            </div>
                            <div className="form-group col-md-12">
                                <textarea id="comment" name="comment" cols="40" rows="5" className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <div className="form-group">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                                        <label className="form-check-label" >
                                            <small>By clicking Submit, you agree to our Terms & Conditions, Visitor Agreement and Privacy Policy.</small>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <button type="button" className="btn btn-danger">Submit</button>
                        </div>
                        <div className="form-row">
                            <p>Already Member ? <a href='/'>Please login here</a> </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;