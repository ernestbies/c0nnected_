import styled, {keyframes} from "styled-components";

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

const Caret = styled.span`
    display: inline-block;
    background-color: white;
    width: ${({width}) => width ?? '10px'};
    height: ${({height}) => height ?? '20px'};
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

export default Caret;
