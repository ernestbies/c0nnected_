import React from "react";
import PropTypes from 'prop-types';
import {MessageDiv, MessageLine} from "./MessageItem.styles";
import {formatData} from "../../../utils/helperFunctions";
import Caret from "../../Caret/Caret";

export const MessageItem = ({date, username, message, isAdmin, caret}) => {

    return (
        <MessageDiv>
            <MessageLine fontWeight={700} color={'#00BFFF'}>
                [{!date ? 'FUTURE_10100111001' : formatData(date)}]
            </MessageLine>
            {isAdmin && <MessageLine>&#128081; </MessageLine>}
            <MessageLine fontWeight={700} color={'#00FF00'} isAdmin={isAdmin}>{username}</MessageLine>
            <MessageLine fontWeight={300} color={'white'}>:</MessageLine>
            {isAdmin && <MessageLine fontWeight={700} color={'orange'}>~/c0nnected_
            <MessageLine fontWeight={300} color={'white'}>$</MessageLine></MessageLine>}
            <MessageLine fontWeight={300} color={'white'}> {message}</MessageLine>
            {caret && <Caret width={'5px'} height={'10px'}/>}
        </MessageDiv>
    )
}

MessageItem.propTypes = {
    date: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    isAdmin: PropTypes.bool,
    caret: PropTypes.bool
}

MessageItem.defaultProps = {
    isAdmin: false,
    caret: false
}

export default MessageItem;
