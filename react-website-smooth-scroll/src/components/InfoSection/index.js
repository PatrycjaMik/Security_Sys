import React from 'react';
import {Button} from "../ButtonElement";
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img, ImgWrap} from "./InfoElements";
import {NavLinks} from "../Navbar/NavbarElements";

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, darkText, headLine, description, buttonLabel, img, alt}) => {
    return (
        <>
         <InfoContainer lightBg={lightBg} id={id}>
             <InfoWrapper>
                 <InfoRow imgStart={imgStart}>
                     <Column1>
                         <TextWrapper>
                             <TopLine>{topLine}</TopLine>
                             <Heading lightText={lightText}>{headLine}</Heading>
                             <Subtitle darkText={darkText}>{description}</Subtitle>
                             <BtnWrap>
                                 <Button to="home"
                                  smooth={true} duration={500} spy={true} exact='true' offset={-80}
                                 >{buttonLabel}</Button>
                             </BtnWrap>
                         </TextWrapper>
                     </Column1>
                     <Column2>
                         <ImgWrap>
                             <Img src={img} alt={alt}/>
                         </ImgWrap>
                     </Column2>
                 </InfoRow>
             </InfoWrapper>
         </InfoContainer>
        </>
    );
};

export default InfoSection;