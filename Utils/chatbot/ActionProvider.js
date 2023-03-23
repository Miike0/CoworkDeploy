import React from 'react';
import dataSet from './data';


const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleQuestions = (question) => {

    const resp = createChatBotMessage(dataSet[question]);

    setState( (prev) =>({
      ...prev,
      messages : [ ...prev.messages, resp ],
    }));
  }
  const handleError = () => {
    const error = createChatBotMessage('Lo siento no entendí lo que dijiste');
    setState( (prev) =>({
      ...prev,
      messages : [ ...prev.messages, error ],
    }));
  }
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleQuestions,
            handleError
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;