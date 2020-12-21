import React from 'react'
import Chat from './Chat'
function Chats() {
    return (
        <div className='chats'>
            <Chat
                name= "Sarah"
                message="Hey! Wyd?"
                timestamp= '35 mins ago'
                profilePic= ''
            />
            <Chat
                name= "Alexa"
                message="Wow"
                timestamp= '21 mins ago'
                profilePic= ''            
            />
            <Chat
                name= "Natasha"
                message="This is my chance"
                timestamp= '5 days ago'
                profilePic= ''            
            />
            <Chat
                name= "Elon"
                message="We are hiring now o.O"
                timestamp= '12 mins ago'
                profilePic= ''            
            />
        </div>
    )
}

export default Chats
