import { React } from "react";
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

function Header() {
    return (
        <div className= 'header'>
            <PersonIcon/>
            <ChatBubbleIcon/>
        </div>
    )
}

export default Header;