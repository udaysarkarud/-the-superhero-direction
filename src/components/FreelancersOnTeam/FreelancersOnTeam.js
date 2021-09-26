import React from 'react';

const FreelancersOnTeam = (props) => {
    const { category, name, img } = props.frealancerDataforStatus
    return (
        /* Show Single Freelancer Data On Status Area */
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{name}</div>
                <small>{category}</small>
            </div>
            <img className="rounded-3" src={img} alt="" width="50px" />
        </li>
    );
};

export default FreelancersOnTeam;