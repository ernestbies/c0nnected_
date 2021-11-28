import styled from 'styled-components';
import {Link} from "react-router-dom";

export const StyledButton = styled(Link)`
    width: 150px;
    height: 50px;
    font-size: 15px;
    font-family: Montserrat;
    font-weight: bold;
    background: linear-gradient(#8B008B, #7a067a);
    color: white;
    border: 0;
    border-radius: 10px;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 2s ease-in-out;
    margin: 10px;
    text-align: center;
    line-height: 50px;
    
    &:hover {
         background: linear-gradient(white, white);
         color: black;
    }
`;
