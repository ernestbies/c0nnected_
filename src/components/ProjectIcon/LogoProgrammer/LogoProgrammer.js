import React from 'react';
import {
    LogoContainer,
    StyledText,
    TitleContainer,
    WebsiteSubtitle,
    WebsiteTitle,
} from './LogoProgrammer.styles';

const LogoProgrammer = () => {
    return (
        <LogoContainer
            href={'https://programm3r.netlify.app'}
            title={'Programm3r - portfolio creator'}
            target={'_blank'}
            rel={'noreferrer'}
        >
            <StyledText>{'</>'}</StyledText>
            <TitleContainer>
                <WebsiteTitle>{'Programm3r'}</WebsiteTitle>
                <WebsiteSubtitle>{'PORTFOLIO CREATOR'}</WebsiteSubtitle>
            </TitleContainer>
        </LogoContainer>
    );
};

export default LogoProgrammer;
