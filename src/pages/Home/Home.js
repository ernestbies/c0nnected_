import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import {
    AppInfo,
    ButtonsContainer,
    ColoredText,
    HomeDivSection,
    HomeHeader,
    HomeHeaderWrapper,
    HomeLogo,
    HomeSection,
    HomeSubtitle,
    HomeTitle,
    ProjectsContainer,
    ProjectsSection,
    StatContainer,
    StatDesc,
    StatInfo,
    StatSection,
    TextBold,
    TutorialInfo,
} from "./Home.styles";
import PageButton from "../../components/PageButton/PageButton";
import ProjectIcon from "../../components/ProjectIcon/ProjectIcon";
import TutorialBox from "../../components/TutorialBox/TutorialBox";
import { fetchPosts } from "../../utils/fetchData";

const Home = () => {
    const [stats, setStats] = useState({ visitors: 0, messages: 0 });
    const controller = new AbortController();
    const signal = controller.signal;

    useEffect(() => {
        fetchPosts(signal)
            .then((res) => {
                setStats({
                    visitors: res.visitors,
                    messages: res.posts.length,
                });
            })
            .catch((error) => {
                if (error.name !== "AbortError") {
                    console.error("Error while fetching messages: " + error);
                }
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Layout>
            <HomeSection>
                <HomeHeaderWrapper>
                    <HomeHeader>
                        <HomeLogo src={"logo.svg"} />
                        <HomeTitle>{"c0nnected_"}</HomeTitle>
                    </HomeHeader>
                    <HomeSubtitle>
                        {"is waiting for"}
                        <ColoredText>{" u"}</ColoredText>
                        {". stay "}
                        <ColoredText>{"connected"}</ColoredText>
                        {"."}
                    </HomeSubtitle>
                    <AppInfo>
                        {
                            "Join online chat with other users. The chat works on the basis of the Hall of Fame, so carefully think about the message you want to leave — familiarize yourself with the rules and operation of the application and then join us!"
                        }
                    </AppInfo>
                    <ButtonsContainer>
                        <PageButton title={"Chat room"} link={"/chat-room"} />
                        <PageButton title={"Tutorial"} link={"#tutorial"} />
                    </ButtonsContainer>
                </HomeHeaderWrapper>
                <ProjectsSection>
                    <TextBold>{"CHECK MY OTHER PROJECTS"}</TextBold>
                    <ProjectsContainer>
                        <ProjectIcon projectType={"portfolio"} />
                        <ProjectIcon projectType={"media-browser"} />
                        <ProjectIcon projectType={"football-club"} />
                        <ProjectIcon projectType={"programmer"} />
                        <ProjectIcon projectType={"to-do"} />
                        <ProjectIcon projectType={"rms"} />
                    </ProjectsContainer>
                </ProjectsSection>
                <HomeDivSection id={"tutorial"}>
                    <TutorialInfo>{"How it is working?"}</TutorialInfo>
                    <TutorialBox phase={0} />
                    <TutorialBox phase={1} />
                    <TutorialBox phase={2} />
                </HomeDivSection>
                <HomeDivSection>
                    <TutorialInfo>{"Hall of Fame Statistics"}</TutorialInfo>
                    <StatSection style={{ marginBottom: 80 }}>
                        <StatContainer>
                            <StatInfo>{stats.visitors}</StatInfo>
                            <StatDesc>{"visitors in hall of fame"}</StatDesc>
                        </StatContainer>
                        <StatContainer>
                            <StatInfo>{stats.messages}</StatInfo>
                            <StatDesc>{"messages in hall of fame"}</StatDesc>
                        </StatContainer>
                    </StatSection>
                </HomeDivSection>
            </HomeSection>
        </Layout>
    );
};

export default Home;
