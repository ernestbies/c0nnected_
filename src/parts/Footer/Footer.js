import React from 'react';
import {
    AuthorInfo, AuthorInfoDiv,
    BoldText,
    FooterHeaderText,
    FooterInfo,
    FooterInfoText,
    FooterLink,
    FooterLogo,
    StyledFooter
} from "./Footer.styles";
import GithubLink from "../../components/GithubLink/GithubLink";

const Footer = () => {

    return (
        <StyledFooter>
            <FooterInfo>
                <FooterLink href={'localhost:3000'}>
                    <FooterLogo alt={'c0nnected_'} src={'/logo.svg'}/>
                    <FooterHeaderText>{'c0nnected_'}</FooterHeaderText>
                </FooterLink>
                <FooterInfoText>
                    <BoldText>{'c0nnected_'}</BoldText>
                    {' is an application that allows you to communicate with other users via chat on the basis of the Hall of Fame.'}
                </FooterInfoText>
            </FooterInfo>
            <AuthorInfoDiv>
                <GithubLink/>
                <AuthorInfo>
                    &copy; 2021 Ernest Bieś
                </AuthorInfo>
            </AuthorInfoDiv>
        </StyledFooter>
    );
}

export default Footer;
