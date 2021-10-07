import React, {useState} from 'react';
import './contact.css';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  Heading,
  Subtitle,
  HeroBtnWrapper,
  ImgWrap,
  Img,
} from './ContactElement';
import {Button} from '../ButtonElements';

function Contact({
  lightText,
  lightBg,
  imgStart,
  years,
  headline,
  description,
  darkText,
  number,
  id,
  img,
  alt,
  dark,
  dark2,
  primary,
}) {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <div className="form">
                  <div className="form1">
                    <textarea
                      type="text"
                      className="input1"
                      placeholder="First Name"
                      maxLength="2000"></textarea>
                    <textarea
                      type="text"
                      className="input1"
                      placeholder="Last Name"
                      maxLength="2000"></textarea>
                  </div>
                  <div className="form1">
                    <textarea
                      type="text"
                      className="input1"
                      placeholder="Email Address"
                      maxLength="2000"></textarea>
                    <textarea
                      type="text"
                      className="input1"
                      placeholder="Phone Number"
                      maxLength="2000"></textarea>
                  </div>
                  <div className="form1">
                    <textarea
                      type="text"
                      className="input2"
                      placeholder="Description"
                      maxLength="2000"></textarea>
                  </div>
                </div>
                <HeroBtnWrapper>
                    <Button to="signup"
                        onMouseEnter={onHover} onMouseLeave={onHover} fontWeight='true'>
                        Get a Quote 
                    </Button>
                </HeroBtnWrapper>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
}

export default Contact;
