import {
    ColorText, IconBox,
    StyledTutorialBox, StyledUserdataBox,
    TutorialHeader,
    TutorialIconSection,
    TutorialText,
    TutorialTextSection, UserdataLine
} from "./TutorialBox.styles";
import React from "react";
import {AiFillLock} from "react-icons/ai";
import {FaCheck, FaEnvelope} from "react-icons/all";
import './TutorialBox.css';
import Caret from "../Caret/Caret";

const TutorialBox = ({phase}) => {
     return (
         <StyledTutorialBox>
             {
                 phase === 0 &&
                     <>
                         <TutorialTextSection>
                             <TutorialHeader>
                                 {'1. Solve the mystery'}
                             </TutorialHeader>
                             <TutorialText>
                                 {'After entering the chat room, solve the puzzle to connect to the chat. This is a required condition to leave your message. If you enter the wrong solution, you can try again. The number of attempts is unlimited.'}
                             </TutorialText>
                         </TutorialTextSection>
                         <TutorialIconSection>
                             <AiFillLock color={'goldenrod'} className={'icon'} type={'lock'}/>
                         </TutorialIconSection>
                     </>
             }
             {
                 phase === 1 &&
                 <>
                     <TutorialIconSection>
                         <StyledUserdataBox>
                             <UserdataLine><ColorText color={'orange'}>{'> Username: '}</ColorText>{'ernestbies'}</UserdataLine>
                             <UserdataLine><ColorText color={'deepskyblue'}>{'> Message: '}</ColorText>{'Hello everybody '}<Caret/></UserdataLine>
                         </StyledUserdataBox>
                     </TutorialIconSection>
                     <TutorialTextSection>
                         <TutorialHeader>
                             {'2. Enter username & message'}
                         </TutorialHeader>
                         <TutorialText>
                             {'The user can only send one unique message assigned to the name. After sending the message, the username is taken and cannot be used again. Messages are not editable nor deletable.'}
                         </TutorialText>
                     </TutorialTextSection>
                 </>
             }
             {
                 phase === 2 &&
                 <>
                     <TutorialTextSection>
                         <TutorialHeader>
                             {'3. Send your notice'}
                         </TutorialHeader>
                         <TutorialText>
                             {'After sending the message, it will be saved in the database and will remain on the site forever.'}
                         </TutorialText>
                     </TutorialTextSection>
                     <TutorialIconSection>
                         <IconBox>
                             <FaEnvelope color={'#4d4d4d'} className={'icon'} type={'msg'}/>
                             <FaCheck size={30} color={'green'} style={{position: 'absolute', bottom: 5, right: -15}}/>
                         </IconBox>
                     </TutorialIconSection>
                 </>
             }
         </StyledTutorialBox>
     )
};

export default TutorialBox;
