import React from "react";
import Layout from "../../components/Layout/Layout";
import {
    AppInfo, ButtonsContainer,
    ColoredText,
    HomeHeader,
    HomeHeaderWrapper,
    HomeLogo,
    HomeSection,
    HomeSubtitle,
    HomeTitle, ProjectsContainer, ProjectsSection, TextBold, TutorialInfo, TutorialSection
} from "./Home.styles";
import PageButton from "../../components/PageButton/PageButton";
import ProjectIcon from "../../components/ProjectIcon/ProjectIcon";
import TutorialBox from "../../components/TutorialBox/TutorialBox";

const Home = () => {
    return (
        <Layout>
            <HomeSection>
                <HomeHeaderWrapper>
                    <HomeHeader>
                        <HomeLogo src={'logo.svg'}/>
                        <HomeTitle>{'c0nnected_'}</HomeTitle>
                    </HomeHeader>
                    <HomeSubtitle>{'is waiting for'}<ColoredText>{' u'}</ColoredText>{'. stay '}<ColoredText>{'connected'}</ColoredText>{'.'}</HomeSubtitle>
                    <AppInfo>{'Join online chat with other users. The chat works on the basis of the Hall of Fame, so carefully think about the message you want to leave — familiarize yourself with the rules and operation of the application and then join us!'}</AppInfo>
                    <ButtonsContainer>
                        <PageButton title={'Chat room'} link={'https://ebies.netlify.app/hall-of-fame'} redirect/>
                        <PageButton title={'Tutorial'} link={'#tutorial'}/>
                    </ButtonsContainer>
                </HomeHeaderWrapper>
                <ProjectsSection>
                    <TextBold>
                        {'CHECK MY OTHER PROJECTS'}
                    </TextBold>
                    <ProjectsContainer>
                        <ProjectIcon projectType={'portfolio'}/>
                        <ProjectIcon projectType={'personal'}/>
                        <ProjectIcon projectType={'media-browser'}/>
                        <ProjectIcon projectType={'forest'}/>
                        <ProjectIcon projectType={'to-do'}/>
                        <ProjectIcon projectType={'rms'}/>
                    </ProjectsContainer>
                </ProjectsSection>
                <TutorialSection id={'tutorial'}>
                    <TutorialInfo>{'How it is working?'}</TutorialInfo>
                    <TutorialBox phase={0}/>
                    <TutorialBox phase={1}/>
                    <TutorialBox phase={2}/>
                </TutorialSection>
            </HomeSection>
        </Layout>
    )
};

export default Home;
