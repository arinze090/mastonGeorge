import React from 'react';
import './info.css';

import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Heading, Subtitle,   ImgWrap, Img, } from './InfoElements';


function InfoSection({lightText, lightBg, imgStart, headline, description, darkText, number, id, img, alt, }) {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                            
                                <div className="experience">
                                    <div className="years">
                                        <p>YEARS EXPERIENCE</p>
                                        <h1>20y</h1>
                                    </div>
                                    <div className="years">
                                        <p>Completed projects</p>
                                        <h1>34+</h1>
                                    </div>
                                    <div className="years">
                                        <p>Ongoing projects</p>
                                        <h1>12</h1>
                                    </div>
                                </div>
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
    )
}

export default InfoSection;