import React from 'react';
import './Enquire.css';

const Enquire: React.FC = () => {
  return (
    <div className='enquire'>
      <h1 className='contact'>Contact Us</h1>
      <div className="contact-grid">
      <h2 className="contact">How To Find us</h2>
      <h3 className='about'><span className='txt'><span><br/></span>"GRIVAS Technologies excels in cutting-edge Smart Home Automation and innovative solutions for School Student Safety and Administration. In collaboration with Ojasvit for smart home automation and School Guard for student safety, we deliver unparalleled excellence. Our Smart Home Automation suite encompasses advanced features such as intelligent lighting systems, automated gate solutions, and secure door locks, redefining modern living. Complementing this, our Schoolguard solution integrates state-of-the-art BLE Technology, providing seamless monitoring for school buses and campuses. Elevate your lifestyle and safety standards with GRIVAS Technologies."<span><br/><br/></span></span>
    <span style={{ fontWeight: 'bold' }}> Address:</span> 53, 1st Floor, Velachery Main Rd, Mehta Nagar,<span><br/></span> Selaiyur, Chennai, Tamil Nadu 600073<span><br/></span>

<span style={{ fontWeight: 'bold' }}>Phone:</span>070102 58295<span style={{ fontWeight: 'bold' }}><br/>Email Address:</span>grivas.techno@gmail.com </h3>
</div>
      <label className="btn-open" htmlFor="frmContactForm">
        <i className="far fa-envelope"></i>
        <span className="ml-half">Open Form</span>
      </label>
      
      <input type="checkbox" id="frmContactForm" />
      <div className="contact-modal">
        <div className="contact-form">
          <form>
            <div className="contact-wrapper">
              <div className="contact-section">
                <h2 className="p-none m-none mb-quarter text-white">
                  <i className="far fa-envelope"></i>
                  <span className="ml-half">Contact Me</span>
                </h2>
              </div>
              <div className="contact-section">
                <div className="form-item">
                  <input id="txtFullName" type="text" placeholder="Full Name (Optional)" />
                  <label className="lbl-floating" htmlFor="txtFullName">Full Name (Optional)</label>
                  <i className="icon text-white fas fa-user"></i>
                </div>
                <div className="form-item">
                  <input id="txtEmail" type="email" placeholder="E-Mail Address" />
                  <label className="lbl-floating" htmlFor="txtEmail">E-Mail Address</label>
                  <i className="icon text-white fas fa-at"></i>
                </div>
                <div className="form-item">
                  <textarea id="txtContent" placeholder="Your message to the developer" rows={5}></textarea>
                  <label className="lbl-floating" htmlFor="txtContent">Your message to the developer</label>
                  <i className="icon text-white far fa-comment"></i>
                </div>
              </div>
              <div className="contact-section text-right">
                <label className="contact-cancel" htmlFor="frmContactForm">
                  <i className="fas fa-times-circle"></i>
                  <span className="ml-quarter">Cancel</span>
                </label>
                <button className="btn-open ml-whole" type="button">
                  <i className="far fa-paper-plane"></i>
                  <span className="ml-half">Send</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Enquire;
