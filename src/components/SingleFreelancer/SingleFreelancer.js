import React, { useState } from 'react';
import Rating from 'react-rating';

const SingleFreelancer = (props) => {
    const { category, name, email, phone, address, star, salary, img } = props.flData;

    const [btnStatus, setBtnStatus] = useState(false)

    const addedFreelancerOnList = () => {
        setBtnStatus(true)
        props.addFreelancer(props.flData);
    }
    return (
        /* Show Single Freelancer Data On Using card */
        <div className="col">
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center">{name}</h5>
                    <p className="h-1 text-center text-primary">
                        <Rating
                            fullSymbol={<i className="bi bi-star-fill"></i>}
                            emptySymbol={<i className="bi bi-star"></i>}
                            initialRating={star}
                            readonly />
                    </p>
                    <h6>Basic Info</h6>
                    <p className="h-1">

                        <span className="text-primary">{category}</span>
                        <br />Salary: {salary}
                    </p>
                    <h6>Contact Info</h6>
                    <p className="h-1">
                        {email}
                        <br />Phone: {phone}
                        <br />Add: {address}
                    </p>
                </div>
                <button className="btn btn-primary" disabled={btnStatus} onClick={addedFreelancerOnList}>Add To Team</button>
            </div>
        </div >
    );
};

export default SingleFreelancer;