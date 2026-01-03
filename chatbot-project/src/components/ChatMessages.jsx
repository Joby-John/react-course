import { useEffect, useRef } from "react";
import  ChatMessage  from './ChatMessage';
import './ChatMessages.css'


//custom hook
function useAutoScroll(depedency) {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.scrollTop = element.scrollHeight;
    }
  }, [depedency])

  return ref;

}


export function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useAutoScroll(chatMessages)//custom hook

  return (
    <div className="chat-messages-container"
      ref={chatMessagesRef}>
      {
        chatMessages.map((chatMessage) => {
          return (
            <ChatMessage
              key={chatMessage.id}
              message={chatMessage.message}
              sender={chatMessage.sender}
            />
          )
        })
      }
    </div>
  );


}

export default ChatMessages;