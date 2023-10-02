import React, { useState, useEffect } from 'react';
import './cta.scss';
import backgroundAfter from './bg.svg';
import before from './before.svg';
import after from './after.svg';
import CtaForm from './CtaForm';
import Modal from '../Modal/Modal';
import ScrollMagic from 'scrollmagic';


const Cta = () => {

  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    const elements = document.querySelectorAll('.cta, .cta-subtitle, .cta-form, .cta-form-group, .cta-content-after, .cta-content-before');

    elements.forEach((element) => {
      new ScrollMagic.Scene({
        triggerElement: element,
        triggerHook: 0.9,
      })
      .setClassToggle(element, 'visible')
      .addTo(controller);
    });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    agreeToProcessing: false
  });

  const [isModalOpen, setModalOpen] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, type } = e.target;
    const value = type === 'checkbox' ? e.target.checked : e.target.value;
  
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(true); 
  };
  
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="title">Don't Leave Your Product Unprotected!</h2>
          <div className="cta-subtitle">
            Let our experts shield your product from breakdowns and optimize it for seamless performance. Submit your details now and we'll reach out with a tailored solution just for you!
          </div>
          <CtaForm
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
            formData={formData}
          />
          <div className="cta-content-before">
            <img src={before} alt="" />
          </div>
          <div className="cta-content-after">
            <img src={after} alt="" />
          </div>
        </div>
      </div>
      <div className="cta-bg">
        <img src={backgroundAfter} alt="" />
      </div>
      
      {isModalOpen && (
        <Modal
          content={<p>We will contact you shortly!</p>}
          onClose={handleCloseModal}
        />
      )}
      
    </div>
  );
};

export default Cta;
