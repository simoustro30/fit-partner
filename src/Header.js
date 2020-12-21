import { React } from "react";
import './Header.css'
import {Link, useHistory} from 'react-router-dom'
import RunningLogo from './running_logo.png'
import PersonIcon from '@material-ui/icons/Person';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

function Header({ backButton }) {
    const history = useHistory();
    return (
        <div className= 'header'>
            {backButton ? (
                <IconButton onClick={()=> history.replace(backButton)}>
                    <ArrowBackIosIcon className = 'header__back' fontSize= 'large'/>
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon className= 'header__icon' fontSize= 'large'/>
                </IconButton>
            )}
            <Link to= '/'>
            <img
                className = "header__logo"
                src = {RunningLogo}
                alt = 'fitPartner logo'
            />
            </Link>
            <Link to="/chats">
                <IconButton>
                    <ChatBubbleIcon className= 'header__icon' fontSize= 'large'/>
                </IconButton>
            </Link>
 
        </div>
    )
}

export default Header;