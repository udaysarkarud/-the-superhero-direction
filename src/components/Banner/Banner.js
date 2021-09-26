import BannerPhoneImg from '../../images/phones.png';

const Banner = () => {
    return (
        <div className="row align-items-center">
            <div className="col-12 col-lg-6 p-5">
                <h2>We Help To Build Your Teach Team</h2>
                <p>chose your best team for your application project. NB: Check freelancer profile and rating before add them to your team. You alco can directly contact with them over phone and calls.</p>
                <button className="btn btn-primary">Click To Contact</button>
                <span> or see our works</span>
            </div>
            <div className="col-12 col-lg-6">
                <img className="img-fluid" src={BannerPhoneImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;