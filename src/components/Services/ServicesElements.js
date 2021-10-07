import styled from 'styled-components';

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;

  @media screen and (max-width: 768px) {
      height: 1100px;
  }

  @media screen and (max-width: 480px) {
      height: 1300px;
  }
`

export const ServicesWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
  }
`

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 450px;
  width: 350px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;
  margin-right: 30px;
  margin-bottom: 86px;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`

export const ServicesTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 80px;
  width: 290px;
  margin-top: -20px
`

export const ServicesIcon = styled.img`
  height: 860px;
  width: 350px;
  border-radius: 10px;
`

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #6699FF;
  margin-bottom: 14px;
  margin-top: 48px;
  font-weight: 700;


  @media screen and (max-width: 480px) {
      font-size: 2rem;
  }
`

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  font-weight: 700;

`

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: grey;
  margin-bottom: 84px;
`