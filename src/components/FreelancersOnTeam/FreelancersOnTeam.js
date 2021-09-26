import React from 'react';

const FreelancersOnTeam = (props) => {
    const { category, name, img } = props.frealancerDataforStatus
    return (
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{name}</div>
                {category}
            </div>
            <img src={img} alt="" width="50px" />
        </li>
    );
};

export default FreelancersOnTeam;