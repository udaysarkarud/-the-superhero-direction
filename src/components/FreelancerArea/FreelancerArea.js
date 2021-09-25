import React, { useEffect, useState } from 'react';
import SelectionStatus from '../SelectionStatus/SelectionStatus';
import SingleFreelancer from '../SingleFreelancer/SingleFreelancer';

const FreelancerArea = () => {
    //Load API Data
    const [allFreelancers, setAllFreelancers] = useState([])
    useEffect(() => {
        fetch('./freelancers.JSON')
            .then(res => res.json())
            .then(data => setAllFreelancers(data))
    }, [])

    //Show Status

    return (
        <div className="row">
            <div className="col-12 col-lg-3">
                <SelectionStatus />
            </div>
            <div className="col-12 col-lg-9">
                <div className="row row-cols-1 row-cols-md-3 g-3">
                    {
                        allFreelancers.map(freelancer => <SingleFreelancer key={freelancer.key} flData={freelancer} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default FreelancerArea;