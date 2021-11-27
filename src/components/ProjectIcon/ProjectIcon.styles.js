import styled from 'styled-components';

export const StyledProjectIcon = styled.div`
    transition: opacity 1s ease-in-out;
    margin: 20px;

    &:hover {
        opacity: 0.7;
    }    
    
    @media (max-width: 576px) {
        margin: 10px;
    }
`;
