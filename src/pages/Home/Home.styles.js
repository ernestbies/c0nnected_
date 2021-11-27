import styled from 'styled-components';

export const HomeTitle = styled.p`
    font-size: 50px;
    font-family: Montserrat;   
    color: white; 
    font-weight: bold;
    letter-spacing: 1px;
    margin-left: 10px;
    white-space: pre-wrap;
`;

export const HomeSubtitle = styled.p`
    font-size: 16px;
    font-family: Montserrat;   
    color: white; 
    font-weight: 300;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 5px;
    margin-top: 30px;
    
    @media (max-width: 576px) {
        font-size: 14px;     
    }
    
    @media (max-width: 360px) {
        font-size: 12px;     
    }
`;

export const HomeLogo = styled.img`
    width: 50px;
    height: 50px;       
 `;

export const HomeHeader = styled.div`
    display: flex;    
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 60px;
    margin-top: 50px;
    
    @media (max-width: 576px) {
        margin-top: 25px;
        transform: scale(0.8);     
    }
    
    @media (max-width: 360px) {
        margin-top: 12px;
        transform: scale(0.6);     
    }
`;

export const HomeHeaderWrapper = styled.div`
    display: flex;    
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    height: 650px;
`;

export const HomeSection = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #383838;
    flex-direction: column;
`;

export const TextBold = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: white;   
    font-family: Montserrat;
`;

export const ColoredText = styled.span`
    color: #a800a8;
`;

export const AppInfo = styled.p`
    color: #dbdbdb;
    text-align: center;
    font-size: 18px;
    margin-top: 75px;
    font-family: Montserrat;
    width: 60%;
    line-height: 1.7;
    
    @media (max-width: 576px) {
        font-size: 16px;     
    }
    
    @media (max-width: 360px) {
        font-size: 14px;     
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;   
    margin: 30px; 
    
    @media (max-width: 576px) {
        transform: scale(0.8);   
    }
    
    @media (max-width: 360px) {
        transform: scale(0.7);   
    }
`;

export const ProjectsSection = styled.div`
    display: flex;
    flex-direction: column;  
    width: 100%;
    align-items: center;
    min-height: 400px;
    border-bottom: 1px solid #383838;
`;

export const ProjectsContainer = styled.div`
    display: flex;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    width: 70%;
    flex-wrap: wrap;
    
    @media (max-width: 576px) {
        width: 100%;
    }
`;

export const TutorialSection = styled.div`
    display: flex;
    flex-direction: column;  
    width: 100%;
    align-items: center;
    min-height: 400px;
`;

export const TutorialInfo = styled.div`
    font-size: 32px;
    font-family: Montserrat;
    color: white;
    margin-top: 100px;
    margin-bottom: 80px;
    
    @media (max-width: 576px) {
        font-size: 28px;
        margin-top: 50px;
        margin-bottom: 40px;
    }
`;
