import React from 'react';
import { LogoContainer, StyledLink, StyledLogo } from './LogoRMS.styles';

const LogoRMS = () => {
    return (
        <LogoContainer
            href={'https://restaurantmanagementsystem.netlify.app'}
            title={'Restaurant Management System'}
            target={'_blank'}
            rel={'noreferrer'}
        >
            <StyledLogo src={'projects/rms-logo.png'} alt={'RMS'} />
            <StyledLink>{'Restaurant Management System'}</StyledLink>
        </LogoContainer>
    );
};

export default LogoRMS;
