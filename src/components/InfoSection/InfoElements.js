import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #fff;
  background-color: red;

  
  @media screen and (max-width: 768px) {
      padding: 100px 0;
  }
`

export const InfoWrapper = styled.div`
  z-index: 1;
  height: 100%;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  background-color: white;
`

export const InfoRow = styled.div`
  display: grid;
  grid-auto-column: minmax(auto, 1fr);
  align-items: center;
  margin-top: 150px;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};


  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1 col2'` : `'col1 col1' 'col2 col2'`)};
  }
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
  margin-left: 125px;
`

export const Column2 = styled.div`
  margin-bottom: 150px;
  padding: 0 15px;
  grid-area: col2;
  margin-top: 150px;
  margin-left: 165px;

`

export const TextWrapper = styled.div`
  padding-top: 0;
  padding-bottom: 60px;
`

export const ExpWrapper = styled.div`
  padding-top: 0;
  padding-bottom: 60px;
  display: flex;
  flex-direction: row;
  background-color: red;
  max-width: 640px;
`

export const ExpWrapper2 = styled.div`
  padding-bottom: 8px;
  display: flex;
  flex-direction: column;
  background-color: white;
`

export const ExpTop = styled.h1`
  line-height: 1.1;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 16px;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};
  
  @media screen and (max-width: 480px) {
      font-size: 32px;
  }
`

export const ExpTop2 = styled.h1`
  line-height: 1.1;
  font-weight: 700;
  font-size: 48px;
  margin-bottom: 16px;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};
  
  @media screen and (max-width: 480px) {
      font-size: 32px;
  }
`

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Heading = styled.h1`
  line-height: 1.1;
  font-weight: 800;
  font-size: 48px;
  margin-bottom: 16px;
  max-width: 740px;
  color: ${({ lightText }) => (lightText ? '#000' : '#010606')};
  
  @media screen and (max-width: 480px) {
      font-size: 32px;
  }
`

export const Subtitle = styled.p`
  color: ${({ darkText }) => (darkText ? '#BDBDBD' : '#fff')};
  max-width: 540px;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 35px;
`

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`