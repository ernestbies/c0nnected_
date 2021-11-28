import styled from 'styled-components';

export const BoxQaA = styled.div`
    margin-bottom: 30px;
    white-space: pre-wrap;    
`;

export const TextQaA = styled.p`
    font-family: Source Code Pro, serif;
    font-weight: 300;
    text-align: left;
    margin-top: -5px;
    color: white;
    font-size: 12px;  
    
    @media (max-width: 480px) {
        font-size: 10px;
    }      
`;

export const ColoredText = styled.span`
    color: ${({color}) => color};
`;

export const FaqContainer = styled.div`
    max-width: 700px;
    margin-bottom: 30px;
    margin-left: 5px; 
    margin-right: 5px;
    padding: 10px;
    background-color: #111;
`;

export const FaqHeader = styled.p`
    margin-top: 10px;
    font-size: 20px;
    font-weight: bold;
    font-family: Montserrat;
    color: white;
`;

export const CommandText = styled.p`
    font-family: Source Code Pro, serif;
    font-weight: 300;
    text-align: left;
    color: ${({color}) => color ?? 'white'};
    margin-left: ${({marginLeft}) => marginLeft+'px'};
    margin-right: ${({marginRight}) => marginRight+'px'};
    margin-top: ${({marginTop}) => marginTop+'px'};
    margin-bottom: ${({marginBottom}) => marginBottom+'px'};
    font-size: ${({fontSize}) => fontSize === 'small' ? '12px' : '13px'};
    
    @media (max-width: 480px) {
        font-size: ${({fontSize}) => fontSize === 'small' ? '10px' : '11px'};
    }
`;
