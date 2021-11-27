import {
    IconContainer,
    MediaBrowserIcon,
    MediaBrowserSubtitle,
    MediaBrowserTitle,
    TitleContainer
} from "./LogoMediaBrowser.styles";
import React from "react";

const LogoMediaBrowser = () => {
    return (
        <IconContainer href={'https://www.youtube.com/watch?v=7r1r9JiKsYc'} title={'Media Browser - find favorite movies, series & people'}
                       target={'_blank'} rel={'noreferrer'}
        >
            <MediaBrowserIcon src={'projects/mediabrowser-logo.png'}/>
            <TitleContainer>
                <MediaBrowserTitle>{'Media Browser'}</MediaBrowserTitle>
                <MediaBrowserSubtitle>{'Movies & Series & People'}</MediaBrowserSubtitle>
            </TitleContainer>
        </IconContainer>
    )
};

export default LogoMediaBrowser;
