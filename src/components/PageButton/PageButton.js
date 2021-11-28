import {StyledButton} from "./PageButton.styles";
import React from "react";
import {Link} from "react-router-dom";

const PageButton = ({title, link, style}) => {

    return (
        <StyledButton style={style} to={link} href={link} as={link.includes('#') ? 'a' : Link}>{title}</StyledButton>
    )
};

export default PageButton;
