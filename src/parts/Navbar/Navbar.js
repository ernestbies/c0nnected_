import React from "react";
import {HeaderText, NavLink, NavLogo, StyledNavbar} from "./Navbar.styles";
import GithubLink from "../../components/GithubLink/GithubLink";

const Navbar = () => {

    return (
        <StyledNavbar>
            <NavLink href={'https://c0nnected.netlify.app'}>
                <NavLogo alt={'c0nnected_'} src={'/logo.svg'}/>
                <HeaderText>{'c0nnected_'}</HeaderText>
            </NavLink>

            <GithubLink style={{marginLeft: 'auto', marginRight: 30}}/>
        </StyledNavbar>
    );
};

export default Navbar;
