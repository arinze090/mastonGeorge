import React from 'react';
import Icon1 from '../images/civil.png';
import Icon2 from '../images/consult.png';
import Icon3 from '../images/solar.png';

import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesTitle,
  ServicesWrapper,
} from './ServicesElements';

function Services() {
  return (
    <ServicesContainer>
      <ServicesH1>Services</ServicesH1>
      <ServicesP>
        Turpis facilisis tempor pulvinar in lobortis ornare magna.
      </ServicesP>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesTitle>
            <ServicesH2>Civil / Water Engineering</ServicesH2>
          </ServicesTitle>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesTitle>
            <ServicesH2>Consultancy / Research</ServicesH2>
          </ServicesTitle>         
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesTitle>
            <ServicesH2>Renewable Energy</ServicesH2>
          </ServicesTitle>       
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
}

export default Services;
