import React from 'react';
import BannerPhoneImg from '../../images/phones.png';

const Banner = () => {
    return (
        <div className="row align-items-center">
            <div className="col-12 col-lg-6 p-5">
                <h2>We build apps and websites</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque exercitationem, animi amet quasi
                    repellat quae rerum et repudiandae! Minima corporis nostrum sunt.</p>
                <button className="btn btn-primary">Click To Contact</button>
                or see our works
            </div>
            <div className="col-12 col-lg-6">
                <img className="img-fluid" src={BannerPhoneImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;