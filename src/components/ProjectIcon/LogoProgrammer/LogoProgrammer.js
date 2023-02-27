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
            href={'https://progr4mm3r.netlify.app'}
            title={'Progr4mm3r - portfolio creator'}
            target={'_blank'}
            rel={'noreferrer'}
        >
            <StyledText>{'</>'}</StyledText>
            <TitleContainer>
                <WebsiteTitle>{'Progr4mm3r'}</WebsiteTitle>
                <WebsiteSubtitle>{'PORTFOLIO CREATOR'}</WebsiteSubtitle>
            </TitleContainer>
        </LogoContainer>
    );
};

export default LogoProgrammer;
