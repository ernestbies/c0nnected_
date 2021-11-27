import React from "react";
import {Img, LogoContainer, TitleContainer, WebsiteSubtitle, WebsiteTitle} from "./LogoPersonal.styles";

const LogoPersonal = () => {

    return (
        <LogoContainer href={'https://ebies.netlify.app'}
                       title={'Ernest Bieś - personal website'} target={'_blank'} rel={'noreferrer'}>
            <Img src={'projects/personal-logo.svg'}/>
            <TitleContainer>
                <WebsiteTitle>{'ebies.netlify.app'}</WebsiteTitle>
                <WebsiteSubtitle>{'PERSONAL WEBSITE'}</WebsiteSubtitle>
            </TitleContainer>
        </LogoContainer>
    )
};

export default LogoPersonal;
