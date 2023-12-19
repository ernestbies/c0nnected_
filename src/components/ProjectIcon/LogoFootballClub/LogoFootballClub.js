import React from "react";
import { LogoContainer, LogoText, StyledLogo } from "./LogoFootballClub.styles";

const LogoFootballClub = () => (
    <LogoContainer
        href={"https://footballclubapp.netlify.app"}
        title={"FOOTBALL Club - template"}
        target={"_blank"}
        rel={"noreferrer"}
    >
        <StyledLogo
            width={50}
            height={50}
            src={"/projects/football-club-logo.png"}
            alt={"FOOTBALL Club"}
        />
        <LogoText>
            <b>{"FOOTBALL"}</b>
            {" Club"}
        </LogoText>
    </LogoContainer>
);

export default LogoFootballClub;
