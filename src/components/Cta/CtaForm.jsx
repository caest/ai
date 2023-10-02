import React from 'react';
import btnIcon from './btn.svg';

const CtaForm = ({ handleSubmit, handleInputChange, formData }) => {
    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className="cta-form">
                <div className="form-group">
                    <input 
                        className='cta-form-input'  
                        type="text" 
                        id="name" 
                        placeholder='Name' 
                        name="name" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <input 
                        className='cta-form-input' 
                        type="email" 
                        id="email" 
                        placeholder='Email' 
                        name="email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <input 
                        className='cta-form-input' 
                        type="tel" 
                        id="phone" 
                        placeholder='Phone' 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleInputChange} 
                        required 
                    />
                </div>
                <button className="cta-form-button" type="submit">
                    Send
                    <img src={btnIcon} alt="" />
                </button>
            </div>
            <div className="cta-form-group">
    <input 
        className="cta-form-checkbox" 
        type="checkbox" 
        id="agreeToProcessing" 
        name="agreeToProcessing" 
        checked={formData.agreeToProcessing} 
        onChange={handleInputChange} 
        required 
    />
    <label className="cta-form-label" htmlFor="agreeToProcessing">
        I agree to the processing of my personal data
    </label>
</div>

        </form>
    );
};

export default CtaForm;
