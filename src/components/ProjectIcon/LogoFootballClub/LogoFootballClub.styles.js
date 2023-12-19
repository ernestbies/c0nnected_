import styled from "styled-components";

export const StyledLogo = styled.img`
    pointer-events: none;
    filter: invert(100%);
`;

export const LogoContainer = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LogoText = styled.span`
    color: white;
    font-family: Roboto Condensed, serif;
    margin-left: 8px;
    font-size: 16px;
`;
