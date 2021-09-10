import React from 'react';
import Icon1 from '../../images/svg-4.png';
import Icon2 from '../../images/svg-4.png';
import Icon3 from '../../images/svg-4.png';
import {ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper, ServicesCard, ServicesIcon, ServicesP} from "./ServicesElements";


const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>On-site Guarding</ServicesH2>
                    <ServicesP>Security resources with a local focus</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Fire and Safety Services</ServicesH2>
                    <ServicesP>Tradition of providing comprehensive fire</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Remote Guarding</ServicesH2>
                    <ServicesP>Guarding functions now performed remotely</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
}

export default Services;