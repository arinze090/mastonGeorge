import React from 'react';
import './footer.css';
import {animateScroll as scroll} from 'react-scroll';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import {
  FooterLink,
  FooterLogo,
  FooterLinkTitle,
  WebsiteRights,
} from './FooterElements';

function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="logosection">
          <FooterLogo to='/' onClick={toggleHome}>
            <img
              src={require('../images/mastonLogo.png')}
              alt="MastonLogo"
              className="mastonLogo"
            />
          </FooterLogo>
          <p className="logo">MASTON GEORGE</p>
          <div className="map">
            <RoomIcon />
            <p>Abuja</p>
          </div>
          <div className="map">
            <PhoneIcon />
            <p>+234 816 361 0689</p>
          </div>
          <div className="map">
            <EmailIcon />
            <p>contact@mastongeorge.com</p>
          </div>
        </div>
        <div className="footer__left">
          <div className="link1">
            <FooterLinkTitle>QUICK LINKS</FooterLinkTitle>
            <FooterLink to='/'>Home</FooterLink>
            <FooterLink to="about">About</FooterLink>
            <FooterLink to="/">Services</FooterLink>
            <FooterLink to="/">Contact</FooterLink>
          </div>
          <div className="link1">
            <FooterLinkTitle>LEGAL LINKS</FooterLinkTitle>
            <FooterLink to="/">Terms</FooterLink>
            <FooterLink to="/">Condition</FooterLink>
            <FooterLink to="/">Policy</FooterLink>
          </div>
          <div className="link1">
            <FooterLinkTitle>SOCIAL MEDIA</FooterLinkTitle>
            <FooterLink to="/">Facebook</FooterLink>
            <FooterLink to="/">Twitter</FooterLink>
            <FooterLink to="/">Youtube</FooterLink>
            <FooterLink to="/">LinkedIn</FooterLink>
          </div>
        </div>
      </div>
      <div className="copyright">
        <WebsiteRights>
          Copyright © {new Date().getFullYear()} Maston George Inc.
        </WebsiteRights>
      </div>
    </div>

  );
}

export default Footer;
