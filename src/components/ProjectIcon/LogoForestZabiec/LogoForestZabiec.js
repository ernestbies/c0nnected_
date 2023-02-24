import React from 'react';
import { LogoContainer, LogoText, StyledLogo } from './LogoForestZabiec.styles';

const LogoForestZabiec = () => {
    return (
        <LogoContainer
            href={'https://forestzabiec.pl'}
            title={'Forest Żabiec - official website'}
            target={'_blank'}
            rel={'noreferrer'}
        >
            <StyledLogo
                width={60}
                height={60}
                src={'/projects/forest-logo.svg'}
                alt={'Forest Żabiec'}
            />
            <LogoText>{'FOREST Żabiec'}</LogoText>
        </LogoContainer>
    );
};

export default LogoForestZabiec;
