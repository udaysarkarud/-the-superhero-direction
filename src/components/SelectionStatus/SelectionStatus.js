import React from 'react';

const SelectionStatus = () => {
    return (
        <>
            <div className="selction-status">
                <div className="bg-primary rounded-3">
                    <h3 className="fs-4 text-white py-3 ms-3">Selction Status</h3>
                </div>
                <div>
                    <ol className="list-group list-group-numbered">
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Total Members: </div>
                            </div>
                            <span className="badge bg-primary rounded-pill">14</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Total Fees: </div>
                            </div>
                            <span className="badge bg-primary rounded-pill">14</span>
                        </li>
                    </ol>
                </div>
            </div>

            <div className="selction-status mt-5">
                <div className="bg-primary rounded-3">
                    <h3 className="fs-4 text-white py-3 ms-3">Selected Members</h3>
                </div>
                <div>
                    <ol className="list-group list-group-numbered">
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Subheading</div>
                                Cras justo odio
                            </div>
                            <span className="badge bg-primary rounded-pill">14</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Subheading</div>
                                Cras justo odio
                            </div>
                            <span className="badge bg-primary rounded-pill">14</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Subheading</div>
                                Cras justo odio
                            </div>
                            <span className="badge bg-primary rounded-pill">14</span>
                        </li>
                    </ol>
                </div>
            </div>
        </>
    );
};

export default SelectionStatus;