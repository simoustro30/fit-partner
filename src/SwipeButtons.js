import React from 'react';
import './SwipeButtons.css'
import IconButton from '@material-ui/core/IconButton'
import FavoriteIcon from '@material-ui/icons/Favorite';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import StarIcon from '@material-ui/icons/Star';
import ReplayIcon from '@material-ui/icons/Replay';
function SwipeButtons() {
    return(
        <div className= 'swipeButtons'>
            <IconButton className= 'swipeButton__repeat'>
                <ReplayIcon fontSize='large'/>
            </IconButton>
            <IconButton className= 'swipeButton__left'>
                <NotInterestedIcon fontSize='large'/>
            </IconButton>
            <IconButton className= 'swipeButton__star'> 
                <StarIcon fontSize='large'/>
            </IconButton>
            <IconButton className= 'swipeButton__right'>
                <FavoriteIcon fontSize='large'/>
            </IconButton>
        </div>
    );
};
export default SwipeButtons;