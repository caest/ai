import React from 'react';
import Slider from 'react-slick';
import '../news.scss';
import imageOne from '../images/1.webp';
import imageSecond from '../images/2.webp';
import imageThird from '../images/3.webp';
import imageFour from '../images/4.webp';
import SampleNextArrow from './SampleNextArrow';
import SamplePrevArrow from './SamplePrevArrow';

const SimpleCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
        }
      },
    ],
  };

  return (
    <Slider {...settings}>
      <a className="news-slide" href="#" >
        <img className="news-slide-preview" src={imageOne} alt="" />
        <h3 className="news-slide-title">AI-Driven Optimization
of Existing Products</h3>
        <p className="news-slide-text">Our team of experts analyzes your current digital product to identify opportunities for optimization through artificial intelligence. Enhance UX, increase efficiency, and reduce operational costs with our tailored solutions.</p>
      </a>
      <a className="news-slide" href="#" >
        <img className="news-slide-preview" src={imageSecond} alt="" />
        <h3 className="news-slide-title">End-to-End
Product Development</h3>
        <p className="news-slide-text">Our product creation process includes research, development, testing, and launch. We select the best and most suitable technologies for your project to ensure its long-term success.</p>
      </a>
      <a className="news-slide" href="#" >
        <img className="news-slide-preview" src={imageThird} alt="" />
        <h3 className="news-slide-title">Performance Audit and Optimization</h3>
        <p className="news-slide-text">Through deep analysis and monitoring, we identify the bottlenecks in your digital product and offer actionable steps for performance improvement.</p>
      </a>
      <a className="news-slide" href="#" >
        <img className="news-slide-preview" src={imageFour} alt="" />
        <h3 className="news-slide-title">Innovation and Growth Consulting</h3>
        <p className="news-slide-text">By engaging with your business, we uncover untapped opportunities and offer innovative ideas for expansion and improvement of your product or service.</p>
      </a>
      <a className="news-slide" href="#" >
        <img className="news-slide-preview" src={imageOne} alt="" />
        <h3 className="news-slide-title">AI-Driven Optimization
of Existing Products</h3>
        <p className="news-slide-text">Our team of experts analyzes your current digital product to identify opportunities for optimization through artificial intelligence. Enhance UX, increase efficiency, and reduce operational costs with our tailored solutions.</p>
      </a>
      <a className="news-slide" href="#" >
        <img className="news-slide-preview" src={imageSecond} alt="" />
        <h3 className="news-slide-title">End-to-End
Product Development</h3>
        <p className="news-slide-text">Our product creation process includes research, development, testing, and launch. We select the best and most suitable technologies for your project to ensure its long-term success.</p>
      </a>
      <a className="news-slide" href="#" >
        <img className="news-slide-preview" src={imageThird} alt="" />
        <h3 className="news-slide-title">Performance Audit and Optimization</h3>
        <p className="news-slide-text">Through deep analysis and monitoring, we identify the bottlenecks in your digital product and offer actionable steps for performance improvement.</p>
      </a>
      <a className="news-slide" href="#" >
        <img className="news-slide-preview" src={imageFour} alt="" />
        <h3 className="news-slide-title">Innovation and Growth Consulting</h3>
        <p className="news-slide-text">By engaging with your business, we uncover untapped opportunities and offer innovative ideas for expansion and improvement of your product or service.</p>
      </a>
    </Slider>
  );
};

const NewsSlider = () => {
  return (
    <div>
      <SimpleCarousel />
    </div>
  );
};

export default NewsSlider;