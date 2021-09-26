import React, { useEffect, useState } from 'react';
import SelectionStatus from '../SelectionStatus/SelectionStatus';
import SingleFreelancer from '../SingleFreelancer/SingleFreelancer';

const FreelancerArea = () => {
    //Load API Data
    const [allFreelancers, setAllFreelancers] = useState([]);
    useEffect(() => {
        fetch('./freelancers.JSON')
            .then(res => res.json())
            .then(data => setAllFreelancers(data))
    }, []);

    //Show Status
    const [teamMembers, setTeamMembers] = useState([]);
    const addToteam = (addFreelancer) => {
        const checkExistence = teamMembers.findIndex(checkMember => checkMember.key === addFreelancer.key);

        if (checkExistence === -1) {
            const newFreelancer = [...teamMembers, addFreelancer];
            setTeamMembers(newFreelancer);
        }
    }

    return (
        /* Show Freelancer data and Selection Status */
        <div className="row">
            <div className="col-12 col-lg-3">
                <SelectionStatus teamStatus={teamMembers} />
            </div>
            <div className="col-12 col-lg-9">
                <div className="row row-cols-1 row-cols-md-3 g-3">
                    {
                        allFreelancers.map(freelancer => <SingleFreelancer key={freelancer.key} flData={freelancer} addFreelancer={addToteam} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default FreelancerArea;