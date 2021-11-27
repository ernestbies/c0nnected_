import styled from 'styled-components';

export const StyledFooter = styled.footer`
    width: 100%;
    font-family: Roboto Condensed, serif;
    text-align: center;
    font-weight: 300;
    font-size: 12px;
    background-color: black;
    border-top: 1px solid black;
    display: flex;
    flex-wrap: wrap;
`;

export const FooterLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
`;

export const FooterLogo = styled.img`
    width: 25px;
    height: 25px;
`;

export const FooterHeaderText = styled.p`
    color: white;
    font-family: Montserrat;
    margin-left: 12px;
    font-size: 15px;
    letter-spacing: 1px;
    font-weight: bold;
`;

export const FooterInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin: 25px;
    align-items: flex-start;
    line-height: 1.5;
`;

export const FooterInfoText = styled.p`
    color: white;
    font-family: Montserrat;
    font-size: 15px;   
    text-align: left; 
    width: 60%;
    
    @media (max-width: 576px) {
        font-size: 14px;   
    }
    
    @media (max-width: 360px) {
        width: 100%;
        font-size: 13px;
    }
    
`;

export const BoldText = styled.span`
    font-weight: bold;    
`;

export const AuthorInfoDiv = styled.div`
    margin-left: auto;
    margin-right: 30px;    
    margin-top: 30px;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    flex-wrap: wrap;
`;

export const AuthorInfo = styled.p`
    color: white;
    font-family: Montserrat;
    font-size: 15px;
    
    @media (max-width: 576px) {
        font-size: 14px;   
    }
    
    @media (max-width: 360px) {
        width: 100%;
        font-size: 13px;
    }
`;
