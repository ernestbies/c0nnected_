import styled from 'styled-components';

export const StyledNavbar = styled.nav`
    height: 90px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #383838;
    background-color: black;
`;

export const HeaderText = styled.p`
    color: white;
    font-family: Montserrat;
    margin-left: 15px;
    font-size: 18px;
    letter-spacing: 1px;
    font-weight: bold;
`;

export const NavLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media (max-width: 576px) {
        transform: scale(0.9);   
    }
    
    @media (max-width: 360px) {
        transform: scale(0.8);
    }
`;

export const NavLogo = styled.img`
    width: 30px;
    height: 30px;
    margin-left: 35px;
`;
