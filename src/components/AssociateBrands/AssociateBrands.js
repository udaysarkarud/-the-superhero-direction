import React from 'react';
import AssociateBrandImg01 from '../../images/brands/associatebrands-01.png';
import AssociateBrandImg02 from '../../images/brands/associatebrands-02.png';
import AssociateBrandImg03 from '../../images/brands/associatebrands-03.png';
import AssociateBrandImg04 from '../../images/brands/associatebrands-04.png';

const AssociateBrands = () => {
    return (
        /* Associate Brands Section */
        <>
            <h2 className="fs-5 text-primary text-center">around 135 brands already associate dugilan</h2>
            <div className="my-3">
                <img className="img-fluid" src={AssociateBrandImg01} alt="" />
                <img className="img-fluid" src={AssociateBrandImg02} alt="" />
                <img className="img-fluid" src={AssociateBrandImg03} alt="" />
                <img className="img-fluid" src={AssociateBrandImg04} alt="" />
            </div>
        </>
    );
};

export default AssociateBrands;