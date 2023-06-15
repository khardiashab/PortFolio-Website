import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import "./Contact.scss"
const Contact = () => {
  return (
    <div className="contact d-flex align-items-center flex-column py-5 navbar__margin" id='contacts'>
      <div className="contact-methods d-flex  flex-column flex-lg-row  justify-content-center">
        <div className="contact-method m-2">
          <a href='mailto:ajaysinghkhardia95@gmail.com' className="email-button">
          <FaEnvelope  className='me-2'/>
            Send Email
          </a>
        </div>
        <div className="contact-method m-2">
          <a href="https://wa.me/918003628008" className="whatsapp-button">
          <FaWhatsapp className='me-2' />
            Chat on WhatsApp
          </a>
        </div>
      </div>
      <div className="social-media">
        <a href="https://github.com/khardiashab/" target='_blank' className=''><AiFillGithub /></a>
        <a href="https://www.linkedin.com/in/ajay-khardia-5244591b1/" target='_blank' className=''><AiFillLinkedin /></a>
        <a href="https://www.instagram.com/" className=''><AiFillInstagram /></a>
      </div>
    </div>
  );
};

export default Contact;
