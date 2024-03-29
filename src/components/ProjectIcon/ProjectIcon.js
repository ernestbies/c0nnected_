import React from "react";
import LogoPortfolio from "./LogoPortfolio/LogoPortfolio";
import LogoProgrammer from "./LogoProgrammer/LogoProgrammer";
import LogoFootballClub from "./LogoFootballClub/LogoFootballClub";
import LogoMediaBrowser from "./LogoMediaBrowser/LogoMediaBrowser";
import LogoToDo from "./LogoToDo/LogoToDo";
import LogoRMS from "./LogoRMS/LogoRMS";
import { StyledProjectIcon } from "./ProjectIcon.styles";

const ProjectIcon = ({ projectType }) => {
    const renderProjectIcon = (iconType) => {
        switch (iconType) {
            case "portfolio":
                return <LogoPortfolio />;
            case "programmer":
                return <LogoProgrammer />;
            case "football-club":
                return <LogoFootballClub />;
            case "media-browser":
                return <LogoMediaBrowser />;
            case "to-do":
                return <LogoToDo />;
            case "rms":
                return <LogoRMS />;
            default:
                return <LogoPortfolio />;
        }
    };

    return (
        <StyledProjectIcon>{renderProjectIcon(projectType)}</StyledProjectIcon>
    );
};

export default ProjectIcon;
