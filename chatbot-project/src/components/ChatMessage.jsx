import './ChatMessage.css';
import Robotpfp from '../assets/robot.png';
import Userpfp from '../assets/user.png';

export function ChatMessage({ message, sender }) {
  //const message = props.message;
  //const sender = props.sender;
  //const {message, sender} = props;

  /*
  if(sender === 'robot'){  
      return(
            <div>
              <img src="./images/robot.png" alt="profile picture" width="50"/>
              {message}
              
          </div>
      );
      
  }
  */

  return (
    <div className={`chat-message-${sender}`}>
      {
        sender === 'robot' && (
          <img src={Robotpfp}
            alt='Robot profile Picture'
            className="chat-mssg-profile" />
        )
      }
      <div className="chat-mssg-txt">
        {message}
      </div>


      {
        sender === 'user' && (
          <img src={Userpfp}
            alt="User Profile Picture"
            className="chat-mssg-profile" />
        )
      }
    </div>
  );
}



export default ChatMessage