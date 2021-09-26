import React from 'react';
import Rating from 'react-rating';

const SingleFreelancer = (props) => {
    const { category, name, email, phone, address, star, salary, img } = props.flData;
    return (
        <div className="col">
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center">{name}</h5>
                    <p className="h-1 text-center text-primary">

                    </p>
                    <p className="h-1">
                        Category: {category}
                        <br />Salary: {salary}
                    </p>
                    <h6>Contact Info</h6>
                    <p className="h-1">
                        Email: {email}
                        <br />Phone: {phone}
                        <br />Address: {address}
                    </p>
                </div>
                <button className="btn btn-primary" onClick={() => props.addFreelancer(props.flData)}>Add To Team</button>
            </div>
        </div>
    );
};

export default SingleFreelancer;