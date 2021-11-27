import styled, {keyframes} from "styled-components";

export const StyledTutorialBox = styled.div`
    width: 70%;
    height: 300px;
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    
    @media (max-width: 768px) {
        width: 90%;
        flex-direction: column;
        margin-top: 50px;
        margin-bottom: 50px;
    }
    
    @media (max-width: 360px) {
        margin-top: 25px;
        margin-bottom: 25px;
    }
`;

export const TutorialHeader = styled.p`
    font-size: 25px;
    font-family: Montserrat;
    font-weight: bold;  
    color: white;  
    
    @media (max-width: 576px) {
        font-size: 22px;
    }
    
    @media (max-width: 360px) {
        font-size: 18px;
    }
`;

export const TutorialText = styled.p`
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 300;   
    color: white;
    line-height: 1.7;
        
    @media (max-width: 576px) {
        font-size: 14px;
    }
    
    @media (max-width: 360px) {
        font-size: 12px;
    }
`;

export const TutorialTextSection = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    
    @media (max-width: 768px) {
        order: 0;
    }
`;

export const TutorialIconSection = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media (max-width: 768px) {
        order: 1;
    }
`;

export const StyledUserdataBox = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 22px;
    font-family: Raleway;
    letter-spacing: 1px;
    user-select: none;
    
    @media (max-width: 576px) {
        font-size: 18px;
    }
    
    @media (max-width: 360px) {
        font-size: 16px;
    }
`;

export const UserdataLine = styled.p`
    margin: 0;
    color: white;
    margin-top: 5px;
`;

export const ColorText = styled.span`
    color: ${({color}) => color};
`;

const showHide = keyframes`
    0% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
`;

export const Caret = styled.span`
    display: inline-block;
    background-color: white;
    width: 10px;
    height: 20px;
    animation-name: ${showHide};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: steps(1);   
    
    @media (max-width: 576px) {
        height: 18px;
        width: 8px;
    }
    
    @media (max-width: 360px) {
        height: 16px;
        width: 6px;
    } 
`;

export const IconBox = styled.div`
    position: relative;    
`;
