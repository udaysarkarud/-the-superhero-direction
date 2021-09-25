import React from 'react';
import HeroImage from '../../images/hero-image.png'

const Heroarea = () => {
    return (
        <section className="custom-gap">
            <div className="row align-items-center">
                <div className="col-12 col-lg-6">
                    <h1>More Than 100 Wordpress Themes and Plugins</h1>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Recipient's username"
                            aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus obcaecati reprehenderit
                        repellat. Incidunt voluptatibus maiores dolorem voluptas. Blanditiis incidunt exercitationem
                        laudantium error aut, odit voluptates ad pariatur vel, animi praesentium!</p>
                </div>
                <div className="col-12 col-lg-6">
                    <img className="img-fluid" src={HeroImage} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Heroarea;