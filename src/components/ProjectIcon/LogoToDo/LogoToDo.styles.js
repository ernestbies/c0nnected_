import styled from 'styled-components';

export const LogoContainer = styled.a`
    display: flex;
    flex-direction: column;
    height: 50px;
    align-items: center;
    justify-content: center;
    width: 120px;
`;

export const LogoImgContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
`;

export const StyledLogo = styled.div`
    width: 10px;
    height: 10px;
    background-color: white;
    margin-right: 15px;
    transform: rotate(45deg);
    box-shadow: 1px 5px white, 5px 1px white;
    margin-top: 3px;
`;

export const LogoTitle = styled.p`
    color: white;
    font-family: Zen;
    font-weight: 300;
    font-size: 23px;
    text-shadow: 2px 1px #111;
`;

export const LogoTitleStyled = styled.span`
    font-weight: 700;
    color: white;
`;

export const LogoSubtitle = styled.p`
    color: white;
    font-family: Caveat;
    font-size: 14px;
    margin: 0;
    margin-left: 15px;
`;
