import styled from "styled-components";

export const StyledGithubLink = styled.a`
    display: flex; 
    align-items: center;
    justify-content: center;
    font-family: Raleway;
    transition: opacity 1s ease;
    font-size: 18px;
    
    &:hover {
        opacity: 0.6;
    }
    
    @media (max-width: 576px) {
        transform: scale(0.9);   
    }
    
    @media (max-width: 360px) {
        transform: scale(0.8);
    }
`;
