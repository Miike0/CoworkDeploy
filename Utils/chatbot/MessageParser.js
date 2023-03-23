import React from 'react';
import dataSet from './data';
import encontrarMasSimilar from './EncontrarMasSimilar';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {

    try {
      const dataSetkeys = Object.keys(dataSet);

      const messageFounded = encontrarMasSimilar( message, dataSetkeys );

      actions.handleQuestions(messageFounded);
    } catch (error) {
      actions.handleError();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;