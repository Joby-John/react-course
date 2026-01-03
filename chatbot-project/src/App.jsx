import { useState } from 'react';

import  ChatInput  from './components/ChatInput';
import  ChatMessages  from './components/ChatMessages';

import './App.css'


function App() {
  //syntax of useState
  //const [currentValue, setCurrentValue] = React.useState(initialValue);

  const [chatMessages, setChatMessages] = useState([
    {
      id: crypto.randomUUID(),
      message: "Hello, How can I Help you today",
      sender: "robot"
    },
  ]);

  //const [chatMessages, setChatMessages] = array;
  //const chatMessages = array[0];
  //const setChatMessages = array[1];

  return (
    <div className="app-container">

      <ChatMessages
        chatMessages={chatMessages}
      />

      <ChatInput
        setChatMessages={setChatMessages}
      />

    </div>
  );
}

export default App
