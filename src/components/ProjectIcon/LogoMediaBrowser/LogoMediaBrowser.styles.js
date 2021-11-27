import styled from 'styled-components';

export const IconContainer = styled.a`
    display: flex;    
    height: 60px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const MediaBrowserIcon = styled.img`
    width: 60px;
    height: 60px;   
    filter: grayscale(100%) brightness(650%);
`;

export const MediaBrowserTitle = styled.p`
    font-size: 15px;
    font-family: Roboto Condensed;  
    color: white;  
    margin: 0;
`;

export const MediaBrowserSubtitle = styled.p`
    font-size: 12px;
    font-family: Montserrat;  
    color: white;  
    margin: 0;
`;

export const TitleContainer = styled.div`
    display: flex;
    margin-left: 5px;
    flex-direction: column;
    justify-content: center;
`;
