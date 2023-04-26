import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import config from '../Utils/chatbot/configs/config';
import MessageParser from '../Utils/chatbot/MessageParser';
import ActionProvider from '../Utils/chatbot/ActionProvider';


import Fab from '@mui/material/Fab';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';


const userAvatar = 'https://firebasestorage.googleapis.com/v0/b/coworkv2.appspot.com/o/StockImages%2FuserAvatar.png?alt=media&token=a2ab4c9b-46e8-4e07-bca2-099d1d007c60';
const iconButton = 'https://firebasestorage.googleapis.com/v0/b/cowork-9bddd.appspot.com/o/websiteImages%2FblueSymbol.png?alt=media&token=bfec1fa5-929b-48f1-b0a9-a142eb230051';

function ChatbotComponent() {

  const [showBot, setShowBot] = useState(false);

  const handleShowBot = () => {
    setShowBot(prevState => !prevState);
  }

  const validatorInput = ( message ) => {
    if (!message) {
      return false
    }
    return true
  }

  return (
    <div>
      <div className="chatButton-Container">
        <Fab className='chatbot-button' onClick={handleShowBot}>
          <QuestionAnswerIcon />
        </Fab>
      </div>

      {showBot && 
        <div className="chatbotContainer">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
            placeholderText='¿Tienes alguna duda?'
            validator={validatorInput}
          />
      </div>
      }

    </div>
  )
}

export default ChatbotComponent;