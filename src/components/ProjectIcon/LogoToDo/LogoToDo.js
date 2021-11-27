import React from "react";
import {
    LogoContainer,
    LogoImgContainer,
    LogoSubtitle,
    LogoTitle,
    LogoTitleStyled,
    StyledLogo,
} from "./LogoToDo.styles";

const LogoToDo = () => {
    return (
        <LogoContainer href={'https://todo-ernestbies.netlify.app'} title={'toDo - plan your future'}
                       target={'_blank'} rel={'noreferrer'}
        >
            <LogoImgContainer>
                <StyledLogo/>
                <LogoTitle>{'to'}<LogoTitleStyled>{'DO'}</LogoTitleStyled></LogoTitle>
            </LogoImgContainer>
            <LogoSubtitle>{'plan your future'}</LogoSubtitle>
        </LogoContainer>
    )
};

export default LogoToDo;
