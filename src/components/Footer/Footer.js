import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons'
import './footer.css'

const Footer = () => {
    return (
        <footer className= 'footer'>
            <div className="container">
                <div className="content">
                        <div className="first-box__list">
                            <h3 className="first-box__link"><b>Follow Us.</b></h3>
                            <p className="first-box__sub-link">We are always looking for new  <br/>
                            projects and collaborations. <br/>
                                Feel free to contact us.</p>
                            <div className="content__icons">
                                <a href="http://www.facebook.com" className="content__icon-links"><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a href="http://www.twitter.com" className="content__icon-links"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href="http://www.instagram.com" className="content__icon-links"><FontAwesomeIcon icon={faInstagram} /></a>
                            </div>

                        </div>
                        <div className="second-box__list">
                            <h3 className="second-box__link"><b>Contact Us.</b></h3>
                            <address className="second-box__sub-link">One Apple Park Way <br/>
                                Cupertino, CA 95014</address>
                            <a className="second-box__sub-link">(408) 996-1010</a>
                            <p className="second-box__email-link">support@apple.com</p>
                        </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;