import { useState } from "react";
import { Chatbot } from "supersimpledev";
import './chatInput.css'


function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  })
}

export function ChatInput({setChatMessages }) {

  const [inputText, setInputText] = useState('');

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    const userMessage = inputText;
    setChatMessages(prev => [
      ...prev,
      {
        message: userMessage,
        sender: 'user',
        id: crypto.randomUUID()
      },
      {
        message: 'Typing...',
        sender: 'robot',
        id: 'typing'
      }
    ]);
    setInputText('');

    await wait(1500);

    const respose = Chatbot.getResponse(userMessage);


    setChatMessages(prev =>
      prev.map(mssg =>
        mssg.id === 'typing'
          ? {
            ...mssg,
            message: respose,
            id: crypto.randomUUID()
          }
          : mssg
      )
    );
  }

  function validateKey(event) {
    if (event.key === 'Enter') {
      sendMessage();
    } else if (event.key === 'Escape' || event.key === 'Esc') {
      setInputText('');
    }
  }

  return (
    <div className="chat-input-container">
      <input
        type="text"
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        onKeyDown={validateKey}
        value={inputText}
        className="chat-input"

      />
      <button
        onClick={sendMessage}
        className="send-button"
      >Send</button>
    </div>
  );
}

export default ChatInput;