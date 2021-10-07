import React from 'react';
import './footer.css';
import {animateScroll as scroll} from 'react-scroll';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import {FaTwitter, FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa';
import {
  FooterContainer,
  FooterLink,
  FooterLogo,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
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

    // <FooterContainer>
    //     <FooterWrap>
    //         <FooterLinksContainer>
    //             <FooterLinksWrapper>
    //                 <FooterLinkItems>
    //                     <FooterLinkTitle>About Us</FooterLinkTitle>
    //                         <FooterLink to="/signin">How it works</FooterLink>
    //                         <FooterLink to="/signin">Testimonials</FooterLink>
    //                         <FooterLink to="/signin">Careers</FooterLink>
    //                         <FooterLink to="/signin">Investors</FooterLink>
    //                         <FooterLink to="/signin">Terms of Service</FooterLink>
    //                 </FooterLinkItems>
    //                 <FooterLinkItems>
    //                     <FooterLinkTitle>Contact Us</FooterLinkTitle>
    //                         <FooterLink to="/">Contact</FooterLink>
    //                         <FooterLink to="/">Support</FooterLink>
    //                         <FooterLink to="/">Destination</FooterLink>
    //                         <FooterLink to="/">Sponsorship</FooterLink>
    //                 </FooterLinkItems>
    //             </FooterLinksWrapper>
    //             <FooterLinksWrapper>
    //                 <FooterLinkItems>
    //                     <FooterLinkTitle>About Us</FooterLinkTitle>
    //                         <FooterLink to="/">How it works</FooterLink>
    //                         <FooterLink to="/">Testimonials</FooterLink>
    //                         <FooterLink to="/">Careers</FooterLink>
    //                         <FooterLink to="/">Investors</FooterLink>
    //                         <FooterLink to="/">Terms of Service</FooterLink>
    //                 </FooterLinkItems>
    //                 <FooterLinkItems>
    //                     <FooterLinkTitle>Social Media</FooterLinkTitle>
    //                         <FooterLink to="/">Instagram</FooterLink>
    //                         <FooterLink to="/">Twitter</FooterLink>
    //                         <FooterLink to="/">Github</FooterLink>
    //                         <FooterLink to="/">LinkedIn</FooterLink>
    //                 </FooterLinkItems>
    //             </FooterLinksWrapper>
    //         </FooterLinksContainer>
    //         <SocialMedia>
    //             <SocialMediaWrap>
    //                 <SocialLogo to='/'onClick={toggleHome}>Ego Oyibo</SocialLogo>
    //                 <WebsiteRights>arinze © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
    //                 <SocialIcons>
    //                     <SocialIconLink href="/" target="_blank" aria-label="Instagram">
    //                         <FaInstagram />
    //                     </SocialIconLink>
    //                     <SocialIconLink href="https://twitter.com/arinze__n" target="_blank" aria-label="Twitter">
    //                         <FaTwitter />
    //                     </SocialIconLink>
    //                     <SocialIconLink href="https://github.com/arinze090" target="_blank" aria-label="Github">
    //                         <FaGithub />
    //                     </SocialIconLink>
    //                     <SocialIconLink href="https://www.linkedin.com/in/arinze-nchor-nwankwo-778888130" target="_blank" aria-label="LinkedIn">
    //                         <FaLinkedin />
    //                     </SocialIconLink>
    //                 </SocialIcons>
    //             </SocialMediaWrap>
    //         </SocialMedia>
    //     </FooterWrap>
    // </FooterContainer>
  );
}

export default Footer;
