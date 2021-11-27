import React from "react";
import PropTypes from 'prop-types';
import {StyledPage} from "./Layout.styles";
import {GlobalStyles} from "../../themes/GlobalStyles";
import SEO from "../SEO";
import Navbar from "../../parts/Navbar/Navbar";
import Footer from "../../parts/Footer/Footer";

const Layout = ({children}) => {
    return (
        <>
            <SEO/>
            <GlobalStyles/>
            <StyledPage>
                <Navbar/>
                {children}
                <Footer/>
            </StyledPage>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout;
