import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  position: relatuve;
  z-index: 1;
  margin-bottom: 560px;

  :before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
      z-index: 2;
  }
`

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
  background: #232a34;
`

export const HeroContent = styled.div`
  z-index: 3;
  display: flex;
  flex-direction: column;
  margin-top: 500px;
  width: 100%;
`

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 72px;
  font-weight: 900;
  margin-left: 165px;


  @media screen and (max-width: 768px) {
      font-size: 40px;
  }

  @media screen and (max-width: 480px) {
      font-size: 32px;
  }
`

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 48px;
  font-weight: 700;
  margin-left: 165px;

  @media screen and (max-width: 768px) {
      font-size: 24px;
  }

  @media screen and (max-width: 480px) {
      font-size: 18px;
  }
`

export const HeroP1 = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  margin-left: 165px;

  @media screen and (max-width: 768px) {
      font-size: 24px;
  }

  @media screen and (max-width: 480px) {
      font-size: 18px;
  }
`

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 165px;
  margin-bottom: 20px;
`

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`
