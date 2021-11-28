import React from "react";
import {BoxQaA, ColoredText, CommandText, FaqContainer, FaqHeader, TextQaA} from "./MessageFaq.styles";
import Caret from "../../Caret/Caret";
import faq from "./faq";
import statusList from "../statusList";

const MessageFaq = () => {

    const renderStatusList = () => {
        return Object.keys(statusList).map((el, index) => `<span style="color: white"><span style="color: ${statusList[el].color}">${statusList[el].code} // ${statusList[el].no}<span style="color: white"> - </span></span>${statusList[el].description}</span>\n`).join('');
    }

    const replaceTextByHTML = (text, textToFind) => {
        return text.replace(textToFind, renderStatusList());
    }

    const filterText = (text, textToFind) => {
        return <span dangerouslySetInnerHTML={{__html: replaceTextByHTML(text, textToFind)}}/>;
    }

    const renderQaA = (faq) => {
        return (
            faq.map(el =>
                <BoxQaA key={el.id}>
                    <TextQaA><ColoredText color={'yellow'}>[{el.id}] Q</ColoredText>: {el.q}</TextQaA>
                    <TextQaA><ColoredText color={'yellow'}>A</ColoredText>: {filterText(el.a, 'STATUSES_LIST')}
                    </TextQaA>
                </BoxQaA>
            )
        )
    };

    return (
        <FaqContainer id={'faq'}>
            <FaqHeader>FAQ</FaqHeader>
            <CommandText color={'#ba0dba'}>~/c0nnected_
                <ColoredText color={'white'}>$ cd {'introduction'}</ColoredText>
            </CommandText>
            <CommandText color={'#ba0dba'} marginTop={-10}>~/c0nnected_/{'introduction'}
                <ColoredText style={{color: 'white'}}>$ cat hall_of_fame_faq.txt</ColoredText>
            </CommandText>
            <CommandText fontSize={'small'} marginBottom={25} marginTop={-10}>{'> Hall of Fame FAQ'}</CommandText>
            {
                renderQaA(faq)
            }
            <CommandText marginTop={-15} fontSize={'small'}>Have fun.</CommandText>
            <CommandText color={'#ba0dba'}>~/c0nnected_/{'introduction'}
                <ColoredText color={'white'}>$ <Caret width={'5px'} height={'10px'}/></ColoredText>
            </CommandText>
        </FaqContainer>
    )
}

export default MessageFaq;
