import {StyledGithubLink} from "./GithubLink.styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import React from "react";

const GithubLink = ({style}) => {
    return (
        <StyledGithubLink style={style} href={'https://github.com/ernestbies'} target={'_blank'} rel={'noreferrer'}>
            <FontAwesomeIcon
                icon={faGithub}
                color={'#DCDCDC'}
                style={{width: 30, height: 30, marginRight: 5}}
            />
            {'GitHub'}
        </StyledGithubLink>
    )
};

export default GithubLink;
