import React from 'react';
import HeroImage from '../../images/hero-image.png'

const Heroarea = () => {
    return (
        /* Hero Section */
        <section className="custom-gap">
            <div className="row align-items-center">
                <div className="col-12 col-lg-6">
                    <h1>Total Budget: <span className="text-primary">$500000</span> For Complete the Application</h1>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Find Freelancer" />
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                    </div>
                    <p>After login with your correct username and password you can make a team for your next project easily. You’ll find list of top level skilled Freelancers for your application. Just check freelancer profile with rating and add them to your team. You also can check total costing of your team for your project.</p>
                </div>
                <div className="col-12 col-lg-6">
                    <img className="img-fluid" src={HeroImage} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Heroarea;