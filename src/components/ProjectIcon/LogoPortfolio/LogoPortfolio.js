import React from "react";
import {Img, LogoContainer, TitleContainer, WebsiteSubtitle, WebsiteTitle} from "./LogoPortfolio.styles";

const LogoPortfolio = () => {

    return (
        <LogoContainer href={'https://ernestbies.netlify.app'}
                       title={'Ernest Bieś - portfolio website'} target={'_blank'} rel={'noreferrer'}>
            <Img src={'projects/portfolio-logo.svg'}/>
            <TitleContainer>
                <WebsiteTitle>{'ERNEST BIEŚ'}</WebsiteTitle>
                <WebsiteSubtitle>{'IT SPECIALIST & PROGRAMMER'}</WebsiteSubtitle>
            </TitleContainer>
        </LogoContainer>
    )
};

export default LogoPortfolio;
