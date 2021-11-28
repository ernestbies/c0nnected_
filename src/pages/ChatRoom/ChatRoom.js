import React from "react";
import Layout from "../../components/Layout/Layout";
import MessageBox from "../../components/MessageBox/MessageBox";
import {ChatRoomContainer} from "./ChatRoom.styles";
import MessageFaq from "../../components/MessageBox/MessageFaq/MessageFaq";
import PageButton from "../../components/PageButton/PageButton";

const ChatRoom = () => {
    return (
        <Layout>
            <ChatRoomContainer>
                <MessageBox/>
                <PageButton title={'Homepage'} link={'/'} style={{margin: 40}}/>
                <MessageFaq/>
            </ChatRoomContainer>
        </Layout>
    )
};

export default ChatRoom;
