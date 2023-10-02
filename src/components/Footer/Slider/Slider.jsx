import React from "react";
import Slider from "react-slick";
import slideImg from '../images/slide-1.webp';
import SampleNextArrow from "../../Footer/Slider/SampleNextArrow";
import SamplePrevArrow from "../../Footer/Slider/SamplePrevArrow";

const FooterSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <Slider {...settings}>
            <div className="footer-slide">
                <div className="footer-slide-top">
                    <div className="footer-slide-image">
                        <img src={slideImg} alt="" />
                    </div>
                    <div className="footer-slide-name">
                        <p>Pavel Vinnytsky</p>
                        <p>Inovis, CTO</p>
                    </div>
                </div>
                <div className="footer-slide-text">
                "Web accessibility is not just good practice—it's a critical business asset. It not only makes your site accessible to a broader range of users, including those with physical impairments, but it can also boost your conversion rates by up to 30%."
                </div>
            </div>
            <div className="footer-slide">
                <div className="footer-slide-top">
                    <div className="footer-slide-image">
                        <img src={slideImg} alt="" />
                    </div>
                    <div className="footer-slide-name">
                        <p>Pavel Vinnytsky</p>
                        <p>Inovis, CTO</p>
                    </div>
                </div>
                <div className="footer-slide-text">
                "Web accessibility is not just good practice—it's a critical business asset. It not only makes your site accessible to a broader range of users, including those with physical impairments, but it can also boost your conversion rates by up to 30%."
                </div>
            </div>
            <div className="footer-slide">
                <div className="footer-slide-top">
                    <div className="footer-slide-image">
                        <img src={slideImg} alt="" />
                    </div>
                    <div className="footer-slide-name">
                        <p>Pavel Vinnytsky</p>
                        <p>Inovis, CTO</p>
                    </div>
                </div>
                <div className="footer-slide-text">
                "Web accessibility is not just good practice—it's a critical business asset. It not only makes your site accessible to a broader range of users, including those with physical impairments, but it can also boost your conversion rates by up to 30%."
                </div>
            </div>
        </Slider>
    );
}

export default FooterSlider;
