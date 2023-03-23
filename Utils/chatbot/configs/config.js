import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from '@mui/material/Avatar';


const botName = 'Co-Bot!';
const botTitle = 'Bienvenido a Co-Work!';
const botAvatar = 'https://firebasestorage.googleapis.com/v0/b/cowork-9bddd.appspot.com/o/websiteImages%2FblueSymbol.png?alt=media&token=bfec1fa5-929b-48f1-b0a9-a142eb230051';
const userAvatar = 'https://firebasestorage.googleapis.com/v0/b/coworkv2.appspot.com/o/StockImages%2FuserAvatar.png?alt=media&token=a2ab4c9b-46e8-4e07-bca2-099d1d007c60';

const avatarStyles = {
  width: 35,
  height: 35,
  borderRadius: '50%',
  objectFit: 'contain'
};

const config = {
  initialMessages: [createChatBotMessage(`Hola!, soy ${botName}, ¿En que puedo ayudarte?`)],
  botName : botName,
  customComponents : {
    //header: () => <div style={{display: 'none'}}>{botTitle}</div>,
    botAvatar: (props) => <Avatar alt={botName} src={botAvatar} sx={avatarStyles} className='botAvatar' {...props} />,
    userAvatar: (props) => <Avatar alt='User Avatar' src={userAvatar} sx={avatarStyles} className='userAvatar' {...props} />,


  },
  customStyles: {
    botMessageBox: {
      backgroundColor: '#4098d3',
    },
    userMessageBox: {
      backgroundColor: '#fff',
    },
    chatButton: {
      backgroundColor: '#4098d3',
    },
    
    background: {
      backgroundColor: '#212121'
    }
  },
};

export default config;