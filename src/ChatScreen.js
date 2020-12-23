import React, { useState } from 'react'
import './ChatScreen.css'
import Avatar from '@material-ui/core/Avatar'
function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Sarah',
            image: ' ',
            message: 'heey'
        },
        {
            name: 'Sarah',
            image: ' ',
            message: 'Hey! Wyd?'
        },
        {
            message: 'Im chilling, how are you?'
        }
    ]);
        const handleSend = e => {
            e.preventDefault();
            setMessages([...messages, {message: input}]);
            setInput('');
        }
    return (
        <div className='chatScreen'>
            <h2>Chat screen</h2>
            <p className='chatScreen__timestamp'>You matched with Sarah</p>
            {messages.map((message) => (
                message.name ? (
                <div className= 'chatScreen__message'>
                    <Avatar className='chat__image' alt={message.name} src={message.image}/>
                    <p className="chatScreen__text">{message.message}</p>
                </div>) : (
                <div className= 'chatScreen__message'>
                    <p className="chatScreen__textUser">{message.message}</p>
                </div>
                )
                
            ))}
                <form className = "chatScreen__input">
                    <input
                        value= {input}
                        onChange = {(e) => setInput(e.target.value)}
                        type= 'text'
                        placeholder= 'Type a message...'
                        className = "chatScreen__inputField"
                    />
                    <button
                        className = "chatScreen__inputButton"
                        onClick = {handleSend}    
                    >
                        Send
                    </button>
                </form>
        </div>
    )
}

export default ChatScreen
