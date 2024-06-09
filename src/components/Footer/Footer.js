import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope, faClock, } from '@fortawesome/free-solid-svg-icons';

import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer>
            <div id='contact' className='footer'>

                <div className='second'>
                <div className="fo-mid-parent">
                    <div className="fo-heading">
                      <h3>Contact Info</h3>
                    </div>
                    <div className="fo-desc-parent">
                      <div className="fo-desc">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Warnbro 6169 WA</span>
                      </div>
                      <div className="fo-desc">
                        <FontAwesomeIcon icon={faPhone} />
                        <span>+61499 556 050</span>
                      </div>
                      <div className="fo-desc">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>eddieg@icgsms.com</span>
                      </div>
                      <div className="fo-desc">
                        <FontAwesomeIcon icon={faClock} />
                        <span>Mon - Sat 09:00 - 17:00</span>
                      </div>
                    </div>
                  </div>

                </div>
                <div className='third'>
                <div className="fo-mid-parent">
                    <div className="fo-heading">
                      <h3>Follow on</h3>
                    </div>
                    <div className="fo-desc-parent">
                      <div className="fo-desc">
                      <a href="/PrivacyPolicy"><i className='fa-brands fa-instagram'></i></a>
                      <a href="/PrivacyPolicy"><i className='fa-brands fa-linkedin'></i></a>
                      <a href="/PrivacyPolicy"><i className='fa-brands fa-facebook'></i></a>
                      </div>
            
                    </div>
                  </div>
                </div>
                <div className='fourth'>
                <div className="col-lg-4">
                <div className="fo-form">
                  <div className="fo-heading">
                    <h3>Message Us</h3>
                  </div>
                  <form action="">
                    <input
                      className="fo-field"
                      type="text"
                      placeholder="Name"
                    />
                    <input
                      className="fo-field"
                      type="number"
                      placeholder="Phone Number"
                    />
                    <input
                      className="fo-field"
                      type="email"
                      placeholder="Email"
                    />
                    <textarea
                      className="fo-textarea"
                      placeholder="Message"
                    ></textarea>
                    <input
                      className="submit-btn-fo"
                      type="submit"
                      value="Send"
                    />
                  </form>
                </div>
              </div>
                </div>
                <div className='thankyou'>
                    <p>© Copyright 2023 ICGSMS. | All Rights Reserved.</p>
                </div>
            </div>
        </footer >
            

        </>
    )
}

export default Footer