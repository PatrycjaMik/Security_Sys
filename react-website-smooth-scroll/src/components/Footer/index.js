import React from 'react';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink} from "./FooterElements";
import {SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights} from "./FooterElements";
import {FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin} from "react-icons/all";
import {animateScroll as scroll} from "react-scroll";

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to="/signin">Why</FooterLink>
                                <FooterLink to="/signin">How</FooterLink>
                                <FooterLink to="/signin">When</FooterLink>
                                <FooterLink to="/signin">What</FooterLink>
                                <FooterLink to="/signin">Where da fuck</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to="/signin">Why</FooterLink>
                            <FooterLink to="/signin">How</FooterLink>
                            <FooterLink to="/signin">When</FooterLink>
                            <FooterLink to="/signin">What</FooterLink>
                            <FooterLink to="/signin">Where da fuck</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to="/signin">Why</FooterLink>
                            <FooterLink to="/signin">How</FooterLink>
                            <FooterLink to="/signin">When</FooterLink>
                            <FooterLink to="/signin">What</FooterLink>
                            <FooterLink to="/signin">Where da fuck</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to="/signin">Why</FooterLink>
                            <FooterLink to="/signin">How</FooterLink>
                            <FooterLink to="/signin">When</FooterLink>
                            <FooterLink to="/signin">What</FooterLink>
                            <FooterLink to="/signin">Where da fuck</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            ares
                        </SocialLogo>
                        <WebsiteRights>
                            ares  &copy;  {new Date().getFullYear()}
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com" target="_blank"
                            aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="//www.instagram.com" target="_blank"
                                            aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="//www.youtube.com" target="_blank"
                                            aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="//www.twitter.com" target="_blank"
                                            aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="//www.linkedin.com" target="_blank"
                                            aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;