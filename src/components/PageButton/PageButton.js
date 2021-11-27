import {StyledButton} from "./PageButton.styles";
import React from "react";

const PageButton = ({title, link, redirect}) => {

    const otherProps = redirect ? {target: '_blank', rel: 'noreferrer'} : {};

    return (
        <StyledButton href={link} {...otherProps}>{title}</StyledButton>
    )
};

export default PageButton;
